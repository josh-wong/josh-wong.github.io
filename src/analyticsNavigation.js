import {getCookieConsentValue} from 'react-cookie-consent';
import {consentCookieName} from './components/ConsentContext';

let pendingPageView;

export function onRouteDidUpdate({location, previousLocation}) {
  clearTimeout(pendingPageView);
  if (
    process.env.NODE_ENV !== 'production' ||
    !previousLocation ||
    getCookieConsentValue(consentCookieName) !== 'true' ||
    typeof window.gtag !== 'function' ||
    (location.pathname === previousLocation.pathname &&
      location.search === previousLocation.search &&
      location.hash === previousLocation.hash)
  ) {
    return;
  }

  pendingPageView = setTimeout(() => {
    if (getCookieConsentValue(consentCookieName) === 'true') {
      window.gtag('set', 'page_path', location.pathname + location.search + location.hash);
      window.gtag('event', 'page_view');
    }
  });
}
