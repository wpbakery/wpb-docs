export function onRouteDidUpdate({location}) {
  if (location.pathname.startsWith('/devs')) {
    document.body.setAttribute('data-section', 'devs');
  } else {
    document.body.removeAttribute('data-section');
  }
}
