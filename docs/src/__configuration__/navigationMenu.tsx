import React from 'react';
import { RouteProps, Outlet } from 'react-router-dom';
import { ComponentPreviewPage, HomePage, MarkdownPage } from '../components/pages';

// Site markdown docs
import AllComponents from '../componentDocs/allComponents.mdx';

//Getting started docs
import Environment from '../componentDocs/GettingStarted/Environment.mdx';
import ReactNative from '../componentDocs/GettingStarted/ReactNative.mdx';
import Overview from '../markdownDocs/Overview.mdx';
import Usage from '../markdownDocs/Usage.mdx';
import Customization from '../markdownDocs/Customization.mdx';

// workflow docs
import WorkflowOverview from '../workflowDocs/Overview/overview.mdx';
import AuthenticationWorkflow from '../workflowDocs/AuthenticationWorkflow/authenticationWorkflow.mdx';
import RegistrationWorkflow from '../workflowDocs/RegistrationWorkflow/registrationWorkflow.mdx';
import WorkflowCustomization from '../workflowDocs/Customization/customization.mdx';
import ErrorManagement from '../workflowDocs/ErrorManagement/errorManagement.mdx';
import LanguageSupport from '../workflowDocs/LanguageSupport/languageSupport.mdx';
import ErrorHandling from '../workflowDocs/ErrorHandling/errorHandling.mdx';
import Routing from '../workflowDocs/Routing/routing.mdx';

// workflow components
import BasicDialog from '../workflowDocs/Components/BasicDialog/basicDialog.mdx';
import ErrorManager from '../workflowDocs/Components/ErrorManager/errorManager.mdx';
import PasswordTextField from '../workflowDocs/Components/PasswordTextField/passwordTextField.mdx';
import SetPassword from '../workflowDocs/Components/SetPassword/setPassword.mdx';
import WorkflowCard from '../workflowDocs/Components/WorkflowCard/workflowCard.mdx';
import WorkflowComponents from '../workflowDocs/Components/components.mdx';

// workflow screens
import WorkflowScreens from '../workflowDocs/Screens/screens.mdx';
import AccountDetails from '../workflowDocs/Screens/AccountDetails/accountDetails.mdx';
import ChangePassword from '../workflowDocs/Screens/ChangePassword/changePassword.mdx';
import Contact from '../workflowDocs/Screens/Contact/contact.mdx';
import CreateAccount from '../workflowDocs/Screens/CreateAccount/createAccount.mdx';
import CreatePassword from '../workflowDocs/Screens/CreatePassword/createPassword.mdx';
import Eula from '../workflowDocs/Screens/Eula/eula.mdx';
import ExistingAccountSuccess from '../workflowDocs/Screens/ExistingAccountSuccess/existingAccountSuccess.mdx';
import ForgotPassword from '../workflowDocs/Screens/ForgotPassword/forgotPassword.mdx';
import Login from '../workflowDocs/Screens/Login/login.mdx';
import OktaLogin from '../workflowDocs/Screens/OktaLogin/oktaLogin.mdx';
import RegistrationSuccess from '../workflowDocs/Screens/RegistrationSuccess/registrationSuccess.mdx';
import ResetPassword from '../workflowDocs/Screens/ResetPassword/resetPassword.mdx';
import Success from '../workflowDocs/Screens/Success/success.mdx';
import VerifyCode from '../workflowDocs/Screens/VerifyCode/verifyCode.mdx';

