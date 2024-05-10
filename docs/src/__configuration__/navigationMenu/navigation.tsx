import React from 'react';
import {RouteProps, Outlet} from 'react-router';
import {ComponentPreviewPage, HomePage, MarkdownPage} from '../../pages';

// Site markdown docs
import * as markdownDocs from '../../markdownDocs/';

// Examples markdown
import ChannelValueExamples from '../../componentDocs/ChannelValue/markdown/ChannelValueExamples.mdx';
import ChipExamples from '../../componentDocs/Chip/markdown/ChipExamples.mdx';

// API Docs markdown
import ChannelValueAPIDocs from '../../componentDocs/ChannelValue/markdown/ChannelValueAPIDocs.mdx';
import ChipAPIDocs from '../../componentDocs/Chip/markdown/ChipAPIDocs.mdx';

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
          <MarkdownPage
            title={'Components'}
            markdown={markdownDocs.AllComponents}
          />
        ),
      },
      {
        title: 'Channel Value',
        path: 'channel-value/',
        element: <ComponentPreviewPage title={'Channel Value'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            element: <ChannelValueExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <ChannelValueAPIDocs />,
          },
        ],
      },
      {
        title: 'Chip',
        path: 'chip/',
        element: <ComponentPreviewPage title={'Chip'} />,
        children: [
          {
            title: 'examples',
            path: 'examples',
            element: <ChipExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <ChipAPIDocs />,
          },
        ],
      },
      {
        title: 'Collapsible Header Layout',
        path: 'collapsible-header-layout/',
        element: <ComponentPreviewPage title={'Collapsible Header Layout'} />,
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
        title: 'Grade',
        path: 'grade/',
        element: <ComponentPreviewPage title={'Grade'} />,
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
        title: 'Header',
        path: 'header/',
        element: <ComponentPreviewPage title={'Header'} />,
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
        title: 'Icons',
        path: 'icons/',
        element: <ComponentPreviewPage title={'Icons'} />,
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
        title: 'Icon Switch',
        path: 'icon-switch/',
        element: <ComponentPreviewPage title={'Icon Switch'} />,
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
        title: 'Mobile Stepper',
        path: 'mobile-stepper/',
        element: <ComponentPreviewPage title={'Mobile Stepper'} />,
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
        title: 'Overline',
        path: 'overline/',
        element: <ComponentPreviewPage title={'Overline'} />,
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
