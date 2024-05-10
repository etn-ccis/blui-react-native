import React from 'react';
import {RouteProps, Outlet} from 'react-router';
import {ComponentPreviewPage, HomePage} from '../../pages';

export type RouteConfig = Omit<RouteProps, 'children'> & {
  title: string;
  icon?: JSX.Element;
  pages?: RouteConfig[];
  children?: RouteConfig[];
  hidden?: boolean;
};

export const pageDefinitions: RouteConfig[] = [
  {
    title: 'Home',
    path: '/',
    element: <HomePage />,
    hidden: true,
  },
  {
    title: 'Components',
    path: '/components/',
    element: <Outlet />,
    pages: [
      {
        title: 'All Components',
        path: 'component-catalog',
        element: (
          // <MarkdownPage
          //   title={'Components'}
          //   markdown={markdownDocs.AllComponents}
          // />
          <h1>Test</h1>
        ),
      },
      {
        title: 'App Bar',
        path: 'app-bar/',
        element: <ComponentPreviewPage title={'App Bar'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <AppBarExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <AppBarAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <AppBarPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Channel Value',
        path: 'channel-value/',
        element: <ComponentPreviewPage title={'Channel Value'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <ChannelValueExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <ChannelValueAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <ChannelValuePlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Drawer',
        path: '',
        pages: [
          {
            title: 'Drawer Layout',
            path: 'drawer-layout/',
            element: <ComponentPreviewPage title={'Drawer Layout'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerLayoutExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerLayoutAPIDocs />,
              },
            ],
          },
          {
            title: 'Drawer',
            path: 'drawer/',
            element: <ComponentPreviewPage title={'Drawer'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerPlaygroundComponent />,
              },
            ],
          },
          {
            title: 'Drawer Header',
            path: 'drawer-header/',
            element: <ComponentPreviewPage title={'Drawer Header'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerHeaderExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerHeaderAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerHeaderPlaygroundComponent />,
              },
            ],
          },
          {
            title: 'Drawer Subheader',
            path: 'drawer-subheader/',
            element: <ComponentPreviewPage title={'Drawer Subheader'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerSubheaderExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerSubheaderAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerSubheaderPlaygroundComponent />,
              },
            ],
          },

          {
            title: 'Drawer Body',
            path: 'drawer-body/',
            element: <ComponentPreviewPage title={'Drawer Body'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerBodyExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerBodyAPIDocs />,
              },
            ],
          },
          {
            title: 'Drawer Nav Group',
            path: 'drawer-nav-group/',
            element: <ComponentPreviewPage title={'Drawer Nav Group'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerNavGroupExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerNavGroupAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerNavGroupPlaygroundComponent />,
              },
            ],
          },
          {
            title: 'Drawer Nav Item',
            path: 'drawer-nav-item/',
            element: <ComponentPreviewPage title={'Drawer Nav Item'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerNavItemExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerNavItemAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerNavItemPlaygroundComponent />,
              },
            ],
          },
          {
            title: 'Drawer Rail Item',
            path: 'drawer-rail-item/',
            element: <ComponentPreviewPage title={'Drawer Rail Item'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerRailItemExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerRailItemAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerRailItemPlaygroundComponent />,
              },
            ],
          },
          {
            title: 'Drawer Footer',
            path: 'drawer-footer/',
            element: <ComponentPreviewPage title={'Drawer Footer'} />,
            children: [
              {
                title: 'examples',
                path: 'examples',
                // element: <DrawerFooterExamples />,
              },
              {
                title: 'API Docs',
                path: 'api-docs',
                // element: <DrawerFooterAPIDocs />,
              },
              {
                title: 'playground',
                path: 'playground',
                // element: <DrawerFooterPlaygroundComponent />,
              },
            ],
          },
        ],
      },
      {
        title: 'Empty State',
        path: 'empty-state/',
        element: <ComponentPreviewPage title={'Empty State'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <EmptyStateExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <EmptyStateAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <EmptyStatePlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Hero',
        path: 'hero/',
        element: <ComponentPreviewPage title={'Hero'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <HeroExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <HeroAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <HeroPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Info List Item',
        path: 'info-list-item/',
        element: <ComponentPreviewPage title={'Info List Item'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <InfoListItemExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <InfoListItemAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <InfoListItemPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'List Item Tag',
        path: 'list-item-tag/',
        element: <ComponentPreviewPage title={'List Item Tag'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <ListItemTagExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <ListItemTagAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <ListItemTagPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Score Card',
        path: 'score-card/',
        element: <ComponentPreviewPage title={'Score Card'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <ScoreCardExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <ScoreCardAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <ScoreCardPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Spacer',
        path: 'spacer/',
        element: <ComponentPreviewPage title={'Spacer'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <SpacerExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <SpacerAPIDocs />,
          },
        ],
      },
      {
        title: 'Three Liner',
        path: 'three-liner/',
        element: <ComponentPreviewPage title={'Three Liner'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <ThreeLinerExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <ThreeLinerAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <ThreeLinerPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'Toolbar Menu',
        path: 'toolbar-menu/',
        element: <ComponentPreviewPage title={'Toolbar Menu'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <ToolbarMenuExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <ToolbarMenuAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <ToolbarMenuPlaygroundComponent />,
          },
        ],
      },
      {
        title: 'User Menu',
        path: 'user-menu/',
        element: <ComponentPreviewPage title={'User Menu'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            // element: <UserMenuExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            // element: <UserMenuAPIDocs />,
          },
          {
            title: 'playground',
            path: 'playground',
            // element: <UserMenuPlaygroundComponent />,
          },
        ],
      },
    ],
  },
];
