import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContactSupportScreenBase } from './ContactSupportScreenBase.js';
import { useAuthContext } from '../../contexts/index.js';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { Linking, StyleSheet } from 'react-native';
const makeStyles = (theme) => StyleSheet.create({
    textStyles: {
        color: theme.colors.primary,
    },
});
/**
 * Component renders a screen with contact information for support with the application.
 *
 * @param {ContactSupportScreenProps} props - Props of Contact Support Screen
 *
 * @category Component
 */
export const ContactSupportScreen = (props) => {
    const { t } = useTranslation();
    const { navigate } = useAuthContext();
    const theme = useExtendedTheme();
    const defaultStyles = makeStyles(theme);
    const { contactEmail = 'something@email.com', contactPhone = '1-800-123-4567' } = props;
    const defaultEmailSupportContent = () => (_jsxs(Text, { variant: "bodyLarge", children: [`${t('bluiAuth:CONTACT_SUPPORT.SUPPORT_MESSAGE')}`, _jsx(Text, { variant: "labelLarge", style: defaultStyles.textStyles, onPress: () => Linking.openURL(`mailto:${contactEmail ?? ''}`), children: contactEmail }), `.`] }));
    const defaultPhoneSupportContent = () => (_jsxs(Text, { variant: "bodyLarge", children: [`${t('bluiAuth:CONTACT_SUPPORT.TECHNICAL_ASSISTANCE')}`, _jsx(Text, { variant: "labelLarge", style: defaultStyles.textStyles, onPress: () => Linking.openURL(`tel:${contactPhone ?? ''}`), children: contactPhone }), `.`] }));
    const { icon = { name: 'chat-bubble-outline' }, iconSize = 70, emailSupportTitle = t('bluiAuth:CONTACT_SUPPORT.GENERAL_QUESTIONS'), emailSupportContent = defaultEmailSupportContent, phoneSupportTitle = t('bluiAuth:CONTACT_SUPPORT.EMERGENCY_SUPPORT'), phoneSupportContent = defaultPhoneSupportContent, dismissButtonLabel = t('bluiCommon:ACTIONS.OKAY'), onDismiss, WorkflowCardHeaderProps, WorkflowCardActionsProps, ...otherContactSupportProps } = props;
    const workflowCardHeaderProps = {
        title: t('bluiAuth:USER_MENU.CONTACT_US'),
        onIconPress: () => {
            navigate(-1);
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardActionsProps = {
        nextLabel: t('bluiCommon:ACTIONS.OKAY'),
        showNext: true,
        canGoNext: true,
        fullWidthButton: true,
        ...WorkflowCardActionsProps,
        onNext: () => {
            navigate(-1);
            WorkflowCardActionsProps?.onNext?.();
        },
    };
    return (_jsx(ContactSupportScreenBase, { WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardActionsProps: workflowCardActionsProps, icon: icon, iconSize: iconSize, emailSupportTitle: emailSupportTitle, emailSupportContent: emailSupportContent, phoneSupportTitle: phoneSupportTitle, phoneSupportContent: phoneSupportContent, contactEmail: contactEmail, contactPhone: contactPhone, dismissButtonLabel: dismissButtonLabel, onDismiss: onDismiss, ...otherContactSupportProps }));
};
