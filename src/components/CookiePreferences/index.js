import React from 'react';
import {resetCookieConsentValue} from 'react-cookie-consent';
import {consentCookieName} from '../ConsentContext';

export default function CookiePreferences() {
  function resetPreferences() {
    resetCookieConsentValue(consentCookieName);
    window.location.reload();
  }

  return (
    <button className="button button--secondary" type="button" onClick={resetPreferences}>
      Change cookie preferences
    </button>
  );
}
