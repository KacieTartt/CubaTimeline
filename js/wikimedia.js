/* ============================================================
   Wikimedia Commons image lookup — no API key required.
   Returns several ranked candidates per search term (not just the
   top hit) so the app can skip any image it has already shown
   elsewhere on the page, avoiding repeated photos across entries.
   Caches results in sessionStorage so repeated filtering/search
   doesn't refetch the same term.
   ============================================================ */

const Wikimedia = (() => {
  const CACHE_PREFIX = "cubatl_wm_";
  const MIN_WIDTH = 300;

  function cacheGet(term) {
    try {
      const raw = sessionStorage.getItem(CACHE_PREFIX + term);
      return raw ? JSON.parse(raw) : undefined;
    } catch (e) {
      return undefined;
    }
  }

  function cacheSet(term, value) {
    try {
      sessionStorage.setItem(CACHE_PREFIX + term, JSON.stringify(value));
    } catch (e) {
      /* sessionStorage full or unavailable — degrade silently */
    }
  }

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  /** A small global queue so we never have more than MAX_CONCURRENT Commons
      requests in flight at once — scrolling past many cards at once would
      otherwise fire dozens of parallel requests and risk being rate-limited
      or having connections dropped, which looks like "no image found" but
      is really "the request never got a clean answer." */
  const MAX_CONCURRENT = 4;
  let activeCount = 0;
  const waitQueue = [];

  function acquireSlot() {
    if (activeCount < MAX_CONCURRENT) {
      activeCount++;
      return Promise.resolve();
    }
    return new Promise(resolve => waitQueue.push(resolve));
  }

  function releaseSlot() {
    if (waitQueue.length) {
      const next = waitQueue.shift();
      next();
    } else {
      activeCount--;
    }
  }

  async function fetchOnce(endpoint) {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }

  /** Returns an array of candidate images (best first), or [] if none found. */
  async function fetchCandidates(term, limit) {
    limit = limit || 10;
    const cacheKey = term + "::" + limit;
    const cached = cacheGet(cacheKey);
    if (cached !== undefined) return cached;

    const endpoint = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `filetype:bitmap ${term}`,
      gsrnamespace: "6",
      gsrlimit: String(limit),
      prop: "imageinfo",
      iiprop: "url|size|extmetadata",
      iiurlwidth: "640",
      format: "json",
      origin: "*"
    });

    let candidates = [];
    await acquireSlot();
    try {
      let data = null;
      // Retry once after a short delay on any transient failure (network
      // blip, momentary rate limit) before treating it as "no results."
      for (let attempt = 0; attempt < 2 && data === null; attempt++) {
        try {
          data = await fetchOnce(endpoint);
        } catch (e) {
          if (attempt === 0) await sleep(500 + Math.random() * 500);
        }
      }
      if (data) {
        const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
        candidates = pages
          .map(p => p.imageinfo && p.imageinfo[0])
          .filter(info => info && info.width >= MIN_WIDTH && info.height >= MIN_WIDTH)
          .sort((a, b) => (b.width * b.height) - (a.width * a.height))
          .map(info => ({
            url: info.thumburl || info.url,
            descriptionUrl: info.descriptionurl || null,
            attribution: (info.extmetadata && info.extmetadata.Artist && info.extmetadata.Artist.value) || null
          }));
      }
    } finally {
      releaseSlot();
    }

    cacheSet(cacheKey, candidates);
    return candidates;
  }

  return { fetchCandidates };
})();
