import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '822'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '85a'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation Guide/',
        component: ComponentCreator('/docs/Installation Guide/', '9bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation Guide/gitcode',
        component: ComponentCreator('/docs/Installation Guide/gitcode', '28d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation Guide/local',
        component: ComponentCreator('/docs/Installation Guide/local', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/',
        component: ComponentCreator('/docs/Toolkit/', '1d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/coding_tool',
        component: ComponentCreator('/docs/Toolkit/coding_tool', 'b54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/email',
        component: ComponentCreator('/docs/Toolkit/email', 'e57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/github',
        component: ComponentCreator('/docs/Toolkit/github', '601'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/google_calender',
        component: ComponentCreator('/docs/Toolkit/google_calender', '208'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/google_search',
        component: ComponentCreator('/docs/Toolkit/google_search', '40b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/google_serp',
        component: ComponentCreator('/docs/Toolkit/google_serp', '411'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/Image Generation/',
        component: ComponentCreator('/docs/Toolkit/Image Generation/', '738'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/Image Generation/dalle',
        component: ComponentCreator('/docs/Toolkit/Image Generation/dalle', 'deb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/Image Generation/stable_diffusion',
        component: ComponentCreator('/docs/Toolkit/Image Generation/stable_diffusion', 'a33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/jira',
        component: ComponentCreator('/docs/Toolkit/jira', '9fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/searx',
        component: ComponentCreator('/docs/Toolkit/searx', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/slack',
        component: ComponentCreator('/docs/Toolkit/slack', '798'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/webscraper',
        component: ComponentCreator('/docs/Toolkit/webscraper', '3bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
