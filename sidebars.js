/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // sidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
  portfolioSidebar: [
    'index',
    // {
    //   type: 'category',
    //   label: 'Professional samples',
    //   items: [
    //     'overview',
    //   ],
    // },
    {
      type: 'category',
      label: 'Personal portfolio samples',
      items: [
        {
          type: 'category',
          label: 'Bitcoin Cash Node on Raspberry Pi',
          items: [
            'personal/bitcoin-cash-node-on-raspberry-pi/overview',
            {
              type: 'category',
              label: 'Install and set up',
              items: [
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/overview',
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/preparation',
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/bchn-setup',
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/wallet-setup',
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/conclusion',
                'personal/bitcoin-cash-node-on-raspberry-pi/installation-and-setup/references',
              ],
            },
            {
              type: 'category',
              label: 'Upgrade',
              items: [
                'personal/bitcoin-cash-node-on-raspberry-pi/upgrade/overview',
                'personal/bitcoin-cash-node-on-raspberry-pi/upgrade/preparation',
                'personal/bitcoin-cash-node-on-raspberry-pi/upgrade/bchn-upgrade',
                'personal/bitcoin-cash-node-on-raspberry-pi/upgrade/cleanup',
                'personal/bitcoin-cash-node-on-raspberry-pi/upgrade/conclusion',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'passGen',
          items: [
            'personal/passgen/overview',
            'personal/passgen/generating-passwords',
            'personal/passgen/updating-the-app',
            'personal/passgen/uninstalling',
            'personal/passgen/references',
          ],
        },
        {
          type: 'category',
          label: 'Microsoft Zune device and software setup',
          items: [
            'personal/zune-software-setup/overview',
            'personal/zune-software-setup/getting-started',
            'personal/zune-software-setup/installing-the-zune-software',
            'personal/zune-software-setup/connecting-with-the-zune-software',
            'personal/zune-software-setup/adding-apps-and-games',
            'personal/zune-software-setup/conclusion',
            'personal/zune-software-setup/references',
          ],
        },
        {
          type: 'link',
          label: 'Signal sticker pack - "Why Bitcoin Cash?"',
          href: 'https://signal.art/addstickers/#pack_id=183a3ca8d7ccdcdb8fa7728b17453fbc&pack_key=e9ac42b0e7276edd92d293321d2e51cca64e5744bad567fd9579b51abb78773d',
        },
      ],
    },
  ],
};

export default sidebars;
