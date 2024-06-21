import channelValueImage from '../assets/channel-value.png';
import chipImage from '../assets/chip.png';
import collapsibleHeaderImage from '../assets/collapsible-header-layout.png';
import drawerImage from '../assets/drawer.png';
import emptyStateImage from '../assets/empty-state.png';
import gradeImage from '../assets/grade.png';
import headerImage from '../assets/header.png';
import heroImage from '../assets/hero.png';
import iconImage from '../assets/icons.png';
import switchImage from '../assets/icon-switch.png';
import infoListImage from '../assets/info-list-item.png';
import listItemTagImage from '../assets/list-item-tag.png';
import mobileStepperImage from '../assets/mobile-stepper.png';
import scoreCardImage from '../assets/score-card.png';
import overlineImage from '../assets/overline.png';
import spacerImage from '../assets/spacer.png';
import userMenuImage from '../assets/user-menu.png';

type ComponentCatalogType = {
  title: string;
  /**
   * URL to React component doc, or description for why URL is not available
   */
  path: string;
  image: string;
};

export const componentCatalogLinks: ComponentCatalogType[] = [
  {
    title: 'Channel Value',
    path: 'channel-value',
    image: channelValueImage,
  },
  {
    title: 'Chip',
    path: 'chip',
    image: chipImage,
  },
  {
    title: 'Collapsible Header Layout',
    path: 'collapsible-header-layout',
    image: collapsibleHeaderImage,
  },
  {
    title: 'Drawer',
    path: 'drawer',
    image: drawerImage,
  },
  {
    title: 'Empty State',
    path: 'empty-state',
    image: emptyStateImage,
  },
  {
    title: 'Grade',
    path: 'grade',
    image: gradeImage,
  },
  {
    title: 'Header',
    path: 'header',
    image: headerImage,
  },
  {
    title: 'Hero',
    path: 'hero',
    image: heroImage,
  },
  {
    title: 'Icons',
    path: 'icons',
    image: iconImage,
  },
  {
    title: 'Icon Switch',
    path: 'icon-switch',
    image: switchImage,
  },
  {
    title: 'Info List Item',
    path: 'info-list-item',
    image: infoListImage,
  },
  {
    title: 'List Item Tag',
    path: 'list-item-tag',
    image: listItemTagImage,
  },
  {
    title: 'Mobile Stepper',
    path: 'mobile-stepper',
    image: mobileStepperImage,
  },
  {
    title: 'Overline',
    path: 'overline',
    image: overlineImage,
  },
  {
    title: 'Scorecard',
    path: 'score-card',
    image: scoreCardImage,
  },
  {
    title: 'Spacer',
    path: 'spacer',
    image: spacerImage,
  },
  {
    title: 'User Menu',
    path: 'user-menu',
    image: userMenuImage,
  },
];
