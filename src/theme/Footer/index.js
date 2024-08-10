import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import Typebot from '/src/js/@typebot.io/web.js';

function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  return (
    <>
      <Typebot.initBubble
        typebot="faq-o3dwttn"
        theme={{
          button: { backgroundColor: "#949acd", iconColor: "white" },
          chatWindow: { maxHeight: "75%" },
        }}
      />
      <FooterLayout
        style={style}
        links={links && links.length > 0 && <FooterLinks links={links} />}
        logo={logo && <FooterLogo logo={logo} />}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
    </>
  );
}

<typebot-bubble style="width: 100%; height: 200px; "></typebot-bubble>

export default React.memo(Footer);
