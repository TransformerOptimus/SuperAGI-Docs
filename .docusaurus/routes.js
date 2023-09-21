import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '822'),
    exact: true
  },
  {
    path: '/docs/search',
    component: ComponentCreator('/docs/search', '414'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'ea3'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/benchmark',
        component: ComponentCreator('/docs/benchmark', 'b3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Contribute/',
        component: ComponentCreator('/docs/Contribute/', '4df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Contribute/contribute_code',
        component: ComponentCreator('/docs/Contribute/contribute_code', 'e4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/',
        component: ComponentCreator('/docs/Core Components/', '84f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/',
        component: ComponentCreator('/docs/Core Components/Agents/', '829'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/action_console',
        component: ComponentCreator('/docs/Core Components/Agents/action_console', '21e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/activity_feed',
        component: ComponentCreator('/docs/Core Components/Agents/activity_feed', '59c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/agent_details',
        component: ComponentCreator('/docs/Core Components/Agents/agent_details', '95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/agent_newrun',
        component: ComponentCreator('/docs/Core Components/Agents/agent_newrun', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/agent_provisioning',
        component: ComponentCreator('/docs/Core Components/Agents/agent_provisioning', '5f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/agent_schedule',
        component: ComponentCreator('/docs/Core Components/Agents/agent_schedule', '328'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/agent_type',
        component: ComponentCreator('/docs/Core Components/Agents/agent_type', '09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/apm',
        component: ComponentCreator('/docs/Core Components/Agents/apm', 'efe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/delete_agent',
        component: ComponentCreator('/docs/Core Components/Agents/delete_agent', 'b91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/edit_agent_template',
        component: ComponentCreator('/docs/Core Components/Agents/edit_agent_template', 'ca9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/pause_resume',
        component: ComponentCreator('/docs/Core Components/Agents/pause_resume', 'd51'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Agents/run_history',
        component: ComponentCreator('/docs/Core Components/Agents/run_history', '9f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/resourcemanager',
        component: ComponentCreator('/docs/Core Components/resourcemanager', 'f31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/',
        component: ComponentCreator('/docs/Core Components/Vector Database/', 'ffd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/custom_knowledge',
        component: ComponentCreator('/docs/Core Components/Vector Database/custom_knowledge', '5cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/delete_db',
        component: ComponentCreator('/docs/Core Components/Vector Database/delete_db', '288'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/marketplace_knowledge',
        component: ComponentCreator('/docs/Core Components/Vector Database/marketplace_knowledge', 'ccf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/pinecone',
        component: ComponentCreator('/docs/Core Components/Vector Database/pinecone', '0e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/qdrant',
        component: ComponentCreator('/docs/Core Components/Vector Database/qdrant', 'ceb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/update_db',
        component: ComponentCreator('/docs/Core Components/Vector Database/update_db', '4e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Core Components/Vector Database/weaviate',
        component: ComponentCreator('/docs/Core Components/Vector Database/weaviate', '0d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation/',
        component: ComponentCreator('/docs/Installation/', '5bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation/cloud',
        component: ComponentCreator('/docs/Installation/cloud', 'de8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation/docker',
        component: ComponentCreator('/docs/Installation/docker', '7aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation/gitcode',
        component: ComponentCreator('/docs/Installation/gitcode', 'c87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Installation/prerequisites',
        component: ComponentCreator('/docs/Installation/prerequisites', '3fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketplace/',
        component: ComponentCreator('/docs/Marketplace/', '0fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketplace/agent_template_marketplace',
        component: ComponentCreator('/docs/Marketplace/agent_template_marketplace', '45b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Marketplace/toolkit_marketplace',
        component: ComponentCreator('/docs/Marketplace/toolkit_marketplace', 'bf7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SDK/',
        component: ComponentCreator('/docs/SDK/', '80e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SDK/python_sdk',
        component: ComponentCreator('/docs/SDK/python_sdk', 'bb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/',
        component: ComponentCreator('/docs/Toolkit/', '36b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/custom_toolkit',
        component: ComponentCreator('/docs/Toolkit/custom_toolkit', '03b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/', '144'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/coding_tool',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/coding_tool', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/duckduckgo',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/duckduckgo', '6b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/email',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/email', 'fbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/github',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/github', 'f2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/google_calendar',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/google_calendar', '9af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/google_search',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/google_search', '129'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/google_serp',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/google_serp', '56f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/Image Generation/',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/Image Generation/', '481'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/Image Generation/dalle',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/Image Generation/dalle', '1d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/Image Generation/stable_diffusion',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/Image Generation/stable_diffusion', 'd53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/instagram',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/instagram', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/jira',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/jira', '70f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/notion',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/notion', '785'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/searx',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/searx', 'e42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/slack',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/slack', '328'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/twitter',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/twitter', '21d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Toolkit/SuperAGI Toolkits/webscraper',
        component: ComponentCreator('/docs/Toolkit/SuperAGI Toolkits/webscraper', 'cb3'),
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
