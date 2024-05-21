import React from 'react';
import {RouteProps, Outlet} from 'react-router';
import {
  ComponentPreviewPage,
  HomePage,
  MarkdownPage,
} from '../components/pages';

// Site markdown docs
import AllComponents from '../componentDocs/allComponents.mdx';

// Examples markdown
import ChannelValueExamples from '../componentDocs/ChannelValue/markdown/ChannelValueExamples.mdx';
import ChipExamples from '../componentDocs/Chip/markdown/ChipExamples.mdx';
import CollapsibleHeaderLayoutExamples from '../componentDocs/CollapsibleHeaderLayout/markdown/CollapsibleHeaderLayoutExamples.mdx';
import DrawerExamples from '../componentDocs/Drawer/markdown/DrawerExamples.mdx';
import EmptyStateExamples from '../componentDocs/EmptyState/markdown/EmptyStateExamples.mdx';
import GradeExamples from '../componentDocs/Grade/markdown/GradeExamples.mdx';
import HeaderExamples from '../componentDocs/Header/markdown/HeaderExamples.mdx';
// import HeroExamples from '../../componentDocs/Hero/markdown/HeroExamples.mdx';
import IconsExamples from '../componentDocs/Icons/markdown/IconsExamples.mdx';
import IconSwitchExamples from '../componentDocs/IconSwitch/markdown/IconSwitchExamples.mdx';
import InfoListItemExamples from '../componentDocs/InfoListItem/markdown/InfoListItemExamples.mdx';
import ListItemTagExamples from '../componentDocs/ListItemTag/markdown/ListItemTagExamples.mdx';
import MobileStepperExamples from '../componentDocs/MobileStepper/markdown/MobileStepperExamples.mdx';
import OverlineExamples from '../componentDocs/Overline/markdown/OverlineExamples.mdx';
import ScoreCardExamples from '../componentDocs/ScoreCard/markdown/ScoreCardExamples.mdx';
import SpacerExamples from '../componentDocs/Spacer/markdown/SpacerExamples.mdx';
import UserMenuExamples from '../componentDocs/UserMenu/markdown/UserMenuExamples.mdx';

// API Docs markdown
import ChannelValueAPIDocs from '../componentDocs/ChannelValue/markdown/ChannelValueAPIDocs.mdx';
import ChipAPIDocs from '../componentDocs/Chip/markdown/ChipAPIDocs.mdx';
import CollapsibleHeaderAPIDocs from '../componentDocs/CollapsibleHeaderLayout/markdown/CollapsibleHeaderLayoutAPIDocs.mdx';
import DrawerAPIDocs from '../componentDocs/Drawer/markdown/DrawerAPIDocs.mdx';
import EmptyStateAPIDocs from '../componentDocs/EmptyState/markdown/EmptyStateAPIDocs.mdx';
import GradeAPIDocs from '../componentDocs/Grade/markdown/GradeAPIDocs.mdx';
import HeaderAPIDocs from '../componentDocs/Header/markdown/HeaderAPIDocs.mdx';
// import HeroAPIDocs from '../../componentDocs/Hero/markdown/HeroAPIDocs.mdx';
import IconsAPIDocs from '../componentDocs/Icons/markdown/IconsAPIDocs.mdx';
import IconSwitchAPIDocs from '../componentDocs/IconSwitch/markdown/IconSwitchAPIDocs.mdx';
import InfoListItemAPIDocs from '../componentDocs/InfoListItem/markdown/InfoListItemAPIDocs.mdx';
import ListItemTagAPIDocs from '../componentDocs/ListItemTag/markdown/ListItemTagAPIDocs.mdx';
import MobileStepperAPIDocs from '../componentDocs/MobileStepper/markdown/MobileStepperAPIDocs.mdx';
import OverlineAPIDocs from '../componentDocs/Overline/markdown/OverlineAPIDocs.mdx';
import ScoreCardAPIDocs from '../componentDocs/ScoreCard/markdown/ScoreCardAPIDocs.mdx';
import SpacerAPIDocs from '../componentDocs/Spacer/markdown/SpacerAPIDocs.mdx';
import UserMenuAPIDocs from '../componentDocs/UserMenu/markdown/UserMenuAPIDocs.mdx';

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
        element: <MarkdownPage title={'Components'} markdown={AllComponents} />,
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
            element: <CollapsibleHeaderLayoutExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <CollapsibleHeaderAPIDocs />,
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
            element: <DrawerExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <DrawerAPIDocs />,
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
            element: <EmptyStateExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <EmptyStateAPIDocs />,
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
            element: <GradeExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <GradeAPIDocs />,
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
            element: <HeaderExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <HeaderAPIDocs />,
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
            element: <IconsExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <IconsAPIDocs />,
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
            element: <IconSwitchExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <IconSwitchAPIDocs />,
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
            element: <InfoListItemExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <InfoListItemAPIDocs />,
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
            element: <ListItemTagExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <ListItemTagAPIDocs />,
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
            element: <MobileStepperExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <MobileStepperAPIDocs />,
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
            element: <OverlineExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <OverlineAPIDocs />,
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
            element: <ScoreCardExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <ScoreCardAPIDocs />,
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
            element: <SpacerExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <SpacerAPIDocs />,
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
            element: <UserMenuExamples />,
          },
          {
            title: 'API Docs',
            path: 'api-docs',
            element: <UserMenuAPIDocs />,
          },
        ],
      },
    ],
  },
];
