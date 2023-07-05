import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e00'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2df'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '695'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'd12'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '9e2'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'b7c'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '08f'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '822'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'acf'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/agent-architecture',
        component: ComponentCreator('/docs/Architecture/agent-architecture', '805'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/ER-diagram',
        component: ComponentCreator('/docs/Architecture/ER-diagram', '7df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/superagi-architecture',
        component: ComponentCreator('/docs/Architecture/superagi-architecture', '847'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/tools-architecture',
        component: ComponentCreator('/docs/Architecture/tools-architecture', 'f73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/workflow-architecture',
        component: ComponentCreator('/docs/Architecture/workflow-architecture', 'b56'),
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
        path: '/docs/Toolkit/Image Generation Toolkit/dalle',
        component: ComponentCreator('/docs/Toolkit/Image Generation Toolkit/dalle', 'c74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/Image Generation Toolkit/stable_diffusion',
        component: ComponentCreator('/docs/Toolkit/Image Generation Toolkit/stable_diffusion', '5d3'),
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
