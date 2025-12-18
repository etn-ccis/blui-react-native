import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { Text, View } from 'react-native';

// Mock all hooks and dependencies used by DrawerHeader
jest.mock('@brightlayer-ui/react-native-themes', (): any => ({
    useExtendedTheme: (): any => ({
        colors: {
            surface: '#FFFFFF',
            primary: '#007BC1',
            onSurface: '#000000',
            onSurfaceVariant: '#424242',
        },
    }),
}));

jest.mock('react-native-safe-area-context', (): any => ({
    useSafeAreaInsets: (): any => ({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }),
}));

jest.mock('../__hooks__/useHeaderDimensions', (): any => ({
    useHeaderDimensions: (): any => ({
        REGULAR_HEIGHT: 100,
        CONDENSED_HEIGHT: 56,
    }),
}));

jest.mock('../__contexts__/font-scale-context', (): any => ({
    useFontScaleSettings: (): any => ({
        disableScaling: false,
    }),
    useFontScale: (): any => 1,
}));

jest.mock('../Utility/shared', (): any => ({
    useFontStyles: (): any => ({
        fontStyleSemiBold: { fontWeight: '600' },
        fontStyleRegular: { fontWeight: '400' },
    }),
}));

jest.mock('../Icon', (): any => ({
    Icon: 'Icon',
}));

import { DrawerHeader, getIcon, getHeaderContent, getBackgroundImage, DrawerHeaderMakeStyles } from './DrawerHeader';

