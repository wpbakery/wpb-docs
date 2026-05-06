export function onRouteDidUpdate({location}) {
  if (location.pathname.startsWith('/devs')) {
    document.body.setAttribute('data-section', 'devs');
  } else {
    document.body.removeAttribute('data-section');
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest('.menu__link--sublist');
      if (!link || !link.closest('.navbar-sidebar')) return;
      const caret = link.parentElement?.querySelector('.menu__caret');
      if (!caret) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      caret.click();
    },
    true,
  );
}
