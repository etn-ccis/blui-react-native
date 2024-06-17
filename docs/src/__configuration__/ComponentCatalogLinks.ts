import channelValueImage from '../assets/ChannelValue.png';
import chipImage from '../componentDocs/Chip/images/chip.png';
import collapsibleHeaderImage from '../assets/channelValue.png';
import drawerImage from '../assets/drawer.png';
import emptyStateImage from '../assets/emptyState.png';
import gradeImage from '../assets/grade.png';
import headerImage from '../componentDocs/Header/images/headerImage.png';
import heroImage from '../componentDocs/Hero/images/hero.png';
import iconImage from '../componentDocs/Icons/images/iconProp.png'
import switchImage from '../assets/switch.png';
import infoListImage from '../componentDocs/InfoListItem/images/infoListItem.png';
import listItemTagImage from '../assets/listItemTag.png';
import mobileStepperImage from '../componentDocs/MobileStepper/images/mobileStepper_dot.png';
import scoreCardImage from '../componentDocs/ScoreCard/images/scoreCardExample.png'
import overlineImage from '../componentDocs/Overline/images/overline.png'
import spacerImage from '../componentDocs/Spacer/images/spacerAnatomy.png'
import userMenuImage from '../componentDocs/UserMenu/images/userMenuOpened.png'

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
