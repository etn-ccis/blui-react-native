import { InfoListItemProps, UserMenu } from '@brightlayer-ui/react-native-components';
import React from 'react';
import { Avatar } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';
import { IconFamily } from '@brightlayer-ui/react-native-components/md3/__types__';

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
const CancelIcon: IconFamily = {
    family: 'material',
    name: 'cancel',
    direction: 'ltr',
};

type UserMenuExampleProps = {
    onToggleRTL: () => void;
    onToggleTheme: () => void;
};

export const UserMenuExample: React.FC<UserMenuExampleProps> = (props) => {
    const { onToggleRTL, onToggleTheme } = props;

    const menuItems: InfoListItemProps[] = [
        { title: 'Toggle RTL', icon: SwapIcon, onPress: (): void => onToggleRTL() },
        {
            title: 'Toggle Theme',
            icon: InvertColorsIcon,
            onPress: (): void => onToggleTheme(),
        },
        { title: 'Cancel', icon: CancelIcon },
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
