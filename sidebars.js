/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  providerSidebar: [
    {
      id: 'intro',
      type: 'doc',
    },
    {
      id: 'experiences/bridge',
      type: 'doc',
    },
    {
      id: 'experiences/providers',
      type: 'doc',
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Game Engine Integrations',
      items: [
        {
          type: 'doc',
          id: 'experiences/integrations/unity'
        }
      ],
    },
    {
      type: 'category',
      label: 'Add Your Project',
      link: {
        type: 'doc',
        id: 'providers/intro',
      },
      items: [
        {
          type: 'doc',
          id: 'providers/intro',
        },
        {
          type: 'doc',
          id: 'providers/bridge',
        },
        {
          type: 'doc',
          id: 'providers/basic',
        },
        {
          type: 'category',
          label: '3. Identity Pipeline',
          link: {
            type: 'doc',
            id: 'providers/pipeline/intro',
          },
          items: [
            'intro',
            'web3',
            'oauth',
            'iframe',
            'transform',
            'select',
            'custom',
            'context',
          ].map(id => ({ id: `providers/pipeline/${id}`, type : 'doc' }))
        },
        {
          type: 'doc',
          id: 'providers/testing',
        },
        {
          type: 'doc',
          id: 'providers/submit',
        },
        {
          collapsed: false,
          type: 'category',
          label: 'Example Integrations',
          items: [
            {
              type: 'link',
              href: 'https://github.com/AvatarConnect/bridge/pull/1',
              label: 'ReadyPlayerMe',
            },
            {
              type: 'link',
              href: 'https://github.com/AvatarConnect/bridge/pull/2',
              label: 'Meebits',
            },
            {
              type: 'link',
              href: 'https://github.com/AvatarConnect/bridge/pull/3',
              label: 'CryptoAvatars',
            }
          ]
        }
      ],
    },
  ]
};

module.exports = sidebars;