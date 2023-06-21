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
    component: ComponentCreator('/docs/', '817'),
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
        path: '/docs/Tools/coding_tool',
        component: ComponentCreator('/docs/Tools/coding_tool', '0f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/email',
        component: ComponentCreator('/docs/Tools/email', 'f59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/google_search',
        component: ComponentCreator('/docs/Tools/google_search', 'd78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/google_serp',
        component: ComponentCreator('/docs/Tools/google_serp', 'dc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/image_generation',
        component: ComponentCreator('/docs/Tools/image_generation', '947'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/jira',
        component: ComponentCreator('/docs/Tools/jira', '16b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/webscraper',
        component: ComponentCreator('/docs/Tools/webscraper', 'e39'),
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
