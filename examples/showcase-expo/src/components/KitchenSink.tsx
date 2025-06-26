import React, { JSX, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Appbar,
    Avatar,
    Badge,
    Banner,
    Button,
    BottomNavigation,
    Card,
    Checkbox,
    DataTable,
    Dialog,
    Divider,
    FAB,
    HelperText,
    IconButton,
    List,
    Menu,
    Modal,
    Portal,
    RadioButton,
    Surface,
    Switch,
    ToggleButton,
    TextInput,
    Text,
    ProgressBar,
    Snackbar,
    ActivityIndicator,
    SegmentedButtons,
} from 'react-native-paper';
import { DISABLE_FONT_SCALE, MAX_FONT_SCALE } from '../constants';
import {
    ChannelValue,
    ListItemTag,
    Overline,
    EmptyState,
    Hero,
    HeroBanner,
    Header,
    InfoListItem,
    UserMenu,
    Spacer,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    Grade,
    IconSwitch,
    Chip,
    Icon,
} from '@brightlayer-ui/react-native-components';
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';
import { ScoreCardExample } from './ScoreCardExample';
import { MobileStepperExample } from './MobileStepperExample';
import * as BLUIColors from '@brightlayer-ui/colors';
import { TextFieldExample } from './TextInputExample';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { AutoCompleteExample } from './AutocompleteExample';

const PublicDomainAlice = require('../assets/images/public-domain-alice.png');

const MusicRoute = (): JSX.Element => <Text>Music</Text>;
const AlbumsRoute = (): JSX.Element => <Text>Albums</Text>;
const RecentsRoute = (): JSX.Element => <Text>Recents</Text>;

