/* ============================================================
   Wikimedia Commons image lookup — no API key required.
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

  async function fetchImage(term) {
    const cached = cacheGet(term);
    if (cached !== undefined) return cached;

    const endpoint = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `filetype:bitmap ${term}`,
      gsrnamespace: "6",
      gsrlimit: "6",
      prop: "imageinfo",
      iiprop: "url|size|extmetadata",
      iiurlwidth: "640",
      format: "json",
      origin: "*"
    });

    let result = null;
    try {
      const res = await fetch(endpoint);
      if (res.ok) {
        const data = await res.json();
        const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
        const candidate = pages
          .map(p => p.imageinfo && p.imageinfo[0])
          .filter(info => info && info.width >= MIN_WIDTH && info.height >= MIN_WIDTH)
          .sort((a, b) => (b.width * b.height) - (a.width * a.height))[0];
        if (candidate) {
          result = {
            url: candidate.thumburl || candidate.url,
            descriptionUrl: candidate.descriptionurl || null,
            attribution: (candidate.extmetadata && candidate.extmetadata.Artist && candidate.extmetadata.Artist.value) || null
          };
        }
      }
    } catch (e) {
      result = null;
    }

    cacheSet(term, result);
    return result;
  }

  return { fetchImage };
})();