// Examples markdown
import AutoCompleteExample from '../componentDocs/AutoComplete/markdown/AutoCompleteExamples.mdx';
import ChannelValueExamples from '../componentDocs/ChannelValue/markdown/ChannelValueExamples.mdx';
import ChipExamples from '../componentDocs/Chip/markdown/ChipExamples.mdx';
import CollapsibleHeaderLayoutExamples from '../componentDocs/CollapsibleHeaderLayout/markdown/CollapsibleHeaderLayoutExamples.mdx';
import DrawerExamples from '../componentDocs/Drawer/markdown/DrawerExamples.mdx';
import DrawerHeaderExamples from '../componentDocs/DrawerHeader/markdown/DrawerHeaderExamples.mdx';
import DrawerSubheaderExamples from '../componentDocs/DrawerSubheader/markdown/DrawerSubheaderExamples.mdx';
import DrawerBodyExamples from '../componentDocs/DrawerBody/markdown/DrawerBodyExamples.mdx';
import DrawerNavGroupExamples from '../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupExamples.mdx';
import DrawerFooterExamples from '../componentDocs/DrawerFooter/markdown/DrawerFooterExamples.mdx';
import DrawerNavItemExamples from '../componentDocs/DrawerNavItem/markdown/DrawerNavItemExamples.mdx';
import EmptyStateExamples from '../componentDocs/EmptyState/markdown/EmptyStateExamples.mdx';
import GradeExamples from '../componentDocs/Grade/markdown/GradeExamples.mdx';
import HeaderExamples from '../componentDocs/Header/markdown/HeaderExamples.mdx';
import HeroExamples from '../componentDocs/Hero/markdown/HeroExamples.mdx';
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
import AutoCompleteAPIDocs from '../componentDocs/AutoComplete/markdown/AutoCompleteAPIDocs.mdx';
import ChannelValueAPIDocs from '../componentDocs/ChannelValue/markdown/ChannelValueAPIDocs.mdx';
import ChipAPIDocs from '../componentDocs/Chip/markdown/ChipAPIDocs.mdx';
import CollapsibleHeaderAPIDocs from '../componentDocs/CollapsibleHeaderLayout/markdown/CollapsibleHeaderLayoutAPIDocs.mdx';
import DrawerAPIDocs from '../componentDocs/Drawer/markdown/DrawerAPIDocs.mdx';
import DrawerHeaderAPIDocs from '../componentDocs/DrawerHeader/markdown/DrawerHeaderAPIDocs.mdx';
import DrawerSubheaderAPIDocs from '../componentDocs/DrawerSubheader/markdown/DrawerSubheaderAPIDocs.mdx';
import DrawerBodyAPIDocs from '../componentDocs/DrawerBody/markdown/DrawerBodyAPIDocs.mdx';
import DrawerNavGroupAPIDocs from '../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupAPIDocs.mdx';
import DrawerFooterAPIDocs from '../componentDocs/DrawerFooter/markdown/DrawerFooterAPIDocs.mdx';
import DrawerNavItemAPIDocs from '../componentDocs/DrawerNavItem/markdown/DrawerNavItemAPIDocs.mdx';
import EmptyStateAPIDocs from '../componentDocs/EmptyState/markdown/EmptyStateAPIDocs.mdx';
import GradeAPIDocs from '../componentDocs/Grade/markdown/GradeAPIDocs.mdx';
import HeaderAPIDocs from '../componentDocs/Header/markdown/HeaderAPIDocs.mdx';
import HeroAPIDocs from '../componentDocs/Hero/markdown/HeroAPIDocs.mdx';
import IconsAPIDocs from '../componentDocs/Icons/markdown/IconsAPIDocs.mdx';
import IconSwitchAPIDocs from '../componentDocs/IconSwitch/markdown/IconSwitchAPIDocs.mdx';
import InfoListItemAPIDocs from '../componentDocs/InfoListItem/markdown/InfoListItemAPIDocs.mdx';
import ListItemTagAPIDocs from '../componentDocs/ListItemTag/markdown/ListItemTagAPIDocs.mdx';
import MobileStepperAPIDocs from '../componentDocs/MobileStepper/markdown/MobileStepperAPIDocs.mdx';
import OverlineAPIDocs from '../componentDocs/Overline/markdown/OverlineAPIDocs.mdx';
import ScoreCardAPIDocs from '../componentDocs/ScoreCard/markdown/ScoreCardAPIDocs.mdx';
import SpacerAPIDocs from '../componentDocs/Spacer/markdown/SpacerAPIDocs.mdx';
import UserMenuAPIDocs from '../componentDocs/UserMenu/markdown/UserMenuAPIDocs.mdx';

