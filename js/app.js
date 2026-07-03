/* ============================================================
   Cuba History Timeline — app logic
   Vanilla JS, no build step. Reads ERAS / EVENTS / QUIZZES from data.js.
   ============================================================ */

(() => {
  const timelineEl = document.getElementById("timeline");
  const eraFiltersEl = document.getElementById("era-filters");
  const searchInput = document.getElementById("search-input");
  const searchResultsEl = document.getElementById("search-results");
  const funFactToggle = document.getElementById("toggle-funfacts");
  const drawer = document.getElementById("drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");
  const drawerContent = document.getElementById("drawer-content");
  const drawerClose = document.getElementById("drawer-close");

  const eventById = Object.fromEntries(EVENTS.map(e => [e.id, e]));
  const eraByKey = Object.fromEntries(ERAS.map(e => [e.key, e]));

  let activeEra = "all";
  let funFactsOnly = false;

  function fmtDate(displayStr) {
    return displayStr;
  }

  function eventsForEra(eraKey) {
    return EVENTS
      .filter(e => e.era === eraKey)
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  /* ---------------- Build the timeline ---------------- */

  function buildEraChips() {
    ERAS.forEach(era => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "era-chip";
      btn.dataset.era = era.key;
      btn.style.setProperty("--era-color", era.color);
      btn.textContent = era.short;
      btn.addEventListener("click", () => setActiveEra(era.key));
      eraFiltersEl.appendChild(btn);
    });
    eraFiltersEl.querySelector('[data-era="all"]').addEventListener("click", () => setActiveEra("all"));
  }

  function setActiveEra(eraKey) {
    activeEra = eraKey;
    eraFiltersEl.querySelectorAll(".era-chip").forEach(chip => {
      chip.classList.toggle("is-active", chip.dataset.era === eraKey);
    });
    document.querySelectorAll(".era-section").forEach(section => {
      const match = eraKey === "all" || section.dataset.era === eraKey;
      section.hidden = !match;
    });
    if (eraKey !== "all") {
      const target = document.querySelector(`.era-section[data-era="${eraKey}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function toggleFunFacts() {
    funFactsOnly = !funFactsOnly;
    funFactToggle.setAttribute("aria-pressed", String(funFactsOnly));
    funFactToggle.classList.toggle("is-active", funFactsOnly);
    document.body.classList.toggle("funfacts-only", funFactsOnly);
  }

  function buildTimeline() {
    ERAS.forEach(era => {
      const events = eventsForEra(era.key);
      if (!events.length) return;

      const section = document.createElement("section");
      section.className = "era-section";
      section.dataset.era = era.key;
      section.style.setProperty("--era-color", era.color);

      const header = document.createElement("div");
      header.className = "era-section__header";
      const first = events[0].dateDisplay, last = events[events.length - 1].dateDisplay;
      header.innerHTML = `
        <h2>${era.label}</h2>
        <p class="era-section__range">${escapeHtml(first)} &ndash; ${escapeHtml(last)}</p>
      `;
      section.appendChild(header);

      const cardList = document.createElement("div");
      cardList.className = "card-list";
      events.forEach(ev => cardList.appendChild(renderCard(ev)));
      section.appendChild(cardList);

      const quiz = QUIZZES[era.key];
      if (quiz && quiz.length) {
        section.appendChild(renderQuiz(era, quiz));
      }

      timelineEl.appendChild(section);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function renderCard(ev) {
    const card = document.createElement("article");
    card.className = "event-card" + (ev.isFunFact ? " event-card--funfact" : "");
    card.dataset.id = ev.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${ev.title}, ${ev.dateDisplay}. Open details.`);

    card.innerHTML = `
      ${ev.isFunFact ? '<div class="funfact-ribbon">✨ Did You Know</div>' : ""}
      <div class="event-card__media" data-role="media">
        <div class="media-fallback" style="background:${eraByKey[ev.era].color}22;border-color:${eraByKey[ev.era].color}"></div>
      </div>
      <div class="event-card__body">
        <div class="event-card__date">${escapeHtml(ev.dateDisplay)}</div>
        <h3 class="event-card__title">${escapeHtml(ev.title)}</h3>
        <p class="event-card__summary">${escapeHtml(ev.summary)}</p>
        <div class="event-card__tags">
          ${ev.readingTags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openDrawer(ev.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDrawer(ev.id); }
    });

    lazyLoadImage(card.querySelector('[data-role="media"]'), ev);

    return card;
  }

  /* ---------------- Images (lazy, via IntersectionObserver) ---------------- */
  /* Each event's image is resolved once and remembered by event id, so its
     card thumbnail and drawer image always agree. Resolution skips any
     candidate URL already claimed by a different event, so two entries
     never end up showing the same photo. If an event's specific search
     term turns up nothing usable, resolution falls back to a broader,
     era-level search and finally to a generic Cuba search, so every
     entry ends up with *some* image rather than the color-block
     placeholder — the placeholder is now a true last resort. */

  const ERA_FALLBACK_TERMS = {
    "indigenous-conquest": "Taíno Cuba indigenous history",
    "sugar-slavery-colonialism": "Cuba colonial Havana architecture",
    "independence-struggle": "Cuban War of Independence history",
    "neocolonial-revolution": "Cuba Havana early 20th century",
    "building-new-society": "Cuba 1960s revolution history",
    "culture-revolution": "Cuba art culture Havana",
    "revolution-and-world": "Cuba Cold War history",
    "post-revolutionary-contemporary": "Havana Cuba contemporary"
  };
  const FINAL_FALLBACK_TERM = "Havana Cuba";

  const imagePromises = new Map(); // eventId -> Promise<candidate | null>
  const usedImageUrls = new Set();

  function resolveImageForEvent(ev) {
    if (imagePromises.has(ev.id)) return imagePromises.get(ev.id);
    // Registered synchronously before any await, so a card's lazy-load and a
    // simultaneous drawer-open for the same event share one resolution
    // instead of racing to independently pick (possibly different) images.
    const promise = (async () => {
      const tiers = [
        { term: ev.wikimedia.searchTerm, limit: 10 },
        { term: ERA_FALLBACK_TERMS[ev.era] || FINAL_FALLBACK_TERM, limit: 20 },
        { term: FINAL_FALLBACK_TERM, limit: 40 }
      ];
      let chosen = null;
      for (const tier of tiers) {
        try {
          const candidates = await Wikimedia.fetchCandidates(tier.term, tier.limit);
          chosen = candidates.find(c => !usedImageUrls.has(c.url)) || null;
        } catch (e) {
          chosen = null;
        }
        if (chosen) break;
      }
      if (chosen) usedImageUrls.add(chosen.url);
      return chosen;
    })();
    imagePromises.set(ev.id, promise);
    return promise;
  }

  const imageObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            obs.unobserve(el);
            loadImageInto(el, eventById[el.dataset.eventId]);
          }
        });
      }, { rootMargin: "200px" })
    : null;

  function lazyLoadImage(mediaEl, ev) {
    mediaEl.dataset.eventId = ev.id;
    if (imageObserver) {
      imageObserver.observe(mediaEl);
    } else {
      loadImageInto(mediaEl, ev);
    }
  }

  async function loadImageInto(mediaEl, ev) {
    try {
      const result = await resolveImageForEvent(ev);
      if (result && result.url) {
        const img = document.createElement("img");
        img.src = result.url;
        img.alt = "";
        img.loading = "lazy";
        img.addEventListener("error", () => { /* fallback stays visible */ }, { once: true });
        mediaEl.innerHTML = "";
        mediaEl.appendChild(img);
      }
    } catch (e) {
      /* leave fallback in place */
    }
  }

  /* ---------------- Drawer ---------------- */

  function openDrawer(id) {
    const ev = eventById[id];
    if (!ev) return;
    const era = eraByKey[ev.era];

    const linksHtml = (ev.links || []).map(l =>
      `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>${l.confidence === "verify" ? ' <span class="verify-badge" title="Link not independently re-verified this session — confirm before relying on it.">VERIFY</span>' : ""}</li>`
    ).join("");

    const videosHtml = (ev.videos || []).map(v => `
      <div class="video-embed">
        <div class="video-embed__title">${escapeHtml(v.title)}</div>
        <div class="video-embed__frame" data-vimeo-id="${escapeHtml(v.id)}">
          <button type="button" class="video-embed__play">▶ Play clip</button>
        </div>
      </div>
    `).join("");

    const connectionsHtml = (ev.details.connections || [])
      .map(cid => eventById[cid])
      .filter(Boolean)
      .map(ce => `<button type="button" class="connection-chip" data-jump="${ce.id}">${escapeHtml(ce.title)}</button>`)
      .join("");

    drawerContent.innerHTML = `
      <div class="drawer__eyebrow" style="color:${era.color}">${escapeHtml(era.label)}</div>
      <h2 id="drawer-title" class="drawer__title">${escapeHtml(ev.title)}${ev.isFunFact ? ' <span class="funfact-ribbon funfact-ribbon--inline">✨ Did You Know</span>' : ""}</h2>
      <div class="drawer__date">${escapeHtml(ev.dateDisplay)}</div>
      <div class="drawer__media" data-role="drawer-media">
        <div class="media-fallback" style="background:${era.color}22;border-color:${era.color}"></div>
      </div>
      <p class="drawer__summary">${escapeHtml(ev.summary)}</p>

      <section class="drawer__section">
        <h3>Context &amp; Debate</h3>
        <p>${escapeHtml(ev.details.context)}</p>
        ${ev.confidence === "verify" ? `<p class="confidence-note">⚠ ${escapeHtml(ev.confidenceNotes || "Some details of this entry need verification.")}</p>` : ""}
      </section>

      ${connectionsHtml ? `<section class="drawer__section"><h3>Connects To</h3><div class="connections">${connectionsHtml}</div></section>` : ""}

      <section class="drawer__section">
        <h3>Why This Still Matters</h3>
        <p>${escapeHtml(ev.details.whyItMatters)}</p>
      </section>

      ${linksHtml ? `<section class="drawer__section"><h3>Go Deeper</h3><ul class="links-list">${linksHtml}</ul></section>` : ""}

      ${videosHtml ? `<section class="drawer__section"><h3>See It For Yourself</h3><p class="video-note">Footage filmed by tour guide Jorge Fernandez, UCF Study Abroad, Havana.</p>${videosHtml}</section>` : ""}
    `;

    drawerContent.querySelectorAll(".connection-chip").forEach(chip => {
      chip.addEventListener("click", () => openDrawer(chip.dataset.jump));
    });
    drawerContent.querySelectorAll(".video-embed__play").forEach(btn => {
      btn.addEventListener("click", () => mountVimeo(btn.closest(".video-embed__frame")));
    });

    const drawerMedia = drawerContent.querySelector('[data-role="drawer-media"]');
    loadImageInto(drawerMedia, ev);

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    drawerOverlay.hidden = false;
    document.body.classList.add("drawer-open");
    drawerContent.scrollTop = 0;
    drawerClose.focus();
  }

  function mountVimeo(frameEl) {
    const id = frameEl.dataset.vimeoId;
    frameEl.innerHTML = `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(id)}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Vimeo video ${escapeHtml(id)}"></iframe>`;
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    drawerOverlay.hidden = true;
    document.body.classList.remove("drawer-open");
  }

  drawerClose.addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  /* ---------------- Quiz ---------------- */

  function renderQuiz(era, questions) {
    const wrap = document.createElement("div");
    wrap.className = "quiz-block";
    wrap.innerHTML = `<h3 class="quiz-block__heading">✅ Quick Check: ${escapeHtml(era.label)}</h3>`;

    questions.forEach((q, qi) => {
      const qEl = document.createElement("div");
      qEl.className = "quiz-question";
      qEl.innerHTML = `
        <p class="quiz-question__text">${qi + 1}. ${escapeHtml(q.q)}</p>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `<button type="button" class="quiz-option" data-oi="${oi}">${escapeHtml(opt)}</button>`).join("")}
        </div>
        <p class="quiz-feedback" hidden></p>
      `;
      const feedback = qEl.querySelector(".quiz-feedback");
      qEl.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
          if (qEl.classList.contains("is-answered")) return;
          qEl.classList.add("is-answered");
          const chosen = Number(btn.dataset.oi);
          qEl.querySelectorAll(".quiz-option").forEach(b => {
            const oi = Number(b.dataset.oi);
            if (oi === q.correct) b.classList.add("is-correct");
            else if (oi === chosen) b.classList.add("is-incorrect");
          });
          feedback.hidden = false;
          feedback.textContent = (chosen === q.correct ? "Correct — " : "Not quite — ") + q.explanation;
          feedback.classList.toggle("is-correct", chosen === q.correct);
          feedback.classList.toggle("is-incorrect", chosen !== q.correct);
        });
      });
      wrap.appendChild(qEl);
    });

    return wrap;
  }

  /* ---------------- Search ---------------- */

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      searchResultsEl.hidden = true;
      searchResultsEl.innerHTML = "";
      return;
    }
    const matches = EVENTS.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q) ||
      e.details.context.toLowerCase().includes(q) ||
      e.readingTags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 8);

    if (!matches.length) {
      searchResultsEl.innerHTML = `<div class="search-empty">No matches</div>`;
      searchResultsEl.hidden = false;
      return;
    }

    searchResultsEl.innerHTML = matches.map(e => `
      <button type="button" class="search-result" data-id="${e.id}">
        <span class="search-result__title">${escapeHtml(e.title)}</span>
        <span class="search-result__date">${escapeHtml(e.dateDisplay)}</span>
      </button>
    `).join("");
    searchResultsEl.hidden = false;

    searchResultsEl.querySelectorAll(".search-result").forEach(btn => {
      btn.addEventListener("click", () => jumpToEvent(btn.dataset.id));
    });
  }

  function jumpToEvent(id) {
    const ev = eventById[id];
    if (!ev) return;
    setActiveEra("all");
    searchResultsEl.hidden = true;
    searchInput.value = "";
    const card = document.querySelector(`.event-card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("is-highlighted");
      setTimeout(() => card.classList.remove("is-highlighted"), 2000);
    }
    openDrawer(id);
  }

  searchInput.addEventListener("input", (e) => runSearch(e.target.value));
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) {
      searchResultsEl.hidden = true;
    }
  });

  funFactToggle.addEventListener("click", toggleFunFacts);

  /* ---------------- Init ---------------- */

  buildEraChips();
  buildTimeline();
})();
