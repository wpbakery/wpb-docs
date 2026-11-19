/**
 * Schedule and link of the promo banner shown at the top of every page.
 *
 * Times are in Riga time (EET, UTC+2). The banner switches on and off in the
 * visitor's browser, so no deploy is needed at the start or end. The time used
 * is the server's (from the Date header of a request to the KB), so a wrong
 * clock on the visitor's computer doesn't change when the banner shows.
 *
 * Add `?promo-preview` to any page URL to see the banner outside the schedule.
 */
export const PROMO = {
  start: '2026-11-22T23:59:00+02:00',
  end: '2026-12-06T23:59:00+02:00',
  url: 'https://wpbakery.com/black-friday/',
};

/** Attribute set on <html> while the banner is visible. */
export const PROMO_ATTRIBUTE = 'data-wpb-promo';

const PREVIEW_PATTERN = /[?&]promo-preview(=|&|$)/;

/**
 * Checks whether the banner should be visible.
 *
 * @param {number} now Current time in milliseconds.
 * @param {string} search The page's query string, for the preview parameter.
 * @returns {boolean} True during the schedule or in preview.
 */
export function isPromoActive(now, search) {
  return (
    PREVIEW_PATTERN.test(search) ||
    (now >= Date.parse(PROMO.start) && now < Date.parse(PROMO.end))
  );
}

/**
 * Measures how far the visitor's clock is from the server's.
 *
 * Reads the Date header of an uncached HEAD request to the KB. The header has
 * one-second precision, so the result is accurate to about a second.
 *
 * @returns {Promise<number|null>} Milliseconds to add to Date.now() to get
 *   server time, or null if the server time couldn't be read.
 */
export async function fetchServerTimeOffset() {
  try {
    const sent = Date.now();
    const response = await fetch(`/?promo-time=${sent}`, {
      method: 'HEAD',
      cache: 'no-store',
    });
    const received = Date.now();
    const serverTime = Date.parse(response.headers.get('Date'));
    if (Number.isNaN(serverTime)) {
      return null;
    }
    // The header is rounded down to the second; assume it was sent halfway
    // through the request.
    return serverTime + 500 - (sent + received) / 2;
  } catch (e) {
    return null;
  }
}

/**
 * Script inlined in <head>. It sets the attribute before the page is painted,
 * so the banner doesn't push the page down after it loads. It can't wait for
 * the server time, so it uses the visitor's clock; the banner component then
 * corrects it with the server time.
 */
export const promoHeadScript = `(function () {
  try {
    var now = Date.now();
    var start = Date.parse(${JSON.stringify(PROMO.start)});
    var end = Date.parse(${JSON.stringify(PROMO.end)});
    if (${PREVIEW_PATTERN}.test(location.search) || (now >= start && now < end)) {
      document.documentElement.setAttribute(${JSON.stringify(PROMO_ATTRIBUTE)}, 'on');
    }
  } catch (e) {}
})();`;
