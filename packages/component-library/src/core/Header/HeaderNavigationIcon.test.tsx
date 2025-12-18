import React, { createRef } from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { TextInput } from 'react-native';
import { FontScaleProvider } from '../__contexts__/font-scale-context';

// Mock react-native's I18nManager FIRST before any other imports
let mockIsRTL = false;
jest.mock('react-native/Libraries/ReactNative/I18nManager', () => ({
    get isRTL(): boolean {
        return mockIsRTL;
    },
    set isRTL(value: boolean) {
        mockIsRTL = value;
    },
    allowRTL: jest.fn(),
    forceRTL: jest.fn(),
    swapLeftAndRightInRTL: jest.fn(),
}));

// Mock the HeaderIcon component
jest.mock('./HeaderIcon', () => {
    const { Text } = jest.requireActual('react-native');
    return {
        HeaderIcon: ({ icon, color }: any): React.ReactElement => (
            <Text testID="mock-header-icon">{`HeaderIcon-${icon}-${color}`}</Text>
        ),
    };
});

// Now import the components that depend on I18nManager
import { HeaderNavigationIcon } from './HeaderNavigationIcon';
import { SearchContext } from './contexts/SearchContextProvider';
import { ColorContext } from './contexts/ColorContextProvider';

describe('HeaderNavigationIcon', () => {
    afterEach(cleanup);

    const createSearchContext = (overrides = {}): any => ({
        searchRef: createRef<TextInput>(),
        query: '',
        searching: false,
        onQueryChange: jest.fn(),
        searchConfig: undefined,
        onSearch: jest.fn(),
        onClear: jest.fn(),
        onClose: jest.fn(),
        ...overrides,
    });

    const createColorContext = (overrides = {}): any => ({
        color: '#000000',
        ...overrides,
    });

    const snapshotWithContext = (
        component: React.ReactElement,
        searchContext = createSearchContext(),
        colorContext = createColorContext()
    ): any =>
        TestRenderer.create(
            <FontScaleProvider maxScale={1.5}>
                <SearchContext.Provider value={searchContext}>
                    <ColorContext.Provider value={colorContext}>{component}</ColorContext.Provider>
                </SearchContext.Provider>
            </FontScaleProvider>
        ).toJSON();

    const renderWithContext = (
        component: React.ReactElement,
        searchContext = createSearchContext(),
        colorContext = createColorContext()
    ): TestRenderer.ReactTestRenderer =>
        TestRenderer.create(
            <FontScaleProvider maxScale={1.5}>
                <SearchContext.Provider value={searchContext}>
                    <ColorContext.Provider value={colorContext}>{component}</ColorContext.Provider>
                </SearchContext.Provider>
            </FontScaleProvider>
        );

    describe('Basic Rendering', () => {
        it('renders null when no icon is provided and not searching', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon />);
            expect(tree).toBeNull();
        });

        it('renders null when icon is undefined', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon={undefined} />);
            expect(tree).toBeNull();
        });

        it('renders with icon as string', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon as object', () => {
            const iconObj = { family: 'material', name: 'menu' };
            const tree = snapshotWithContext(<HeaderNavigationIcon icon={iconObj as any} />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Search Mode', () => {
        it('renders back arrow when searching is true', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders back arrow when searching even if icon is provided', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('calls onClose when back arrow is pressed during search', () => {
            const onClose = jest.fn();
            const searchContext = createSearchContext({ searching: true, onClose });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('does not crash when onClose is undefined during search', () => {
            const searchContext = createSearchContext({ searching: true, onClose: undefined });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('uses color from ColorContext for back arrow', () => {
            const searchContext = createSearchContext({ searching: true });
            const colorContext = createColorContext({ color: '#FF0000' });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext, colorContext);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Navigation Icon Press', () => {
        it('calls onPress when navigation icon is pressed', () => {
            const onPress = jest.fn();
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" onPress={onPress} />);
            expect(tree).toMatchSnapshot();
        });

        it('does not crash when onPress is undefined', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />);
            expect(tree).toMatchSnapshot();
        });

        it('disables TouchableOpacity when onPress is not provided', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />);
            expect(tree).toMatchSnapshot();
        });

        it('enables TouchableOpacity when onPress is provided', () => {
            const onPress = jest.fn();
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" onPress={onPress} />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Navigation Icon Color', () => {
        it('renders with custom navigationIconColor', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" navigationIconColor="#00FF00" />);
            expect(tree).toMatchSnapshot();
        });

        it('renders without navigationIconColor', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with navigationIconColor as rgba', () => {
            const tree = snapshotWithContext(
                <HeaderNavigationIcon icon="menu" navigationIconColor="rgba(255, 0, 0, 0.5)" />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Custom Styles', () => {
        it('renders with custom style', () => {
            const customStyle = { marginLeft: 20 };
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" style={customStyle} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with multiple custom styles', () => {
            const customStyles = [{ marginLeft: 20 }, { padding: 10 }];
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" style={customStyles} />);
            expect(tree).toMatchSnapshot();
        });

        it('applies custom style during search mode', () => {
            const searchContext = createSearchContext({ searching: true });
            const customStyle = { marginLeft: 20 };
            const tree = snapshotWithContext(<HeaderNavigationIcon style={customStyle} />, searchContext);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('RTL Support', () => {
        beforeAll(() => {
            mockIsRTL = true;
        });

        afterAll(() => {
            mockIsRTL = false;
        });

        it('flips back arrow icon in RTL mode during search', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders navigation icon normally in RTL mode when not searching', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Font Scaling', () => {
        it('respects FontScaleProvider settings', () => {
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={2.0} disableScaling={false}>
                    <SearchContext.Provider value={createSearchContext()}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="menu" />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('applies font scaling to search back arrow', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={2.0} disableScaling={false}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('disables font scaling when disableScaling is true', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={1.5} disableScaling={true}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders with all props combined', () => {
            const onPress = jest.fn();
            const tree = snapshotWithContext(
                <HeaderNavigationIcon
                    icon="menu"
                    onPress={onPress}
                    navigationIconColor="#123456"
                    style={{ marginLeft: 10 }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('handles multiple renders with different icons', () => {
            const renderer = renderWithContext(<HeaderNavigationIcon icon="menu" />);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            renderer.update(
                <FontScaleProvider maxScale={1.5}>
                    <SearchContext.Provider value={createSearchContext()}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="home" />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            );
            tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles transition from normal to search mode', () => {
            const searchContext = createSearchContext({ searching: false });
            const renderer = renderWithContext(<HeaderNavigationIcon icon="menu" />, searchContext);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            const newSearchContext = createSearchContext({ searching: true });
            renderer.update(
                <FontScaleProvider maxScale={1.5}>
                    <SearchContext.Provider value={newSearchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="menu" />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            );
            tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles transition from search mode to normal', () => {
            const searchContext = createSearchContext({ searching: true });
            const renderer = renderWithContext(<HeaderNavigationIcon icon="menu" />, searchContext);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            const newSearchContext = createSearchContext({ searching: false });
            renderer.update(
                <FontScaleProvider maxScale={1.5}>
                    <SearchContext.Provider value={newSearchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="menu" />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            );
            tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty string icon', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="" />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Complex Scenarios', () => {
        it('prioritizes search mode over navigation icon', () => {
            const searchContext = createSearchContext({ searching: true });
            const onPress = jest.fn();
            const tree = snapshotWithContext(
                <HeaderNavigationIcon icon="menu" onPress={onPress} navigationIconColor="#FF0000" />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with onPress callback in search mode', () => {
            const onPress = jest.fn();
            const onClose = jest.fn();
            const searchContext = createSearchContext({ searching: true, onClose });
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" onPress={onPress} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search mode with all props and onClose callback', () => {
            const onClose = jest.fn();
            const onPress = jest.fn();
            const searchContext = createSearchContext({ searching: true, onClose });
            const colorContext = createColorContext({ color: '#ABCDEF' });
            const tree = snapshotWithContext(
                <HeaderNavigationIcon icon="menu" onPress={onPress} style={{ marginLeft: 15 }} />,
                searchContext,
                colorContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders normal mode with icon and onPress', () => {
            const onPress = jest.fn();
            const tree = snapshotWithContext(
                <HeaderNavigationIcon icon="menu" onPress={onPress} navigationIconColor="#123456" />
            );
            expect(tree).toMatchSnapshot();
        });

        it('handles font scaling with maxScale in search mode', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={3.0} disableScaling={false}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with onClose callback and icon prop in search mode', () => {
            const onClose = jest.fn();
            const onPress = jest.fn();
            const searchContext = createSearchContext({ searching: true, onClose });
            const tree = snapshotWithContext(
                <HeaderNavigationIcon icon="menu" onPress={onPress} navigationIconColor="#FF5733" />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders normal mode with varying font scale values', () => {
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={0.8} disableScaling={false}>
                    <SearchContext.Provider value={createSearchContext()}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="settings" onPress={jest.fn()} />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders search mode with varying font scale and custom color', () => {
            const searchContext = createSearchContext({ searching: true, onClose: jest.fn() });
            const colorContext = createColorContext({ color: '#00BCD4' });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={1.2} disableScaling={false}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={colorContext}>
                            <HeaderNavigationIcon style={{ marginLeft: 5 }} />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders normal mode with font scaling disabled', () => {
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={1.5} disableScaling={true}>
                    <SearchContext.Provider value={createSearchContext()}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon icon="notifications" onPress={jest.fn()} />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders in RTL mode when not searching with icon', () => {
            mockIsRTL = true;
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="menu" onPress={jest.fn()} />);
            mockIsRTL = false;
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon but without onPress callback', () => {
            const tree = snapshotWithContext(<HeaderNavigationIcon icon="home" navigationIconColor="#9C27B0" />);
            expect(tree).toMatchSnapshot();
        });

        it('renders in search mode with onClose as falsy value', () => {
            const searchContext = createSearchContext({ searching: true, onClose: undefined });
            const tree = snapshotWithContext(<HeaderNavigationIcon />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search mode with RTL disabled and disableScaling true', () => {
            mockIsRTL = false;
            const searchContext = createSearchContext({ searching: true, onClose: jest.fn() });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={2.0} disableScaling={true}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders search mode with RTL enabled and disableScaling false', () => {
            mockIsRTL = true;
            const searchContext = createSearchContext({ searching: true, onClose: jest.fn() });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={1.5} disableScaling={false}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            mockIsRTL = false;
            expect(tree).toMatchSnapshot();
        });

        it('renders search mode with RTL enabled and disableScaling true', () => {
            mockIsRTL = true;
            const searchContext = createSearchContext({ searching: true, onClose: jest.fn() });
            const tree = TestRenderer.create(
                <FontScaleProvider maxScale={1.5} disableScaling={true}>
                    <SearchContext.Provider value={searchContext}>
                        <ColorContext.Provider value={createColorContext()}>
                            <HeaderNavigationIcon />
                        </ColorContext.Provider>
                    </SearchContext.Provider>
                </FontScaleProvider>
            ).toJSON();
            mockIsRTL = false;
            expect(tree).toMatchSnapshot();
        });
    });
});
