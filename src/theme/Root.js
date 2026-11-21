import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Clarity from '@microsoft/clarity';
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent';
import {consentCookieName, ConsentContext} from '@site/src/components/ConsentContext';

const clarityProjectId = 'p9179dcazx';
const googleTrackingId = 'G-PMP34RZWN2P';
const googleContainerId = 'GT-5M8TXX7';

function loadScript(src) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export default function Root({children}) {
  const [consent, setConsent] = useState(false);
  const initialized = useRef(false);
  const location = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    setConsent(getCookieConsentValue(consentCookieName) === 'true');
  }, []);

  useEffect(() => {
    if (!consent || initialized.current) {
      return;
    }
    initialized.current = true;
    Clarity.init(clarityProjectId);
    Clarity.consent();

    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', googleTrackingId, {anonymize_ip: true});
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`);
      window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${googleContainerId}`);
    }
  }, [consent]);

  useEffect(() => {
    const previous = previousLocation.current;
    previousLocation.current = location;
    if (
      consent &&
      process.env.NODE_ENV === 'production' &&
      (location.pathname !== previous.pathname ||
        location.search !== previous.search ||
        location.hash !== previous.hash)
    ) {
      const timeout = setTimeout(() => {
        window.gtag('set', 'page_path', location.pathname + location.search + location.hash);
        window.gtag('event', 'page_view');
      });
      return () => clearTimeout(timeout);
    }
  }, [consent, location]);

  return (
    <ConsentContext.Provider value={consent}>
      {children}
      <CookieConsent
        location="bottom"
        cookieName={consentCookieName}
        buttonText="Accept analytics"
        declineButtonText="Decline analytics"
        ariaAcceptLabel="Accept analytics"
        ariaDeclineLabel="Decline analytics"
        enableDeclineButton
        style={{padding: '20px'}}
        buttonStyle={{
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: '500',
          fontSize: '15px',
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }}
        expires={150}
        onAccept={() => setConsent(true)}
      >
        This website uses optional analytics to understand and improve your experience.
        Choose whether to allow Microsoft Clarity, Google Analytics, Google Tag Manager,
        and Algolia search insights. See the <Link to="/cookies" style={{color: 'white', textDecorationLine: 'underline'}}>cookie policy</Link> for details.
      </CookieConsent>
    </ConsentContext.Provider>
  );
}