// Playground components
import { ChannelValuePlaygroundComponent } from '../componentDocs/ChannelValue/playground';
import { DrawerPlaygroundComponent } from '../componentDocs/Drawer/playground';
import { DrawerHeaderPlaygroundComponent } from '../componentDocs/DrawerHeader/playground/PlaygroundPage';
import { DrawerNavGroupPlaygroundComponent } from '../componentDocs/DrawerNavGroup/playground/PlaygroundPage';
import { EmptyStatePlaygroundComponent } from '../componentDocs/EmptyState/playground';
import { HeroPlaygroundComponent } from '../componentDocs/Hero/playground';
import { GradePlaygroundComponent } from '../componentDocs/Grade/playground';
import { ChipPlaygroundComponent } from '../componentDocs/Chip/playground/PlaygroundPage';
import { ScoreCardPlaygroundComponent } from '../componentDocs/ScoreCard/playground';
import { ListItemTagPlaygroundComponent } from '../componentDocs/ListItemTag/playground';
import { MobileStepperPlaygroundComponent } from '../componentDocs/MobileStepper/playground';
import { InfoListItemPlaygroundComponent } from '../componentDocs/InfoListItem/playground';
import { DrawerNavItemPlaygroundComponent } from '../componentDocs/DrawerNavItem/playground/PlaygroundPage';
import { IconSwitchPlaygroundComponent } from '../componentDocs/IconSwitch/playground';
import { UserMenuPlaygroundComponent } from '../componentDocs/UserMenu/playground';
import { HeaderPlaygroundComponent } from '../componentDocs/Header/playground';
import { CollapsibleHeaderLayoutPlaygroundComponent } from '../componentDocs/CollapsibleHeaderLayout/playground';

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
        title: 'Getting Started',
        path: '/getting-started/',
        element: <Outlet />,
        pages: [
            {
                title: 'Environment',
                path: 'environment',
                element: <MarkdownPage title={'Environment Setup'} markdown={Environment} />,
            },
            {
                title: 'Start a BLUI Project',
                path: 'start-a-project',
                element: <MarkdownPage title={'Start a Brightlayer UI Project'} markdown={ReactNative} />,
            },
        ],
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
                title: 'Auto Complete',
                path: 'auto-complete/',
                element: <ComponentPreviewPage title={'Auto Complete'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <AutoCompleteExample />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <AutoCompleteAPIDocs />,
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
                        element: <ChannelValueExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ChannelValueAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ChannelValuePlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ChipPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <CollapsibleHeaderLayoutPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Drawer',
                path: '',
                pages: [
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
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerPlaygroundComponent />,
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
                                element: <DrawerHeaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerHeaderAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerHeaderPlaygroundComponent />,
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
                                element: <DrawerSubheaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerSubheaderAPIDocs />,
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
                                element: <DrawerBodyExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerBodyAPIDocs />,
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
                                element: <DrawerNavGroupExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavGroupAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavGroupPlaygroundComponent />,
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
                                element: <DrawerNavItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavItemAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavItemPlaygroundComponent />,
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
                                element: <DrawerFooterExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerFooterAPIDocs />,
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
                        element: <EmptyStateExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <EmptyStateAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <EmptyStatePlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <GradePlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <HeaderPlaygroundComponent />,
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
                        element: <HeroExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <HeroAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <HeroPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <IconSwitchPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <InfoListItemPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ListItemTagPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <MobileStepperPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ScoreCardPlaygroundComponent />,
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
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <UserMenuPlaygroundComponent />,
                    },
                ],
            },
        ],
    },
    {
        title: 'Themes',
        path: '/themes/',
        element: <Outlet />,
        pages: [
            {
                title: 'Overview',
                path: 'overview',
                element: <MarkdownPage title={'Theme Overview'} markdown={Overview} />,
            },
            {
                title: 'Usage',
                path: 'usage',
                element: <MarkdownPage title={'Theme Usage'} markdown={Usage} />,
            },
            {
                title: 'Customization',
                path: 'customization',
                element: <MarkdownPage title={'Theme Customization'} markdown={Customization} />,
            },
        ],
    },
    {
        title: 'Workflows',
        path: '/workflows/',
        element: <Outlet />,
        pages: [
            {
                title: 'Overview',
                path: 'getting-started/',
                element: <MarkdownPage title={'Overview'} markdown={WorkflowOverview} />,
            },
            {
                title: 'Authentication Workflow',
                path: 'authentication-workflow/',
                element: <MarkdownPage title={'Authentication Workflow'} markdown={AuthenticationWorkflow} />,
            },
            {
                title: 'Registration Workflow',
                path: 'registration-workflow/',
                element: <MarkdownPage title={'Registration Workflow'} markdown={RegistrationWorkflow} />,
            },
            {
                title: 'Customization',
                path: 'customization/',
                element: <MarkdownPage title={'Customization'} markdown={WorkflowCustomization} />,
            },
            {
                title: 'Error Management',
                path: 'error-management/',
                element: <MarkdownPage title={'Error Management'} markdown={ErrorManagement} />,
            },
            {
                title: 'Language Support',
                path: 'language-support/',
                element: <MarkdownPage title={'Language Support'} markdown={LanguageSupport} />,
            },
            {
                title: 'Error Handling',
                path: 'error-handling/',
                element: <MarkdownPage title={'Error Handling'} markdown={ErrorHandling} />,
            },
            {
                title: 'Routing',
                path: 'routing/',
                element: <MarkdownPage title={'Routing'} markdown={Routing} />,
            },
            {
                title: 'Components',
                path: '',
                pages: [
                    {
                        title: 'Overview',
                        path: 'components/',
                        element: <MarkdownPage title={'Components'} markdown={WorkflowComponents} />,
                    },
                    {
                        title: 'Basic Dialog',
                        path: 'basic-dialog/',
                        element: <MarkdownPage title={'Basic Dialog'} markdown={BasicDialog} />,
                    },
                    {
                        title: 'Error Manager',
                        path: 'error-manager/',
                        element: <MarkdownPage title={'Error Manager'} markdown={ErrorManager} />,
                    },
                    {
                        title: 'Password Text Field',
                        path: 'password-text-field/',
                        element: <MarkdownPage title={'Error Manager'} markdown={PasswordTextField} />,
                    },
                    {
                        title: 'Set Password',
                        path: 'set-password/',
                        element: <MarkdownPage title={'Set Password'} markdown={SetPassword} />,
                    },
                    {
                        title: 'WorkflowCard*',
                        path: 'workflow-card/',
                        element: <MarkdownPage title={'WorkflowCard*'} markdown={WorkflowCard} />,
                    },
                ],
            },
            {
                title: 'Screens',
                path: '',
                pages: [
                    {
                        title: 'Overview',
                        path: 'screens/',
                        element: <MarkdownPage title={'Screens'} markdown={WorkflowScreens} />,
                    },
                    {
                        title: 'Account Details',
                        path: 'account-details/',
                        element: <MarkdownPage title={'Account Details'} markdown={AccountDetails} />,
                    },
                    {
                        title: 'Change Password',
                        path: 'change-password/',
                        element: <MarkdownPage title={'Change Password'} markdown={ChangePassword} />,
                    },
                    {
                        title: 'Contact',
                        path: 'contact/',
                        element: <MarkdownPage title={'Contact'} markdown={Contact} />,
                    },
                    {
                        title: 'Create Account',
                        path: 'create-account/',
                        element: <MarkdownPage title={'Create Account'} markdown={CreateAccount} />,
                    },
                    {
                        title: 'Create Password',
                        path: 'create-password/',
                        element: <MarkdownPage title={'Create Password'} markdown={CreatePassword} />,
                    },
                    {
                        title: 'Eula',
                        path: 'eula/',
                        element: <MarkdownPage title={'Eula'} markdown={Eula} />,
                    },
                    {
                        title: 'Existing Account Success',
                        path: 'existing-account-success/',
                        element: <MarkdownPage title={'Existing Account Success'} markdown={ExistingAccountSuccess} />,
                    },
                    {
                        title: 'Forgot Password',
                        path: 'forgot-password/',
                        element: <MarkdownPage title={'Forgot Password'} markdown={ForgotPassword} />,
                    },
                    {
                        title: 'Login',
                        path: 'login/',
                        element: <MarkdownPage title={'Login'} markdown={Login} />,
                    },
                    {
                        title: 'Okta Login',
                        path: 'okta-login/',
                        element: <MarkdownPage title={'Okta Login'} markdown={OktaLogin} />,
                    },
                    {
                        title: 'Registration Success',
                        path: 'registration-success/',
                        element: <MarkdownPage title={'Registration Success'} markdown={RegistrationSuccess} />,
                    },
                    {
                        title: 'Reset Password',
                        path: 'reset-password/',
                        element: <MarkdownPage title={'Reset Password'} markdown={ResetPassword} />,
                    },
                    {
                        title: 'Success',
                        path: 'success/',
                        element: <MarkdownPage title={'Success'} markdown={Success} />,
                    },
                    {
                        title: 'Verify Code',
                        path: 'verify-code/',
                        element: <MarkdownPage title={'Verify Code'} markdown={VerifyCode} />,
                    },
                ],
            },
        ],
    },
];