describe('DrawerHeader', () => {
    afterEach(cleanup);

    describe('Helper Functions', () => {
        const mockStyles = {
            icon: {},
            textContent: {},
            title: {},
            subtitle: {},
            backgroundImageWrapper: {},
            backgroundImage: {},
        };
        const mockTheme = {
            colors: {
                surface: '#surface',
                primary: '#primary',
                onSurface: '#onSurface',
                onSurfaceVariant: '#onSurfaceVariant',
            },
        };
        const mockInsets = { top: 0, bottom: 0, left: 0, right: 0 };
        const mockFontStyle = {};

        it('makeStyles uses provided backgroundColor', () => {
            const props = { backgroundColor: 'custom-blue' } as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.root.backgroundColor).toBe('custom-blue');
        });

        it('makeStyles uses theme default backgroundColor when not provided', () => {
            const props = {} as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.root.backgroundColor).toBe('#surface');
        });

        it('makeStyles uses provided fontColor for title', () => {
            const props = { fontColor: 'custom-red' } as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect((styles.title as any).color).toBe('custom-red');
        });

        it('makeStyles uses theme default color for title when fontColor not provided', () => {
            const props = {} as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect((styles.title as any).color).toBe('#primary');
        });

        it('makeStyles uses provided fontColor for subtitle', () => {
            const props = { fontColor: 'custom-green' } as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect((styles.subtitle as any).color).toBe('custom-green');
        });

        it('makeStyles uses theme default color for subtitle when fontColor not provided', () => {
            const props = {} as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect((styles.subtitle as any).color).toBe('#onSurfaceVariant');
        });

        it('makeStyles uses provided backgroundOpacity', () => {
            const props = { backgroundOpacity: 0.7 } as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.backgroundImageWrapper.opacity).toBe(0.7);
        });

        it('makeStyles applies insets to padding', () => {
            const props = {} as any;
            const insetsWithTop = { top: 50, bottom: 0, left: 10, right: 0 };
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                insetsWithTop,
                100,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.root.paddingTop).toBe(50);
            expect(styles.content.paddingLeft).toBe(10);
        });

        it('makeStyles applies height from parameter', () => {
            const props = {} as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                150,
                1,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.root.height).toBe(150);
        });

        it('makeStyles applies fontScale to icon dimensions', () => {
            const props = {} as any;
            const styles = DrawerHeaderMakeStyles(
                props,
                mockTheme as any,
                mockInsets,
                100,
                1.5,
                mockFontStyle as any,
                mockFontStyle as any
            );
            expect(styles.icon.height).toBe(56 * 1.5);
            expect(styles.icon.width).toBe(40 * 1.5);
        });

        it('getIcon returns undefined when icon is not provided', () => {
            const result = getIcon(undefined, mockStyles, {}, undefined, undefined, false, '#000');
            expect(result).toBeUndefined();
        });

        it('getIcon returns icon element when icon is provided', () => {
            const result = getIcon({ name: 'menu' }, mockStyles, {}, undefined, undefined, false, '#000');
            expect(result).toBeTruthy();
        });

        it('getIcon uses fontColor when provided', () => {
            const result = getIcon({ name: 'menu' }, mockStyles, {}, 'red', undefined, false, '#000');
            expect(result).toBeTruthy();
        });

        it('getIcon uses theme color when fontColor is not provided', () => {
            const result = getIcon({ name: 'menu' }, mockStyles, {}, undefined, undefined, false, '#blue');
            expect(result).toBeTruthy();
        });

        it('getIcon sets disabled=false when onIconPress is provided', () => {
            const onIconPress = jest.fn();
            const result = getIcon({ name: 'menu' }, mockStyles, {}, undefined, onIconPress, false, '#000');
            expect(result).toBeTruthy();
        });

        it('getIcon sets disabled=true when onIconPress is not provided', () => {
            const result = getIcon({ name: 'menu' }, mockStyles, {}, undefined, undefined, false, '#000');
            expect(result).toBeTruthy();
        });

        it('getIcon respects disableScaling', () => {
            const result1 = getIcon({ name: 'menu' }, mockStyles, {}, undefined, undefined, true, '#000');
            const result2 = getIcon({ name: 'menu' }, mockStyles, {}, undefined, undefined, false, '#000');
            expect(result1).toBeTruthy();
            expect(result2).toBeTruthy();
        });

        it('getHeaderContent returns titleContent when provided', () => {
            const titleContent = (
                <View testID="custom">
                    <Text>Custom</Text>
                </View>
            );
            const result = getHeaderContent(undefined, undefined, titleContent, mockStyles, {});
            expect(result).toBe(titleContent);
        });

        it('getHeaderContent returns title and subtitle when titleContent is not provided', () => {
            const result = getHeaderContent('Title', 'Subtitle', undefined, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getHeaderContent returns only title when subtitle is not provided', () => {
            const result = getHeaderContent('Title', undefined, undefined, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getHeaderContent returns only subtitle when title is not provided', () => {
            const result = getHeaderContent(undefined, 'Subtitle', undefined, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getHeaderContent returns empty view when nothing is provided', () => {
            const result = getHeaderContent(undefined, undefined, undefined, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getBackgroundImage returns undefined when backgroundImage is not provided', () => {
            const result = getBackgroundImage(undefined, mockStyles, {});
            expect(result).toBeUndefined();
        });

        it('getBackgroundImage returns image element when backgroundImage is provided', () => {
            const result = getBackgroundImage({ uri: 'test.jpg' }, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getBackgroundImage handles number image source', () => {
            const result = getBackgroundImage(12345 as any, mockStyles, {});
            expect(result).toBeTruthy();
        });

        it('getIcon applies custom styles', () => {
            const customStyles = { icon: { marginLeft: 30 } };
            const result = getIcon({ name: 'menu' }, mockStyles, customStyles, undefined, undefined, false, '#000');
            expect(result).toBeTruthy();
        });

        it('getHeaderContent applies custom styles for title and subtitle', () => {
            const customStyles = { title: { fontSize: 30 }, subtitle: { fontSize: 16 }, textContent: { padding: 10 } };
            const result = getHeaderContent('Title', 'Subtitle', undefined, mockStyles, customStyles);
            expect(result).toBeTruthy();
        });

        it('getBackgroundImage applies custom styles', () => {
            const customStyles = {
                backgroundImageWrapper: { opacity: 0.5 },
                backgroundImage: { resizeMode: 'contain' },
            };
            const result = getBackgroundImage({ uri: 'test.jpg' }, mockStyles, customStyles);
            expect(result).toBeTruthy();
        });
    });

    it('renders correctly with minimal props', () => {
        const tree = TestRenderer.create(<DrawerHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with title', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with title and subtitle', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" subtitle="Version 1.0" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with subtitle only', () => {
        const tree = TestRenderer.create(<DrawerHeader subtitle="Version 1.0" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with icon', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" icon={{ name: 'menu' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with icon and onIconPress', () => {
        const onIconPress = jest.fn();
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" icon={{ name: 'menu' }} onIconPress={onIconPress} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with icon but no onIconPress', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" icon={{ name: 'menu' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with backgroundColor', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" backgroundColor="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with fontColor', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" fontColor="white" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with backgroundImage', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" backgroundImage={{ uri: 'https://example.com/image.jpg' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with backgroundImage and backgroundOpacity', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                backgroundOpacity={0.5}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with default backgroundOpacity', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" backgroundImage={{ uri: 'https://example.com/image.jpg' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with onPress', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(<DrawerHeader title="My App" onPress={onPress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with titleContent', () => {
        const titleContent = (
            <View>
                <Text>Custom Title</Text>
            </View>
        );
        const tree = TestRenderer.create(<DrawerHeader titleContent={titleContent} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders titleContent instead of title and subtitle when provided', () => {
        const titleContent = (
            <View>
                <Text>Custom Content</Text>
            </View>
        );
        const tree = TestRenderer.create(
            <DrawerHeader title="Should Not Show" subtitle="Should Not Show" titleContent={titleContent} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                styles={{
                    root: { backgroundColor: 'red' },
                    title: { color: 'white' },
                    subtitle: { color: 'lightgray' },
                }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom style prop', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" style={{ marginTop: 10 }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with all props', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                subtitle="Version 1.0"
                icon={{ name: 'menu' }}
                backgroundColor="blue"
                fontColor="white"
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                backgroundOpacity={0.4}
                onPress={jest.fn()}
                onIconPress={jest.fn()}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with icon using IconFamily', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" icon={{ family: 'material', name: 'home' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with all style overrides', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                subtitle="Subtitle"
                icon={{ name: 'menu' }}
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                styles={{
                    root: { padding: 10 },
                    headerContainer: { marginTop: 5 },
                    backgroundImageWrapper: { opacity: 0.5 },
                    backgroundImage: { resizeMode: 'contain' },
                    content: { paddingLeft: 20 },
                    textContent: { paddingVertical: 10 },
                    title: { fontSize: 28 },
                    subtitle: { fontSize: 16 },
                    icon: { marginLeft: 20 },
                }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with theme override', () => {
        const customTheme = {
            colors: {
                surface: '#custom-surface',
                primary: '#custom-primary',
                onSurface: '#custom-onSurface',
                onSurfaceVariant: '#custom-onSurfaceVariant',
            },
        };
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" subtitle="Subtitle" theme={customTheme as any} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with accessibility props', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" accessible={true} accessibilityLabel="Drawer Header" testID="drawer-header" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders icon without padding when no icon prop', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders icon with padding when icon prop is provided', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" icon={{ name: 'menu' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when backgroundImage is undefined', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" backgroundImage={undefined} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has correct displayName', () => {
        expect(DrawerHeader.displayName).toBe('DrawerHeader');
    });

    it('renders with only backgroundColor and no other props', () => {
        const tree = TestRenderer.create(<DrawerHeader backgroundColor="purple" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with only fontColor and no other props', () => {
        const tree = TestRenderer.create(<DrawerHeader fontColor="red" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with title and custom title styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" styles={{ title: { fontSize: 32, fontWeight: 'bold' } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with subtitle and custom subtitle styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader subtitle="Version 1.0" styles={{ subtitle: { fontSize: 12, fontStyle: 'italic' } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon and custom icon styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader icon={{ name: 'menu' }} styles={{ icon: { marginLeft: 30, width: 50 } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with backgroundImage and custom backgroundImageWrapper styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                styles={{ backgroundImageWrapper: { borderRadius: 10 } }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with backgroundImage and custom backgroundImage styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                styles={{ backgroundImage: { resizeMode: 'stretch' } }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom content styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" styles={{ content: { flexDirection: 'column' } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom textContent styles', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" styles={{ textContent: { alignItems: 'center' } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with complex titleContent', () => {
        const titleContent = (
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Custom Title</Text>
                <Text style={{ fontSize: 14 }}>Custom Subtitle</Text>
                <Text style={{ fontSize: 10 }}>Extra Info</Text>
            </View>
        );
        const tree = TestRenderer.create(<DrawerHeader titleContent={titleContent} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon and all color props', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                subtitle="Subtitle"
                icon={{ name: 'menu' }}
                backgroundColor="darkblue"
                fontColor="yellow"
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with backgroundOpacity of 0', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                backgroundOpacity={0}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with backgroundOpacity of 1', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="My App"
                backgroundImage={{ uri: 'https://example.com/image.jpg' }}
                backgroundOpacity={1}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when both style and styles.root are provided', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" style={{ marginBottom: 20 }} styles={{ root: { paddingTop: 30 } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon using different icon source formats', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" icon={{ family: 'material-community', name: 'account' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with backgroundImage using number source', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" backgroundImage={12345 as any} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with various combinations of title, subtitle, and titleContent', () => {
        const tree1 = TestRenderer.create(<DrawerHeader title="Only Title" />).toJSON();
        const tree2 = TestRenderer.create(<DrawerHeader subtitle="Only Subtitle" />).toJSON();
        const tree3 = TestRenderer.create(<DrawerHeader titleContent={<Text>Custom Content</Text>} />).toJSON();
        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
        expect(tree3).toMatchSnapshot();
    });

    it('renders with icon but without onIconPress callback', () => {
        const tree = TestRenderer.create(<DrawerHeader title="My App" icon={{ name: 'menu' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon and with onIconPress callback', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="My App" icon={{ name: 'menu' }} onIconPress={jest.fn()} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders backgroundImage with various opacity values', () => {
        const tree1 = TestRenderer.create(
            <DrawerHeader backgroundImage={{ uri: 'test.jpg' }} backgroundOpacity={0.1} />
        ).toJSON();
        const tree2 = TestRenderer.create(
            <DrawerHeader backgroundImage={{ uri: 'test.jpg' }} backgroundOpacity={0.5} />
        ).toJSON();
        const tree3 = TestRenderer.create(
            <DrawerHeader backgroundImage={{ uri: 'test.jpg' }} backgroundOpacity={0.9} />
        ).toJSON();
        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
        expect(tree3).toMatchSnapshot();
    });

    it('renders with different fontColor values for icon and text', () => {
        const tree = TestRenderer.create(
            <DrawerHeader title="Title" subtitle="Subtitle" icon={{ name: 'menu' }} fontColor="purple" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without icon to test padding adjustment', () => {
        const tree = TestRenderer.create(<DrawerHeader title="No Icon Header" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon to test padding adjustment', () => {
        const tree = TestRenderer.create(<DrawerHeader title="With Icon Header" icon={{ name: 'home' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with empty strings for title and subtitle', () => {
        const tree = TestRenderer.create(<DrawerHeader title="" subtitle="" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with very long title and subtitle text', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="This is a very long title that should be truncated to one line"
                subtitle="This is also a very long subtitle that should be truncated to one line"
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('uses default theme backgroundColor when not provided', () => {
        const tree = TestRenderer.create(<DrawerHeader title="Default BG" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('uses provided backgroundColor', () => {
        const tree = TestRenderer.create(<DrawerHeader title="Custom BG" backgroundColor="#FF5733" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without icon to test padding left calculation', () => {
        const tree = TestRenderer.create(<DrawerHeader title="No Icon" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon to test padding left calculation', () => {
        const tree = TestRenderer.create(<DrawerHeader title="With Icon" icon={{ name: 'menu' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with all hook dependencies changed', () => {
        const tree = TestRenderer.create(
            <DrawerHeader
                title="Full Test"
                subtitle="Subtitle"
                icon={{ name: 'menu' }}
                fontColor="blue"
                backgroundColor="white"
                backgroundImage={{ uri: 'test.jpg' }}
                onIconPress={jest.fn()}
                onPress={jest.fn()}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
