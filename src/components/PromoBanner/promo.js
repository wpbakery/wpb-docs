/**
 * Schedule and link of the promo banner shown at the top of every page.
 *
 * Times are in Riga time (EET, UTC+2). The banner switches on and off in the
 * visitor's browser, so no deploy is needed at the start or end.
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
 * Script inlined in <head>. It sets the attribute before the page is painted,
 * so the banner doesn't push the page down after it loads.
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
