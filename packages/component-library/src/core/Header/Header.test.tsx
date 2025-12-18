import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { Header } from './Header';
import { Text, View, Animated } from 'react-native';

describe('Header', () => {
    afterEach(cleanup);

    describe('Basic Rendering', () => {
        it('renders correctly with minimal props', () => {
            const tree = TestRenderer.create(<Header title="Test Title" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with title as string', () => {
            const tree = TestRenderer.create(<Header title="Simple Title" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with title as ReactNode', () => {
            const tree = TestRenderer.create(<Header title={<Text>Custom Title</Text>} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with subtitle', () => {
            const tree = TestRenderer.create(<Header title="Title" subtitle="Subtitle Text" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with subtitle as ReactNode', () => {
            const tree = TestRenderer.create(<Header title="Title" subtitle={<Text>Custom Subtitle</Text>} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with info text', () => {
            const tree = TestRenderer.create(<Header title="Title" info="Additional Info" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with info as ReactNode', () => {
            const tree = TestRenderer.create(<Header title="Title" info={<Text>Custom Info</Text>} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Navigation Icon', () => {
        it('renders with icon prop', () => {
            const tree = TestRenderer.create(<Header title="Title" icon={{ name: 'menu' }} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon and onIconPress', () => {
            const onPress = jest.fn();
            const tree = TestRenderer.create(
                <Header title="Title" icon={{ name: 'menu' }} onIconPress={onPress} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom navigationIconColor', () => {
            const tree = TestRenderer.create(
                <Header title="Title" icon={{ name: 'menu' }} navigationIconColor="#FF0000" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Action Items', () => {
        it('renders with single action item', () => {
            const actionItems = [{ icon: { name: 'search' } }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with multiple action items', () => {
            const actionItems = [{ icon: { name: 'search' } }, { icon: { name: 'more-vert' } }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with action item onPress callback', () => {
            const onPress = jest.fn();
            const actionItems = [{ icon: { name: 'search' }, onPress }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom actionItemColor', () => {
            const actionItems = [{ icon: { name: 'search' } }];
            const tree = TestRenderer.create(
                <Header title="Title" actionItems={actionItems} actionItemColor="#00FF00" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with action component', () => {
            const actionItems = [{ component: <View testID="custom-action" />, width: 50 }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with mixed icon and component action items', () => {
            const actionItems = [{ icon: { name: 'search' } }, { component: <View testID="custom" />, width: 40 }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Color Props', () => {
        it('renders with custom backgroundColor', () => {
            const tree = TestRenderer.create(<Header title="Title" backgroundColor="#0000FF" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom fontColor', () => {
            const tree = TestRenderer.create(<Header title="Title" fontColor="#FFFFFF" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with both backgroundColor and fontColor', () => {
            const tree = TestRenderer.create(
                <Header title="Title" backgroundColor="#0000FF" fontColor="#FFFFFF" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Background Image', () => {
        it('renders with backgroundImage', () => {
            const backgroundImage = { uri: 'https://example.com/image.png' };
            const tree = TestRenderer.create(<Header title="Title" backgroundImage={backgroundImage} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with backgroundImage and backgroundColor', () => {
            const backgroundImage = { uri: 'https://example.com/image.png' };
            const tree = TestRenderer.create(
                <Header title="Title" backgroundImage={backgroundImage} backgroundColor="#FF0000" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Expandable Header', () => {
        it('renders as expandable', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders as expandable with startExpanded', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable startExpanded />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom expandedHeight', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable expandedHeight={250} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom collapsedHeight', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable collapsedHeight={64} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with both custom heights', () => {
            const tree = TestRenderer.create(
                <Header title="Title" expandable expandedHeight={250} collapsedHeight={64} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Searchable Header', () => {
        it('renders with searchableConfig', () => {
            const searchableConfig = { placeholder: 'Search...' };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig autoFocus', () => {
            const searchableConfig = { autoFocus: true };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig autoCorrect', () => {
            const searchableConfig = { autoCorrect: true };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig autoCapitalize', () => {
            const searchableConfig = { autoCapitalize: 'words' as const };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig onChangeText', () => {
            const onChangeText = jest.fn();
            const searchableConfig = { onChangeText };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig custom icon', () => {
            const searchableConfig = { icon: { name: 'find-in-page' } };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all searchableConfig options', () => {
            const searchableConfig = {
                placeholder: 'Search here...',
                autoFocus: true,
                autoCorrect: false,
                autoCapitalize: 'none' as const,
                onChangeText: jest.fn(),
                icon: { name: 'search' },
            };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchableConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Dynamic Variant', () => {
        it('renders with dynamic variant', () => {
            const scrollPosition = new Animated.Value(0);
            const tree = TestRenderer.create(
                <Header title="Title" variant="dynamic" scrollPosition={scrollPosition} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with dynamic variant and updateScrollView', () => {
            const scrollPosition = new Animated.Value(0);
            const updateScrollView = jest.fn();
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    updateScrollView={updateScrollView}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with dynamic variant and custom heights', () => {
            const scrollPosition = new Animated.Value(0);
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    expandedHeight={300}
                    collapsedHeight={70}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Style Props', () => {
        it('renders with custom root style', () => {
            const styles = { root: { borderWidth: 2 } };
            const tree = TestRenderer.create(<Header title="Title" styles={styles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom title style', () => {
            const styles = { title: { fontSize: 24 } };
            const tree = TestRenderer.create(<Header title="Title" styles={styles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom subtitle style', () => {
            const styles = { subtitle: { fontSize: 16 } };
            const tree = TestRenderer.create(<Header title="Title" subtitle="Sub" styles={styles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom info style', () => {
            const styles = { info: { fontSize: 14 } };
            const tree = TestRenderer.create(<Header title="Title" info="Info" styles={styles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with multiple custom styles', () => {
            const styles = {
                root: { borderWidth: 1 },
                title: { fontSize: 20 },
                subtitle: { fontSize: 14 },
                content: { padding: 10 },
            };
            const tree = TestRenderer.create(<Header title="Title" subtitle="Subtitle" styles={styles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom backgroundImage style', () => {
            const backgroundImage = { uri: 'test.png' };
            const styles = { backgroundImage: { opacity: 0.5 } };
            const tree = TestRenderer.create(
                <Header title="Title" backgroundImage={backgroundImage} styles={styles} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom actionPanel style', () => {
            const actionItems = [{ icon: { name: 'search' } }];
            const styles = { actionPanel: { backgroundColor: 'red' } };
            const tree = TestRenderer.create(
                <Header title="Title" actionItems={actionItems} styles={styles} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Theme Override', () => {
        it('renders with theme override', () => {
            const theme = {
                colors: {
                    primaryContainer: '#123456',
                    onPrimary: '#FFFFFF',
                },
            };
            const tree = TestRenderer.create(<Header title="Title" theme={theme} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('ViewProps', () => {
        it('renders with additional ViewProps', () => {
            const tree = TestRenderer.create(<Header title="Title" accessible={true} testID="header-test" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom style prop', () => {
            const tree = TestRenderer.create(<Header title="Title" style={{ marginTop: 20 }} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Complex Scenarios', () => {
        it('renders with all main props combined', () => {
            const actionItems = [{ icon: { name: 'search' } }, { icon: { name: 'more-vert' } }];
            const tree = TestRenderer.create(
                <Header
                    title="Complex Header"
                    subtitle="With subtitle"
                    info="And info"
                    icon={{ name: 'menu' }}
                    onIconPress={jest.fn()}
                    actionItems={actionItems}
                    backgroundColor="#007BC1"
                    fontColor="#FFFFFF"
                    expandable
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders expandable with searchable', () => {
            const searchableConfig = { placeholder: 'Search...' };
            const tree = TestRenderer.create(
                <Header title="Title" expandable searchableConfig={searchableConfig} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders dynamic with searchable', () => {
            const scrollPosition = new Animated.Value(0);
            const searchableConfig = { placeholder: 'Search...' };
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    searchableConfig={searchableConfig}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with background image and all content', () => {
            const backgroundImage = { uri: 'test.png' };
            const actionItems = [{ icon: { name: 'search' } }];
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    subtitle="Subtitle"
                    info="Info"
                    icon={{ name: 'menu' }}
                    actionItems={actionItems}
                    backgroundImage={backgroundImage}
                    backgroundColor="#007BC1"
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders with empty actionItems array', () => {
            const tree = TestRenderer.create(<Header title="Title" actionItems={[]} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with expandable false explicitly', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable={false} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with variant static explicitly', () => {
            const tree = TestRenderer.create(<Header title="Title" variant="static" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with zero collapsedHeight', () => {
            const tree = TestRenderer.create(<Header title="Title" collapsedHeight={0} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with very large expandedHeight', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable expandedHeight={500} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with children', () => {
            const tree = TestRenderer.create(
                <Header title="Title">
                    <View testID="child-content" />
                </Header>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Additional Coverage', () => {
        it('renders static variant with startExpanded', () => {
            const tree = TestRenderer.create(<Header title="Title" variant="static" startExpanded />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders dynamic variant with startExpanded', () => {
            const scrollPosition = new Animated.Value(0);
            const tree = TestRenderer.create(
                <Header title="Title" variant="dynamic" scrollPosition={scrollPosition} startExpanded />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders expandable with all heights specified', () => {
            const tree = TestRenderer.create(
                <Header title="Title" expandable collapsedHeight={60} expandedHeight={220} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with actionItems having onPress handlers', () => {
            const actionItems = [
                { icon: { name: 'search' }, onPress: jest.fn() },
                { icon: { name: 'notifications' }, onPress: jest.fn() },
            ];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with multiple action components', () => {
            const actionItems = [
                { component: <View testID="action1" />, width: 40 },
                { component: <View testID="action2" />, width: 50 },
            ];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with action component without width specified', () => {
            const actionItems = [{ component: <View testID="action" /> }];
            const tree = TestRenderer.create(<Header title="Title" actionItems={actionItems} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders expandable without startExpanded', () => {
            const tree = TestRenderer.create(<Header title="Title" expandable startExpanded={false} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all searchableConfig props', () => {
            const searchConfig = {
                placeholder: 'Find something...',
                autoFocus: false,
                autoCorrect: true,
                autoCapitalize: 'sentences' as const,
                onChangeText: jest.fn(),
                icon: { name: 'find-in-page' },
            };
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={searchConfig} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with searchableConfig minimal', () => {
            const tree = TestRenderer.create(<Header title="Title" searchableConfig={{}} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders dynamic with scrollPosition at different values', () => {
            const scrollPosition = new Animated.Value(50);
            const tree = TestRenderer.create(
                <Header title="Title" variant="dynamic" scrollPosition={scrollPosition} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon and no onIconPress', () => {
            const tree = TestRenderer.create(<Header title="Title" icon={{ name: 'menu' }} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with different icon sources', () => {
            const tree = TestRenderer.create(
                <Header title="Title" icon={{ family: 'material', name: 'menu' }} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all color props', () => {
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    backgroundColor="#123456"
                    fontColor="#ABCDEF"
                    navigationIconColor="#FF0000"
                    actionItemColor="#00FF00"
                    actionItems={[{ icon: { name: 'search' } }]}
                    icon={{ name: 'menu' }}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with subtitle and info together', () => {
            const tree = TestRenderer.create(
                <Header title="Title" subtitle="Subtitle text" info="Info text" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with complex ReactNode content', () => {
            const tree = TestRenderer.create(
                <Header
                    title={
                        <View>
                            <Text>Complex Title</Text>
                        </View>
                    }
                    subtitle={
                        <View>
                            <Text>Complex Subtitle</Text>
                        </View>
                    }
                    info={
                        <View>
                            <Text>Complex Info</Text>
                        </View>
                    }
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with updateScrollView callback', () => {
            const updateScrollView = jest.fn();
            const tree = TestRenderer.create(
                <Header title="Title" variant="dynamic" updateScrollView={updateScrollView} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders dynamic with custom heights and scrollPosition', () => {
            const scrollPosition = new Animated.Value(100);
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    expandedHeight={300}
                    collapsedHeight={70}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with backgroundImage and backgroundColor together', () => {
            const tree = TestRenderer.create(
                <Header title="Title" backgroundImage={{ uri: 'image.png' }} backgroundColor="rgba(0, 0, 0, 0.5)" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all style props', () => {
            const styles = {
                root: { borderWidth: 1 },
                backgroundImage: { opacity: 0.7 },
                component: { margin: 5 },
                content: { paddingVertical: 10 },
                icon: { marginLeft: 10 },
                textContent: { flex: 2 },
                title: { fontSize: 22 },
                subtitle: { fontSize: 16 },
                info: { fontSize: 12 },
                search: { fontSize: 18 },
                actionPanel: { paddingRight: 10 },
                actionItem: { marginHorizontal: 5 },
            };
            const tree = TestRenderer.create(
                <Header title="Title" subtitle="Sub" info="Info" styles={styles} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders expandable with searchableConfig', () => {
            const tree = TestRenderer.create(
                <Header title="Title" expandable searchableConfig={{ placeholder: 'Search' }} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders dynamic expandable with searchableConfig', () => {
            const scrollPosition = new Animated.Value(0);
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    searchableConfig={{ placeholder: 'Search' }}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with accessible props', () => {
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    accessible
                    accessibilityLabel="Main Header"
                    accessibilityHint="Double tap to expand"
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with testID', () => {
            const tree = TestRenderer.create(<Header title="Title" testID="main-header" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with theme having custom colors', () => {
            const customTheme = {
                colors: {
                    primaryContainer: '#FF5722',
                    onPrimaryContainer: '#FFFFFF',
                    surface: '#FAFAFA',
                    onSurface: '#212121',
                    onSurfaceVariant: '#757575',
                },
            };
            const tree = TestRenderer.create(<Header title="Title" theme={customTheme} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders expandable with icon and actions', () => {
            const tree = TestRenderer.create(
                <Header
                    title="Title"
                    expandable
                    icon={{ name: 'menu' }}
                    onIconPress={jest.fn()}
                    actionItems={[{ icon: { name: 'search' } }, { icon: { name: 'more-vert' } }]}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with everything combined', () => {
            const scrollPosition = new Animated.Value(0);
            const actionItems = [
                { icon: { name: 'search' }, onPress: jest.fn() },
                { component: <View testID="custom" />, width: 40 },
            ];
            const searchConfig = { placeholder: 'Search here' };
            const styles = {
                title: { fontSize: 20 },
                subtitle: { fontSize: 14 },
            };
            const tree = TestRenderer.create(
                <Header
                    title="Complete Header"
                    subtitle="With subtitle"
                    info="And info"
                    icon={{ name: 'menu' }}
                    onIconPress={jest.fn()}
                    actionItems={actionItems}
                    backgroundColor="#007BC1"
                    fontColor="#FFFFFF"
                    navigationIconColor="#FFFFFF"
                    actionItemColor="#FFFFFF"
                    backgroundImage={{ uri: 'bg.png' }}
                    variant="dynamic"
                    scrollPosition={scrollPosition}
                    expandedHeight={250}
                    collapsedHeight={64}
                    searchableConfig={searchConfig}
                    styles={styles}
                    updateScrollView={jest.fn()}
                >
                    <View testID="child" />
                </Header>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