const styles = StyleSheet.create({
    card: {
        padding: 0,
        margin: 10,
        marginBottom: 5,
    },
    surface: {
        padding: 8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export const KitchenSink: React.FC = (): JSX.Element => {
    const theme = useExtendedTheme();
    const [bannerVisible, setBannerVisible] = React.useState(true);
    const [checkboxAndroidOne, setCheckboxAndroidOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'unchecked'
    );
    const [checkboxAndroidTwo, setCheckboxAndroidTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'checked'
    );
    const [checkboxIOSOne, setCheckboxIOSOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [checkboxIOSTwo, setCheckboxIOSTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('checked');
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [helperTextInputText, setHelperTextInputText] = React.useState('');
    const [accordionOneExpanded, setAccordionOneExpanded] = React.useState(false);
    const [accordionTwoExpanded, setAccordionTwoExpanded] = React.useState(false);
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [radioButtonAndroidValue, setRadioButtonAndroidValue] = React.useState('first');
    const [radioButtonIOSValue, setRadioButtonIOSValue] = React.useState('first');
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [snackbarTwoVisible, setSnackbarTwoVisible] = React.useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [toggleButtonValue, setToggleButtonValue] = useState('left');
    const [toggleButtonFontValue, setToggleButtonFontValue] = useState('bold');
    const [nameInputText, setNameInputText] = React.useState('');
    const [emailInputText, setEmailInputText] = React.useState('');
    const [errorNameInputText, setErrorNameInputText] = React.useState('');
    const [errorEmailInputText, setErrorEmailInputText] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const onChangeHelperTextInputText = (text: string): void => setHelperTextInputText(text);

    const helperTextInputHasErrors = (): boolean => !helperTextInputText.includes('@');

    const [routes] = React.useState([
        { key: 'music', title: 'Music', focusedIcon: 'music', badge: true },
        {
            key: 'albums',
            title: 'Albums',
            focusedIcon: 'album',
            badge: '1',
        },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    const [state, setState] = React.useState({ open: false });
    const [toggledIconValue, settoggledIconValue] = useState([true, true, false, false, true, true, false, false]);
    const handleIconSwitchChange = (iconIndex: number): void => {
        settoggledIconValue((prevState) => {
            const newState = [...prevState];
            newState[iconIndex] = !newState[iconIndex];
            return newState;
        });
    };

    const onStateChange = ({ open }: { open: boolean }): void => setState({ open });

    const { open } = state;

    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);

    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const showDialog = (): void => setDialogVisible(true);
    const hideDialog = (): void => setDialogVisible(false);

    const showModal = (): void => setVisible(true);
    const hideModal = (): void => setVisible(false);

    const [segmentedText, setSegmentedText] = useState('');
    const [icon, setIcon] = React.useState('');
    const [segmentedValue, setSegmentedValue] = React.useState('');

    return (
        <>
            <Text variant="titleLarge" style={{ marginVertical: 48 }}>
                MD3 BLUI Components
            </Text>
            <AutoCompleteExample />
            <Card style={styles.card}>
                <Card.Title title="Segmented Buttons" />
                <Card.Content>
                    <SegmentedButtons
                        value={segmentedText}
                        onValueChange={setSegmentedText}
                        buttons={[
                            {
                                value: 'walk',
                                label: 'Walking',
                            },
                            {
                                value: 'train',
                                label: 'Transit',
                            },
                            { value: 'drive', label: 'Driving' },
                        ]}
                        style={{ marginBottom: 20 }}
                    />
                    <SegmentedButtons
                        value={icon}
                        onValueChange={setIcon}
                        buttons={[
                            {
                                value: 'walk',
                                icon: 'walk',
                            },
                            {
                                value: 'train',
                                icon: 'train',
                            },
                            {
                                value: 'drive',
                                icon: 'car',
                            },
                        ]}
                        style={{ marginBottom: 20 }}
                    />
                    <SegmentedButtons
                        value={segmentedValue}
                        onValueChange={setSegmentedValue}
                        buttons={[
                            {
                                value: 'walk',
                                label: 'Walking',
                                icon: 'walk',
                            },
                            {
                                value: 'train',
                                label: 'Transit',
                                icon: 'train',
                            },
                            {
                                value: 'drive',
                                label: 'Driving',
                                icon: 'car',
                            },
                        ]}
                        style={{ marginBottom: 10 }}
                    />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Icon" />
                <Card.Content>
                    <Icon source={{ family: 'brightlayer-ui', name: 'device' }} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Icon Switch" />
                <Card.Content>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[0]}
                            onValueChange={() => {
                                handleIconSwitchChange(0);
                            }}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[1]}
                            onValueChange={() => {
                                handleIconSwitchChange(1);
                            }}
                            showIcon
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[2]}
                            onValueChange={() => {
                                handleIconSwitchChange(2);
                            }}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            showIcon
                            value={toggledIconValue[3]}
                            onValueChange={() => {
                                handleIconSwitchChange(3);
                            }}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[4]}
                            onValueChange={() => {
                                handleIconSwitchChange(4);
                            }}
                            disabled
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[5]}
                            onValueChange={() => {
                                handleIconSwitchChange(5);
                            }}
                            showIcon
                            disabled
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[6]}
                            onValueChange={() => {
                                handleIconSwitchChange(6);
                            }}
                            disabled
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconSwitch
                            value={toggledIconValue[7]}
                            onValueChange={() => {
                                handleIconSwitchChange(7);
                            }}
                            showIcon
                            disabled
                        />
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Chip" />
                <Card.Content style={{ alignItems: 'flex-start' }}>
                    <Chip style={{ marginTop: 10 }}>Outlined Chip</Chip>
                    <Chip
                        icon={{ name: 'info' }}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Icon
                    </Chip>
                    <Chip
                        avatar={<Avatar.Icon size={40} icon="account-circle" />}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Avatar
                    </Chip>
                    <Chip
                        closeIcon="delete"
                        style={{
                            marginTop: 10,
                        }}
                        onClose={() => {}}
                    >
                        Outlined Chip With Close Icon
                    </Chip>
                    <Chip selected style={{ marginTop: 10 }}>
                        Selected Outlined Chip
                    </Chip>
                    <Chip
                        selected
                        showSelectedOverlay
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Selected Outlined Chip With Overlay
                    </Chip>
                    <Chip
                        selected
                        showSelectedCheck
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Selected Outlined Chip With Check
                    </Chip>
                    <Chip
                        rippleColor={BLUIColors.primary[50]}
                        onPress={() => console.log('ripple effect')}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Ripple Color
                    </Chip>
                    <Chip disabled style={{ marginTop: 10 }}>
                        Disabled Outlined Chip
                    </Chip>
                    <Chip onPress={() => console.log('outlined chip pressed')} style={{ marginTop: 10 }}>
                        Outlined Chip On Press
                    </Chip>
                    <Chip
                        onPress={() => console.log('outlined chip pressed')}
                        onLongPress={() => console.log('outlined chip long pressed')}
                        style={{ marginTop: 10 }}
                    >
                        Outlined Chip On Long Press
                    </Chip>
                    <Chip onPressIn={() => console.log('outlined chip on press in')} style={{ marginTop: 10 }}>
                        Outlined Chip On Press In
                    </Chip>
                    <Chip onPressOut={() => console.log('outlined chip on press out')} style={{ marginTop: 10 }}>
                        Outlined Chip On Press Out
                    </Chip>
                    <Chip
                        onClose={(): void => {
                            console.log('outlined chip on close');
                        }}
                        style={{ marginTop: 10 }}
                    >
                        Outlined Chip On Close
                    </Chip>
                    <Chip
                        delayLongPress={3000}
                        onPress={() => console.log('outlined chip pressed')}
                        onLongPress={() => console.log('outlined chip long pressed for 3 seconds')}
                        style={{ marginTop: 10 }}
                    >
                        Outlined Chip Delay Long Press
                    </Chip>
                    <Chip
                        compact
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Compact Outlined Chip
                    </Chip>
                    <Chip
                        textStyle={{ color: BLUIColors.neutralVariant[50] }}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Text Style
                    </Chip>
                    <Chip
                        style={{
                            marginTop: 10,
                            backgroundColor: BLUIColors.neutralVariant[50],
                        }}
                    >
                        Outlined Chip With Style
                    </Chip>
                    <Chip
                        ellipsizeMode="middle"
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Ellipsize Mode Outlined Chip With Ellipsize Mode
                    </Chip>
                    <Chip
                        icon={{ name: 'info' }}
                        iconColor={BLUIColors.error[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Icon Color
                    </Chip>
                    <Chip
                        chipColor={BLUIColors.primary[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Chip Color
                    </Chip>
                    <Chip
                        borderColor={BLUIColors.primary[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Outlined Chip With Border Color
                    </Chip>
                    <Divider style={{ marginVertical: 10 }} />
                    <Chip mode="elevated">Elevated Chip</Chip>
                    <Chip
                        mode="elevated"
                        icon={{ name: 'info' }}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Icon
                    </Chip>
                    <Chip
                        mode="elevated"
                        avatar={<Avatar.Icon size={40} icon="account-circle" />}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Avatar
                    </Chip>
                    <Chip
                        mode="elevated"
                        closeIcon="delete"
                        style={{
                            marginTop: 10,
                        }}
                        onClose={() => {}}
                    >
                        Elevated Chip With Close Icon
                    </Chip>
                    <Chip
                        selected
                        mode="elevated"
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Selected Elevated Chip
                    </Chip>
                    <Chip
                        mode="elevated"
                        selected
                        showSelectedOverlay
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Selected Elevated Chip With Overlay
                    </Chip>
                    <Chip
                        mode="elevated"
                        selected
                        showSelectedCheck
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Selected Elevated Chip With Check
                    </Chip>
                    <Chip
                        mode="elevated"
                        rippleColor={BLUIColors.primary[50]}
                        onPress={() => console.log('ripple effect')}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Ripple Color
                    </Chip>
                    <Chip mode="elevated" disabled style={{ marginTop: 10 }}>
                        Disabled Elevated Chip
                    </Chip>
                    <Chip
                        mode="elevated"
                        onPress={() => console.log('elevated chip pressed')}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip On Press
                    </Chip>
                    <Chip
                        mode="elevated"
                        onPress={() => console.log('elevated chip pressed')}
                        onLongPress={() => console.log('elevated chip long pressed')}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip On Long Press
                    </Chip>
                    <Chip
                        mode="elevated"
                        onPressIn={() => console.log('elevated chip on press in')}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip On Press In
                    </Chip>
                    <Chip
                        mode="elevated"
                        onPressOut={() => console.log('elevated chip on press out')}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip On Press Out
                    </Chip>
                    <Chip
                        mode="elevated"
                        onClose={(): void => {
                            console.log('elevated chip on close');
                        }}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip On Close
                    </Chip>
                    <Chip
                        mode="elevated"
                        delayLongPress={3000}
                        onPress={() => console.log('elevated chip pressed')}
                        onLongPress={() => console.log('elevated chip long pressed for 3 seconds')}
                        style={{ marginTop: 10 }}
                    >
                        Elevated Chip Delay Long Press
                    </Chip>
                    <Chip
                        mode="elevated"
                        compact
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Compact Elevated Chip
                    </Chip>
                    <Chip
                        mode="elevated"
                        textStyle={{ color: BLUIColors.neutralVariant[50] }}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Text Style
                    </Chip>
                    <Chip
                        mode="elevated"
                        style={{
                            marginTop: 10,
                            backgroundColor: BLUIColors.neutralVariant[50],
                        }}
                    >
                        Elevated Chip With Style
                    </Chip>
                    <Chip
                        mode="elevated"
                        ellipsizeMode="middle"
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Ellipsize Mode Elevated Chip With Ellipsize Mode
                    </Chip>
                    <Chip
                        mode="elevated"
                        icon={{ name: 'info' }}
                        iconColor={BLUIColors.error[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Icon Color
                    </Chip>
                    <Chip
                        mode="elevated"
                        chipColor={BLUIColors.primary[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Chip Color
                    </Chip>
                    <Chip
                        mode="elevated"
                        borderColor={BLUIColors.primary[50]}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Elevated Chip With Border Color
                    </Chip>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Grades" />
                <Card.Content>
                    <Grade.APlus style={{ marginBottom: 10 }} />
                    <Grade.A style={{ marginBottom: 10 }} />
                    <Grade.AMinus style={{ marginBottom: 10 }} />
                    <Grade.BPlus style={{ marginBottom: 10 }} />
                    <Grade.B style={{ marginBottom: 10 }} />
                    <Grade.BMinus style={{ marginBottom: 10 }} />
                    <Grade.CPlus style={{ marginBottom: 10 }} />
                    <Grade.C style={{ marginBottom: 10 }} />
                    <Grade.CMinus style={{ marginBottom: 10 }} />
                    <Grade.DPlus style={{ marginBottom: 10 }} />
                    <Grade.D style={{ marginBottom: 10 }} />
                    <Grade.DMinus style={{ marginBottom: 10 }} />
                    <Grade.F style={{ marginBottom: 10 }} />
                    <Grade label="Cg" size={40} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Drawer" />
                <Card.Content>
                    <Drawer activeItem="item1" style={{ margin: 10 }}>
                        <DrawerHeader
                            title={'Drawer Title'}
                            subtitle={'Drawer Subtitle'}
                            icon={{ name: 'menu', direction: 'auto' }}
                        />
                        <DrawerBody>
                            {/* Using children */}
                            <DrawerNavGroup title={'Navigation Group'}>
                                <DrawerNavItem
                                    itemID={'item1'}
                                    title={'Account'}
                                    icon={{ family: 'material-community', name: 'account', direction: 'auto' }}
                                    // activeItemBackgroundShape={'round'}
                                    InfoListItemProps={{
                                        iconAlign: 'center',
                                    }}
                                />
                                <DrawerNavItem
                                    itemID={'item2'}
                                    title={'Notification'}
                                    icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
                                    activeItemBackgroundShape={'round'}
                                    InfoListItemProps={{
                                        iconAlign: 'center',
                                    }}
                                >
                                    <DrawerNavItem itemID={'item3'} title={'item3'}>
                                        <DrawerNavItem itemID={'item31'} title={'Item31'} />
                                        <DrawerNavItem itemID={'item32'} title={'Item32'} />
                                    </DrawerNavItem>
                                </DrawerNavItem>
                                <DrawerNavItem
                                    itemID={'item4'}
                                    title={'Localization'}
                                    icon={{ family: 'material-community', name: 'circle', direction: 'auto' }}
                                    activeItemBackgroundShape={'round'}
                                    InfoListItemProps={{
                                        iconAlign: 'center',
                                    }}
                                />
                            </DrawerNavGroup>
                            {/* Using 'items' prop */}
                            <DrawerNavGroup
                                title={'Navigation Group'}
                                items={[
                                    {
                                        title: 'Sensors',
                                        itemID: 'id1',
                                    },
                                    {
                                        title: 'Devices',
                                        itemID: 'id2',
                                    },
                                    {
                                        title: 'Communication',
                                        itemID: 'id3',
                                    },
                                ]}
                            />
                        </DrawerBody>
                    </Drawer>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Header" />
            </Card>
            <Header
                title={'Valley Forge'}
                subtitle={'The Last Stand'}
                icon={{ name: 'menu' }}
                onIconPress={() => {}}
                actionItems={[
                    {
                        icon: { name: 'more-vert' },
                        onPress: (): void => {},
                    },
                ]}
                variant="static"
                backgroundImage={require('../assets/images/farm.jpg')}
                searchableConfig={{ onChangeText: () => {} }}
                expandable={true}
                collapsedHeight={56}
            />
            <Card style={styles.card}>
                <Card.Title title="Spacer" />
                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                    <Text>Horizontal</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ height: 50, width: 70, backgroundColor: '#4682B4' }} />
                        <Spacer flex={0} height={10} width={10} />
                        <View style={{ height: 50, width: 155, backgroundColor: '#FFD700' }} />
                        <Spacer flex={0} height={10} width={10} />
                        <View style={{ height: 50, width: 70, backgroundColor: '#FF6347' }} />
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                    <Text>Vertical</Text>
                    <View
                        style={{
                            display: 'flex',
                        }}
                    >
                        <View style={{ height: 50, width: 315, backgroundColor: '#4682B4' }} />
                        <Spacer flex={0} height={10} width={10} />
                        <View style={{ height: 50, width: 315, backgroundColor: '#FFD700' }} />
                        <Spacer flex={0} height={10} width={10} />
                        <View style={{ height: 50, width: 315, backgroundColor: '#FF6347' }} />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="User Menu Examples" />
                <View style={{ display: 'flex' }}>
                    <View style={{ alignItems: 'center', marginBottom: 8 }}>
                        <Card.Title title="User Menu With Text Avatar" />
                        <UserMenu
                            menuTitle={'John Smith'}
                            menuSubtitle={'j.smith@example.com'}
                            menuItems={[
                                {
                                    title: 'Change Password',
                                    icon: {
                                        name: 'vpn-key',
                                    },
                                },
                                {
                                    title: 'Preferences',
                                    icon: {
                                        name: 'settings',
                                    },
                                },
                                { title: 'Log Out', icon: { name: 'exit-to-app' } },
                            ]}
                            avatar={<Avatar.Text label="JS" size={40} />}
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 8 }}>
                        <Card.Title title="User Menu With Icon" />
                        <UserMenu
                            menuTitle={'John Smith'}
                            menuSubtitle={'j.smith@example.com'}
                            menuItems={[
                                {
                                    title: 'Change Password',
                                    icon: {
                                        name: 'vpn-key',
                                    },
                                },
                                {
                                    title: 'Preferences',
                                    icon: {
                                        name: 'settings',
                                    },
                                },
                                { title: 'Log Out', icon: { name: 'exit-to-app' } },
                            ]}
                            avatar={
                                <Avatar.Icon
                                    size={40}
                                    icon="account-circle"
                                    color={theme.colors.primaryNonText}
                                    style={{ backgroundColor: theme.colors.primaryContainer }}
                                />
                            }
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 8 }}>
                        <Card.Title title="User Menu With Image Avatar" />
                        <UserMenu
                            menuTitle={'John Smith'}
                            menuSubtitle={'j.smith@example.com'}
                            menuItems={[
                                {
                                    title: 'My Account',
                                },
                                { title: 'Log Out' },
                            ]}
                            avatar={<Avatar.Image source={PublicDomainAlice} size={40} />}
                        />
                    </View>
                </View>
            </Card>
            <View
                style={{
                    justifyContent: 'center',
                    margin: 10,
                }}
            >
                <ScoreCardExample />
            </View>
            <MobileStepperExample />
            <Card style={styles.card}>
                <Card.Title title="Overline" />
                <Card.Content>
                    <Overline>Overline</Overline>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Icon (Icon Button)" />
                <Card.Content>
                    <IconButton icon={(iconProps) => <BLUIIcon name="broccoli" {...iconProps} />} onPress={() => {}} />
                    <IconButton icon="chart-pie" onPress={() => {}} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="ChannelValue" />
                <Card.Content>
                    {/* FontSize : 12px */}
                    <ChannelValue
                        value="2"
                        units="tb"
                        fontSize={12}
                        icon={{ family: 'brightlayer-ui', name: 'device' }}
                        iconColor="green"
                    />
                    {/* Font size : 14px */}
                    <ChannelValue value="2.5:1" icon={{ name: 'settings' }} fontSize={14} style={{ marginTop: 12 }} />
                    {/* Font size : 16px */}
                    <ChannelValue value="Concord" icon={'🍇'} fontSize={16} style={{ marginTop: 12 }} />
                    {/* Font size : 22px */}
                    <ChannelValue
                        value="100"
                        units="%"
                        fontSize={22}
                        icon={{ family: 'brightlayer-ui', name: 'battery' }}
                        style={{ marginTop: 12 }}
                    />
                    {/* Font size : 32px */}
                    <ChannelValue
                        value="50.2.1"
                        fontSize={32}
                        icon={{ name: 'settings' }}
                        iconColor="red"
                        style={{ marginTop: 12 }}
                    />
                    {/* Font size : 32px */}
                    <ChannelValue value="1" icon={'A'} iconColor="blue" fontSize={32} style={{ marginTop: 12 }} />
                    <ChannelValue value="1" icon={PublicDomainAlice} style={{ marginTop: 12 }} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="ListItemTag" />
                <Card.Content style={{ alignItems: 'center' }}>
                    {/* Font size : 10px */}
                    <ListItemTag label={'IN PROGRESS'} />
                    {/* Font size : 14px */}
                    <ListItemTag
                        label={'Foo Bar'}
                        backgroundColor={'red'}
                        fontColor={'black'}
                        style={{ marginTop: 12 }}
                        fontSize={14}
                    />
                    {/* Font size : 22px */}
                    <Text style={{ marginTop: 12 }}>Font size : 22px</Text>
                    <ListItemTag label={'Foo Bar'} backgroundColor={'red'} fontColor={'black'} fontSize={22} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Hero" />
                <Card.Content style={{ alignItems: 'center' }}>
                    <Hero
                        label={'Charged'}
                        icon={{ family: 'brightlayer-ui', name: 'battery' }}
                        ChannelValueProps={{ value: 100, units: '%' }}
                    />
                    <Hero label={'Chart'} icon={{ family: 'material-community', name: 'chart-pie' }} />
                    <Hero
                        label={'Setting'}
                        icon={{ name: 'settings' }}
                        iconColor="red"
                        ChannelValueProps={{ value: '50.2.1', units: '' }}
                    />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Hero Banner" />
                <Card.Content style={{ alignItems: 'center' }}>
                    <HeroBanner divider>
                        <Hero
                            label={'Charged'}
                            icon={{ family: 'brightlayer-ui', name: 'battery' }}
                            ChannelValueProps={{ value: 100, units: '%' }}
                        />
                        <Hero
                            label={'Charged'}
                            icon={{ family: 'brightlayer-ui', name: 'ups_outline' }}
                            ChannelValueProps={{ value: 100, units: '%' }}
                        />
                        <Hero
                            label={'Setting'}
                            icon={{ name: 'settings' }}
                            iconColor="red"
                            ChannelValueProps={{ value: '50.2.1', units: '' }}
                        />
                    </HeroBanner>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Empty State" />
                <Card.Content style={{ alignItems: 'center' }}>
                    <EmptyState
                        title={'Nothing Found'}
                        description={'Not a single thing'}
                        icon={{ family: 'brightlayer-ui', name: 'battery' }}
                    />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="InfoListItem" />
                <Card.Content style={{ alignItems: 'center' }}>
                    {/* With Info prop */}
                    <InfoListItem title={'Title'} subtitle={'Subtitle'} info={'Info'} hidePadding />
                    {/* Indicating Status with Avatar */}
                    <InfoListItem
                        title={'Title'}
                        icon={{ family: 'brightlayer-ui', name: 'leaf' }}
                        subtitle={'Subtitle'}
                        statusColor={BLUIColors.error[50]}
                        backgroundColor={BLUIColors.primary[50]}
                        avatar
                        divider={'partial'}
                        chevron
                        style={{ marginBottom: 20 }}
                    />
                    {/* with Icon */}
                    <InfoListItem
                        title="Info List Item Title"
                        subtitle="Info List Item Subtitle"
                        icon={{ name: 'settings' }}
                        avatar
                        divider={'full'}
                    />
                    {/* Advance example*/}
                    <InfoListItem
                        title={'Hillman Field East'}
                        subtitle={['PXM 2000', 'DT 1150', '113.4 GPM']}
                        subtitleSeparator={'/'}
                    />
                    {/* Adding Additional Content */}
                    <InfoListItem
                        title="Battery Fully Charged"
                        subtitle="Your device is ready to use"
                        icon={{ name: 'settings' }}
                        iconAlign="center"
                        leftComponent={
                            <View>
                                <Text variant="titleSmall">{'8:32 AM'}</Text>
                                <Text variant="bodySmall">{'11/21/21'}</Text>
                            </View>
                        }
                        rightComponent={<ChannelValue value={'15'} units={'A'} />}
                        chevron
                    />
                </Card.Content>
            </Card>
            <Text variant="titleLarge" style={{ marginVertical: 48 }}>
                RN V5 Components
            </Text>
            <Card style={styles.card}>
                <TextFieldExample />
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Banner</Text>
                    <View style={{ marginTop: 24 }}>
                        <Banner
                            visible={bannerVisible}
                            actions={[
                                {
                                    label: 'Fix it',
                                    onPress: () => setBannerVisible(false),
                                },
                                {
                                    label: 'Learn more',
                                    onPress: () => setBannerVisible(false),
                                },
                            ]}
                            icon={(props) => (
                                <Avatar.Icon {...props} icon="account-circle" color={theme.colors.onPrimary} />
                            )}
                        >
                            There was a problem processing a transaction on your credit card.
                        </Banner>
                        {!bannerVisible && (
                            <Button
                                mode={'contained'}
                                onPress={(): void => {
                                    setBannerVisible(true);
                                }}
                            >
                                Show Banner
                            </Button>
                        )}
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Card</Text>
                    <View style={{ marginTop: 24 }}>
                        <Card>
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            />
                            <Card.Content>
                                <Text variant="titleLarge">Card title</Text>
                                <Text variant="bodyMedium">Card conteent</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Cancel</Button>
                                <Button>Ok</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Data Table</Text>
                    <View style={{ marginTop: 24 }}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title
                                    textStyle={{ color: theme.colors.onSurface, ...theme.fonts.labelLarge }}
                                >
                                    Dessert
                                </DataTable.Title>
                                <DataTable.Title
                                    numeric
                                    textStyle={{ color: theme.colors.onSurface, ...theme.fonts.labelLarge }}
                                >
                                    Calories
                                </DataTable.Title>
                                <DataTable.Title
                                    numeric
                                    textStyle={{ color: theme.colors.onSurface, ...theme.fonts.labelLarge }}
                                >
                                    Fat
                                </DataTable.Title>
                            </DataTable.Header>

                            {items.slice(from, to).map((item) => (
                                <DataTable.Row key={item.key}>
                                    <DataTable.Cell textStyle={{ ...theme.fonts.bodyMedium }}>
                                        {item.name}
                                    </DataTable.Cell>
                                    <DataTable.Cell textStyle={{ ...theme.fonts.bodyMedium }} numeric>
                                        {item.calories}
                                    </DataTable.Cell>
                                    <DataTable.Cell textStyle={{ ...theme.fonts.bodyMedium }} numeric>
                                        {item.fat}
                                    </DataTable.Cell>
                                </DataTable.Row>
                            ))}

                            <DataTable.Pagination
                                page={page}
                                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                                // eslint-disable-next-line @typescript-eslint/no-shadow
                                onPageChange={(page): void => setPage(page)}
                                label={
                                    <Text style={{ ...theme.fonts.bodyMedium }}>{`${from + 1}-${to} of ${
                                        items.length
                                    }`}</Text>
                                }
                                numberOfItemsPerPageList={numberOfItemsPerPageList}
                                numberOfItemsPerPage={itemsPerPage}
                                onItemsPerPageChange={onItemsPerPageChange}
                                showFastPaginationControls
                                selectPageDropdownLabel={
                                    <Text style={{ ...theme.fonts.bodyMedium }}>Rows per page</Text>
                                }
                            />
                        </DataTable>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Dialog</Text>
                    <View style={{ marginTop: 36 }}>
                        <Button mode={'contained'} onPress={showDialog}>
                            Show Dialog
                        </Button>
                        <Portal>
                            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                                <Dialog.Title>Alert</Dialog.Title>
                                <Dialog.Content>
                                    <Text variant="bodyMedium">This is simple dialog</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Helper Text</Text>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Email"
                            value={helperTextInputText}
                            onChangeText={onChangeHelperTextInputText}
                            underlineColor={theme.colors.onSurfaceVariant}
                        />
                        <HelperText type="error" visible={helperTextInputHasErrors()}>
                            Email address is invalid!
                        </HelperText>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Icon Button</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <IconButton icon="fire" size={24} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={40} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={56} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={72} onPress={(): void => console.log('Icon Button Pressed')} />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>List</Text>
                    <View style={{ marginTop: 24 }}>
                        <View>
                            <List.Item
                                title="Item 1"
                                description="Item 1 Description"
                                left={(): JSX.Element => (
                                    <List.Icon icon="folder" color={BLUIColors.neutralVariant[30]} />
                                )}
                            />
                            <List.Item
                                title="Item 2"
                                description="Item 2 Description"
                                left={(): JSX.Element => (
                                    <List.Icon icon="folder" color={BLUIColors.neutralVariant[30]} />
                                )}
                            />
                            <List.Item
                                title="Item 3"
                                description="Item 3 Description"
                                left={(): JSX.Element => (
                                    <List.Icon icon="folder" color={BLUIColors.neutralVariant[30]} />
                                )}
                            />
                        </View>
                        <View>
                            <List.Section title="Accordions">
                                <List.Accordion
                                    title="Accordion 1"
                                    left={(): JSX.Element => (
                                        <List.Icon icon="folder" color={BLUIColors.neutralVariant[30]} />
                                    )}
                                    expanded={accordionOneExpanded}
                                    onPress={(): void => setAccordionOneExpanded(!accordionOneExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                                <List.Accordion
                                    title="Accordion 2"
                                    left={(): JSX.Element => (
                                        <List.Icon icon="folder" color={BLUIColors.neutralVariant[30]} />
                                    )}
                                    expanded={accordionTwoExpanded}
                                    onPress={(): void => setAccordionTwoExpanded(!accordionTwoExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                            </List.Section>
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Menu</Text>
                    <View style={{ marginTop: 24 }}>
                        <Menu
                            visible={menuVisible}
                            onDismiss={(): void => setMenuVisible(false)}
                            anchor={
                                <Button mode={'contained'} onPress={(): void => setMenuVisible(true)}>
                                    Show menu
                                </Button>
                            }
                        >
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 1" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 2" />
                            <Divider />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 3" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 4" />
                        </Menu>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Modal</Text>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Modal
                                visible={visible}
                                onDismiss={hideModal}
                                contentContainerStyle={{
                                    backgroundColor: theme.colors.surface,
                                    padding: 24,
                                    height: 300,
                                    marginHorizontal: 24,
                                }}
                            >
                                <Text>Example Modal. Click outside this area to dismiss.</Text>
                            </Modal>
                        </Portal>
                        <Button mode={'contained'} style={{ marginTop: 30 }} onPress={showModal}>
                            Show Modal
                        </Button>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Surface</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Surface elevation={1} style={[styles.surface]}>
                                <Text>Surface 1</Text>
                            </Surface>
                            <Surface elevation={2} style={[styles.surface]}>
                                <Text>Surface 2</Text>
                            </Surface>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 24,
                            }}
                        >
                            <Surface elevation={3} style={[styles.surface]}>
                                <Text>Surface 3</Text>
                            </Surface>
                            <Surface elevation={4} style={[styles.surface]}>
                                <Text>Surface 4</Text>
                            </Surface>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 24,
                            }}
                        >
                            <Surface elevation={5} style={[styles.surface]}>
                                <Text>Surface 5</Text>
                            </Surface>
                        </View>
                    </View>
                </View>
            </Card>
            {/**
             * BEGIN  WRAPPER COMPONENT SECTION
             *  */}
            <Text variant="titleLarge" style={{ marginVertical: 48 }}>
                {' '}
                (Wrapper) Components
            </Text>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Activity Indicator</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <ActivityIndicator animating={true} size={'small'} />
                        <ActivityIndicator animating={true} size={'large'} />
                        <ActivityIndicator animating={true} size={'small'} />
                        <ActivityIndicator animating={true} size={'large'} />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Appbar</Text>
                    <View style={{ marginTop: 24 }}>
                        <Appbar.Header style={{ marginBottom: 16 }}>
                            <Appbar.BackAction onPress={(): void => console.log('Went Back')} />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" onPress={(): void => console.log('Searching')} />
                            <Appbar.Action icon="dots-vertical" onPress={(): void => console.log('Shown more')} />
                        </Appbar.Header>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Avatar</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Avatar.Icon size={40} icon="account-circle" />
                        <Avatar.Image size={40} source={PublicDomainAlice} />
                        <Avatar.Text size={40} label="PX" />
                        <Avatar.Icon size={40} icon="account-circle" />
                        <Avatar.Image size={40} source={PublicDomainAlice} />
                        <Avatar.Text size={40} label="PX" />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Badge</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Badge
                            size={24}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <Badge
                            size={24}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        >
                            3
                        </Badge>
                        <Badge
                            size={40}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        >
                            8
                        </Badge>
                        <Badge size={24} visible />
                        <Badge size={24} visible>
                            3
                        </Badge>
                        <Badge size={40} visible>
                            8
                        </Badge>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>BottomNavigation</Text>
                    <View style={{ marginTop: 24 }}>
                        <BottomNavigation
                            style={{ marginBottom: 16 }}
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                            labelMaxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <BottomNavigation
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                        />
                    </View>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 10 }}>
                <Text>Contained Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained" onPress={(): void => console.log('Pressed Contained Button')}>
                        Label
                    </Button>
                    <Button icon="plus" mode="contained" onPress={(): void => console.log('Pressed Contained Button')}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained"
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Contained Button')}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="contained"
                        buttonColor={theme.colors.error}
                        textColor={theme.colors.onError}
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained"
                        buttonColor={theme.colors.error}
                        textColor={theme.colors.onError}
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained"
                        buttonColor={theme.colors.error}
                        textColor={theme.colors.onError}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button icon="plus" mode="contained" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained"
                        disabled
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 10 }}>
                <Text>Outlined Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="outlined" onPress={(): void => console.log('Pressed Outlined Button')}>
                        Label
                    </Button>
                    <Button icon="plus" mode="outlined" onPress={(): void => console.log('Pressed Outlined Button')}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="outlined"
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Outlined Button')}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="outlined"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="outlined"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="outlined"
                        textColor={theme.colors.error}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="outlined" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button icon="plus" mode="outlined" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="outlined"
                        disabled
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 10 }}>
                <Text>Text Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="text" onPress={(): void => console.log('Pressed Text Button')}>
                        Label
                    </Button>
                    <Button icon="plus" mode="text" onPress={(): void => console.log('Pressed Text Button')}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="text"
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Text Button')}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="text"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="text"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="text"
                        textColor={theme.colors.error}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="text" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button icon="plus" mode="text" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="text"
                        disabled
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 10 }}>
                <Text>Elevated Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Button
                        mode="elevated"
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="elevated"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        textColor={theme.colors.error}
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        textColor={theme.colors.error}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Elevated Button')}
                        buttonColor={theme.colors.surfaceContainerLow}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="elevated"
                        disabled
                        style={{ marginTop: 24 }}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        disabled
                        style={{ marginTop: 24 }}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="elevated"
                        disabled
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        style={{ marginTop: 24 }}
                        buttonColor={theme.colors.surfaceContainerLow}
                    >
                        Label
                    </Button>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 10 }}>
                <Text>Contained-Tonal Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained-tonal" onPress={(): void => console.log('Pressed Contained-tonal Button')}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained-tonal"
                        onPress={(): void => console.log('Pressed Contained-tonal Button')}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained-tonal"
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Contained-tonal Button')}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        mode="contained-tonal"
                        buttonColor={theme.colors.errorContainer}
                        textColor={theme.colors.onErrorContainer}
                        onPress={(): void => console.log('Pressed Contained-tonal Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained-tonal"
                        buttonColor={theme.colors.errorContainer}
                        textColor={theme.colors.onErrorContainer}
                        onPress={(): void => console.log('Pressed Contained-tonal Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained-tonal"
                        buttonColor={theme.colors.errorContainer}
                        textColor={theme.colors.onErrorContainer}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        onPress={(): void => console.log('Pressed Contained-tonal Button')}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained-tonal" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button icon="plus" mode="contained-tonal" disabled style={{ marginTop: 24 }}>
                        Label
                    </Button>
                    <Button
                        icon="plus"
                        mode="contained-tonal"
                        disabled
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        style={{ marginTop: 24 }}
                    >
                        Label
                    </Button>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Checkbox (Android)</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Unchecked</Text>
                            <Checkbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                            <Checkbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Checked</Text>
                            <Checkbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                            <Checkbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Indeterminate</Text>
                            <Checkbox.Android status={'indeterminate'} />
                            <Checkbox.Android status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Checked</Text>
                            <Checkbox.Android status={'checked'} disabled={true} />
                            <Checkbox.Android status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Unchecked</Text>
                            <Checkbox.Android status={'unchecked'} disabled={true} />
                            <Checkbox.Android status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Checkbox (iOS)</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Unchecked</Text>
                            <Checkbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                            <Checkbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Checked</Text>
                            <Checkbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                            <Checkbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Indeterminate</Text>
                            <Checkbox.IOS status={'indeterminate'} />
                            <Checkbox.IOS status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Checked</Text>
                            <Checkbox.IOS status={'checked'} disabled={true} />
                            <Checkbox.IOS status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Unchecked</Text>
                            <Checkbox.IOS status={'unchecked'} disabled={true} />
                            <Checkbox.IOS status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Divider</Text>
                    <View style={{ marginTop: 24 }}>
                        <Text>Item 1</Text>
                        <Divider />
                        <Text>Item 2</Text>
                        <Divider />
                        <Text>Item 3</Text>
                        <Divider />
                        <Text>Item 1</Text>
                        <Divider />
                        <Text>Item 2</Text>
                        <Divider />
                        <Text>Item 3</Text>
                        <Divider />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Fab</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            size="small"
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            size="small"
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                </View>
                <Portal>
                    <FAB.Group
                        visible
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            { icon: 'plus', onPress: (): void => console.log('Pressed add') },
                            {
                                icon: 'star',
                                label: 'Star',
                                onPress: (): void => console.log('Pressed star'),
                            },
                            {
                                icon: 'email',
                                label: 'Email',
                                onPress: (): void => console.log('Pressed email'),
                            },
                            {
                                icon: 'bell',
                                label: 'Remind',
                                onPress: (): void => console.log('Pressed notifications'),
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={(): void => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Progress Bar</Text>
                    <View style={{ marginTop: 24 }}>
                        <ProgressBar
                            progress={0}
                            // @ts-ignore
                            style={{ backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            progress={0.5}
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            progress={1.0}
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            indeterminate
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            progress={0}
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            progress={0.5}
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            progress={1.0}
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                        <ProgressBar
                            indeterminate
                            // @ts-ignore
                            style={{ marginTop: 24, backgroundColor: theme.colors.surfaceContainerHighest }}
                        />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Radio Button (Android)</Text>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.Android value="third" />
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.Android value="third" />
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Radio Button (iOS)</Text>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.IOS value="third" />
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.IOS value="third" />
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Snackbar</Text>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Snackbar
                                visible={snackbarVisible}
                                onDismiss={(): void => setSnackbarVisible(false)}
                                action={{
                                    label: 'Dismiss',
                                    onPress: (): void => {
                                        setSnackbarVisible(false);
                                    },
                                }}
                            >
                                Hey there! I&apos;m a Snackbar.
                            </Snackbar>
                        </Portal>
                        <Button mode={'contained'} onPress={(): void => setSnackbarVisible(!snackbarVisible)}>
                            {snackbarVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </Button>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Snackbar</Text>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Snackbar
                                visible={snackbarTwoVisible}
                                onDismiss={(): void => setSnackbarTwoVisible(false)}
                                action={{
                                    label: 'Dismiss',
                                    onPress: (): void => {
                                        setSnackbarTwoVisible(false);
                                    },
                                }}
                                style={{ backgroundColor: theme.colors.inverseSurface }}
                            >
                                Im a Snackbar.
                            </Snackbar>
                        </Portal>
                        <Button mode={'contained'} onPress={(): void => setSnackbarTwoVisible(!snackbarTwoVisible)}>
                            {snackbarTwoVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </Button>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Switch</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Enabled - On</Text>
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Enabled - Off</Text>
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Disabled - On</Text>
                            <Switch disabled value={true} />
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Disabled - Off</Text>
                            <Switch disabled value={false} />
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Text Input</Text>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Name"
                            underlineColor={theme.colors.onSurfaceVariant}
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Name Error"
                            underlineColor={theme.colors.onSurfaceVariant}
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email Error"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Name Disabled"
                            value="John Smith"
                            underlineColor={theme.colors.onSurfaceVariant}
                            style={{ marginTop: 24 }}
                            disabled
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email Disabled"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            value="j.smith@email.com"
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            disabled
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <Divider
                            style={{
                                marginTop: 24,
                                marginHorizontal: -24,
                                backgroundColor: 'cyan',
                            }}
                        />
                        <TextInput
                            label="Name"
                            underlineColor={theme.colors.onSurfaceVariant}
                            style={{ marginTop: 24 }}
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                        />
                        <TextInput
                            label="Email"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                        />
                        <TextInput
                            label="Name Error"
                            underlineColor={theme.colors.onSurfaceVariant}
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                        />
                        <TextInput
                            label="Email Error"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                        />
                        <TextInput
                            label="Name Disabled"
                            underlineColor={theme.colors.onSurfaceVariant}
                            value="John Smith"
                            style={{ marginTop: 24 }}
                            disabled
                        />
                        <TextInput
                            label="Email Disabled"
                            mode="outlined"
                            outlineColor={theme.colors.outline}
                            value="j.smith@email.com"
                            style={{ marginTop: 24, backgroundColor: 'transparent' }}
                            disabled
                        />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Toggle Button</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <ToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonValue(value)}
                            value={toggleButtonValue}
                        >
                            <ToggleButton
                                icon="format-align-left"
                                value="left"
                                iconColor={
                                    toggleButtonValue === 'left'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonValue === 'left' ? theme.colors.primaryContainer : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                            <ToggleButton
                                icon="format-align-center"
                                value="center"
                                iconColor={
                                    toggleButtonValue === 'center'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonValue === 'center' ? theme.colors.primaryContainer : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                            <ToggleButton
                                icon="format-align-right"
                                value="right"
                                iconColor={
                                    toggleButtonValue === 'right'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonValue === 'right' ? theme.colors.primaryContainer : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                        </ToggleButton.Row>

                        <ToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonFontValue(value)}
                            value={toggleButtonFontValue}
                            style={{
                                marginTop: 10,
                            }}
                        >
                            <ToggleButton
                                icon="format-bold"
                                value="bold"
                                iconColor={
                                    toggleButtonFontValue === 'bold'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonFontValue === 'bold'
                                            ? theme.colors.primaryContainer
                                            : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                            <ToggleButton
                                icon="format-italic"
                                value="italic"
                                iconColor={
                                    toggleButtonFontValue === 'italic'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonFontValue === 'italic'
                                            ? theme.colors.primaryContainer
                                            : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                            <ToggleButton
                                icon="format-underline"
                                value="underline"
                                iconColor={
                                    toggleButtonFontValue === 'underline'
                                        ? theme.colors.onPrimaryContainer
                                        : theme.colors.onSurface
                                }
                                style={{
                                    backgroundColor:
                                        toggleButtonFontValue === 'underline'
                                            ? theme.colors.primaryContainer
                                            : 'transparent',
                                    borderWidth: 1,
                                }}
                                rippleColor={'transparent'}
                            />
                        </ToggleButton.Row>
                    </View>
                </View>
            </Card>
        </>
    );
};
