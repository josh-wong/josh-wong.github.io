import React from 'react';
import Clarity from '@microsoft/clarity';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const projectId = "p9179dcazx"
Clarity.init(projectId);

// window.addEventListener("CookieConsent", () => window.clarity('consent'));

export default function Root({children}) {
  const handleConsentAccept = () => {
    // Set the clarity consent and trigger the consent event
    Clarity.consent(true);
    console.log("Clarity consent granted.");
  };

  return (
    <>
      {children}
      <div>
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          style={{
            backgroundColor:"#080f53",
            padding: "20px"
          }}
          buttonStyle={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "500",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
          }}
          expires={150}
          onAccept={handleConsentAccept}
        >
          This website uses cookies to enhance the user experience. By continuing to use this website, you acknowledge that you have read and understood the cookie policy and consent to the use of cookies to improve your browsing experience, personalize content, and analyze website traffic.{" "}
        </CookieConsent>
      </div>
    </>
  );
}
