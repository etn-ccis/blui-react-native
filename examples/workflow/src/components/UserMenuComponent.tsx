import { InfoListItemProps, UserMenu } from '@brightlayer-ui/react-native-components';
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';
import SelectDropdown from 'react-native-select-dropdown';
import { useTranslation } from 'react-i18next';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useApp } from '../contexts/AppContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorage } from '../store/local-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { revokeAccessToken, clearTokens, signOut } from '@okta/okta-react-native';
import { IconFamily } from '@brightlayer-ui/react-native-components/core/__types__';

const SwapIcon: IconFamily = {
    family: 'material',
    name: 'swap-horiz',
    direction: 'ltr',
};
const InvertColorsIcon: IconFamily = {
    family: 'material',
    name: 'invert-colors',
    direction: 'ltr',
};
const ExitToAppIcon: IconFamily = {
    family: 'material',
    name: 'exit-to-app',
    direction: 'ltr',
};
const LockIcon: IconFamily = {
    family: 'material',
    name: 'lock',
    direction: 'ltr',
};

type UserMenuExampleProps = {
    onToggleRTL: () => void;
    onToggleTheme: () => void;
};

export const UserMenuComponent: React.FC<UserMenuExampleProps> = (props) => {
    const { onToggleRTL, onToggleTheme } = props;
    const theme = useExtendedTheme();
    const { i18n, t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const app = useApp();
    const handleLanguageChange = async (newLanguage: string): Promise<any> => {
        app.setLanguage(newLanguage);
        void i18n.changeLanguage(newLanguage);
        try {
            await AsyncStorage.setItem('userLanguage', newLanguage);
        } catch (error) {
            console.error('Error setting new language:', error);
        }
    };
    const logout = async (): Promise<void> => {
        LocalStorage.clearAuthCredentials();
        try {
            await signOut();
            await revokeAccessToken();
            await clearTokens();
        } catch (_error) {
            // eslint-disable-next-line no-console
            console.log(_error as Error);
        }
        app.onUserNotAuthenticated();
    };
    const handleLogout = (): void => {
        logout().catch((error) => {
            // Handle any errors here if needed
            console.error(error);
        });
    };
    const changePassword = (): void => {
        navigation.navigate('ChangePassword');
    };
    const languageOptions = [
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'Chinese', value: 'zh' },
        { label: 'Portuguese', value: 'pt' },
    ];

    const menuItems: InfoListItemProps[] = [
        { title: t('USER_MENU.TOGGLE_RTL'), icon: SwapIcon, onPress: (): void => onToggleRTL() },
        {
            title: t('USER_MENU.TOGGLE_THEME'),
            icon: InvertColorsIcon,
            onPress: (): void => onToggleTheme(),
        },
        {
            title: t('USER_MENU.LANGUAGE'),
            icon: { name: 'translate' },
            rightComponent: (
                <SelectDropdown
                    defaultValue={languageOptions.find((option) => option.value === i18n.language)}
                    onSelect={(item) => {
                        void handleLanguageChange(item.value);
                    }}
                    data={languageOptions}
                    renderButton={(selectedItem) => {
                        const selectedLabel = selectedItem?.label || 'Select Language';
                        return (
                            <View
                                style={{
                                    backgroundColor: theme.colors.background,
                                    paddingHorizontal: 8,
                                    paddingVertical: 4,
                                    borderRadius: 4,
                                    minWidth: 120,
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ color: theme.colors.primary }}>{selectedLabel}</Text>
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => (
                        <View
                            style={{
                                padding: 12,
                                backgroundColor: isSelected ? theme.colors.primaryContainer : 'transparent',
                                minWidth: 120,
                            }}
                        >
                            <Text style={{ color: theme.colors.onSurface }}>{item.label}</Text>
                        </View>
                    )}
                    dropdownStyle={{
                        backgroundColor: theme.colors.surface,
                        borderRadius: 8,
                        minWidth: 120,
                        maxWidth: 150,
                        marginTop: 4,
                    }}
                />
            ),
        },
        { title: t('USER_MENU.CHANGE_PASSWORD'), icon: LockIcon, onPress: (): void => changePassword() },
        { title: t('USER_MENU.LOG_OUT'), icon: ExitToAppIcon, onPress: handleLogout },
    ];

    return (
        <UserMenu
            menuTitle={'John Smith'}
            menuSubtitle={'Account Manager'}
            menuItems={menuItems}
            avatar={
                <Avatar.Icon
                    icon="account-circle"
                    size={40}
                    color={BLUIColors.primary[50]}
                    style={{ backgroundColor: BLUIColors.primary[80] }}
                />
            }
        />
    );
};
