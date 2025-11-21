import React, { createRef, JSX } from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { HeaderContent } from './HeaderContent';
import { SearchContext } from './contexts/SearchContextProvider';
import { ColorContext } from './contexts/ColorContextProvider';
import { HeaderHeightContext } from './contexts/HeaderHeightContextProvider';
import { Animated, TextInput, Text } from 'react-native';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';

// Mock the useHeaderDimensions hook
jest.mock('../__hooks__/useHeaderDimensions', () => ({
    useHeaderDimensions: jest.fn(() => ({
        REGULAR_HEIGHT: 56,
        EXTENDED_HEIGHT: 200,
        COLLAPSED_HEIGHT: 0,
    })),
}));

// Mock the font scale context
jest.mock('../__contexts__/font-scale-context', () => ({
    useFontScale: jest.fn(() => 1),
    useFontScaleSettings: jest.fn(() => ({
        maxScale: 1.5,
        disableScaling: false,
    })),
}));

// Mock the useFontStyles hook
jest.mock('../Utility/shared', () => ({
    useFontStyles: jest.fn(() => ({
        fontStyleRegular: { fontFamily: 'OpenSans-Regular', fontWeight: '400' },
        fontStyleSemiBold: { fontFamily: 'OpenSans-SemiBold', fontWeight: '600' },
    })),
}));

const theme = BLUIThemes.blue as unknown as ExtendedTheme;

describe('HeaderContent', () => {
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
        color: '#424e54',
        ...overrides,
    });

    const createHeaderHeightContext = (headerHeight = new Animated.Value(200)): any => ({
        headerHeight,
    });

    const renderWithContext = (
        component: React.ReactElement,
        searchContext = createSearchContext(),
        colorContext = createColorContext(),
        headerHeightContext = createHeaderHeightContext()
    ): any =>
        TestRenderer.create(
            <SearchContext.Provider value={searchContext}>
                <ColorContext.Provider value={colorContext}>
                    <HeaderHeightContext.Provider value={headerHeightContext}>{component}</HeaderHeightContext.Provider>
                </ColorContext.Provider>
            </SearchContext.Provider>
        ).toJSON();

    describe('HeaderContent - Basic Rendering', () => {
        it('renders with title only', () => {
            const tree = renderWithContext(<HeaderContent title="Test Title" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with title as string', () => {
            const tree = renderWithContext(<HeaderContent title="My Title" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with title as custom component', () => {
            const CustomTitle = (): JSX.Element => <Text>Custom Title Component</Text>;
            const tree = renderWithContext(<HeaderContent title={<CustomTitle />} theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with title and subtitle', () => {
            const tree = renderWithContext(<HeaderContent title="Test Title" subtitle="Test Subtitle" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with title, subtitle, and info', () => {
            const tree = renderWithContext(
                <HeaderContent title="Test Title" subtitle="Test Subtitle" info="Test Info" theme={theme} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders without subtitle or info', () => {
            const tree = renderWithContext(<HeaderContent title="Just Title" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom theme', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={BLUIThemes.blueDark as unknown as ExtendedTheme} />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Subtitle Variations', () => {
        it('renders with subtitle as string', () => {
            const tree = renderWithContext(<HeaderContent title="Title" subtitle="String Subtitle" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with subtitle as custom component', () => {
            const CustomSubtitle = (): JSX.Element => <Text>Custom Subtitle</Text>;
            const tree = renderWithContext(<HeaderContent title="Title" subtitle={<CustomSubtitle />} theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders without subtitle when undefined', () => {
            const tree = renderWithContext(<HeaderContent title="Title" subtitle={undefined} theme={theme} />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Info Variations', () => {
        it('renders with info as string', () => {
            const tree = renderWithContext(<HeaderContent title="Title" info="String Info" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with info as custom component', () => {
            const CustomInfo = (): JSX.Element => <Text>Custom Info</Text>;
            const tree = renderWithContext(<HeaderContent title="Title" info={<CustomInfo />} theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders without info when undefined', () => {
            const tree = renderWithContext(<HeaderContent title="Title" info={undefined} theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with all text content (title, subtitle, info)', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" subtitle="Subtitle" info="Info" theme={theme} />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Search Mode', () => {
        it('renders search input when searching is true', () => {
            const searchContext = createSearchContext({
                searching: true,
                searchConfig: { placeholder: 'Search here' },
            });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders title when searching is false', () => {
            const searchContext = createSearchContext({ searching: false });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search with custom placeholder', () => {
            const searchContext = createSearchContext({
                searching: true,
                searchConfig: { placeholder: 'Custom Search Placeholder' },
            });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search with autoFocus enabled', () => {
            const searchContext = createSearchContext({
                searching: true,
                searchConfig: { autoFocus: true },
            });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search with autoCorrect enabled', () => {
            const searchContext = createSearchContext({
                searching: true,
                searchConfig: { autoCorrect: true },
            });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders search with custom autoCapitalize', () => {
            const searchContext = createSearchContext({
                searching: true,
                searchConfig: { autoCapitalize: 'words' },
            });
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />, searchContext);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Actions', () => {
        it('renders with icon actions', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 0, width: 0 }, icons: { count: 3 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with component actions', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 2, width: 80 }, icons: { count: 0 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with both icon and component actions', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 1, width: 40 }, icons: { count: 2 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders without actions', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 0, width: 0 }, icons: { count: 0 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('calculates action panel width with search icon', () => {
            const searchContext = createSearchContext({ searchConfig: { placeholder: 'Search' } });
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 0, width: 0 }, icons: { count: 2 } }}
                />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Custom Styles', () => {
        it('renders with custom root style', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} styles={{ root: { backgroundColor: 'red' } }} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom title style', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} styles={{ title: { fontSize: 24, color: 'blue' } }} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom subtitle style', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    subtitle="Subtitle"
                    theme={theme}
                    styles={{ subtitle: { fontSize: 16, fontStyle: 'italic' } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom info style', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    info="Info"
                    theme={theme}
                    styles={{ info: { fontSize: 12, color: 'gray' } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom search style', () => {
            const searchContext = createSearchContext({ searching: true, searchConfig: {} });
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} styles={{ search: { fontSize: 18, fontWeight: 'bold' } }} />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with all custom styles', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    subtitle="Subtitle"
                    info="Info"
                    theme={theme}
                    styles={{
                        root: { padding: 10 },
                        title: { fontSize: 24 },
                        subtitle: { fontSize: 16 },
                        info: { fontSize: 12 },
                    }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('applies custom fontSize to title', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} styles={{ title: { fontSize: 28 } }} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('applies custom fontSize to subtitle', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    subtitle="Subtitle"
                    theme={theme}
                    styles={{ subtitle: { fontSize: 18 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('applies custom fontSize to info', () => {
            const tree = renderWithContext(
                <HeaderContent title="Title" info="Info" theme={theme} styles={{ info: { fontSize: 14 } }} />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Header Heights', () => {
        it('renders with regular height', () => {
            const headerHeightContext = createHeaderHeightContext(new Animated.Value(56));
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} />,
                createSearchContext(),
                createColorContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with extended height', () => {
            const headerHeightContext = createHeaderHeightContext(new Animated.Value(200));
            const tree = renderWithContext(
                <HeaderContent title="Title" subtitle="Subtitle" info="Info" theme={theme} />,
                createSearchContext(),
                createColorContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with collapsed height', () => {
            const headerHeightContext = createHeaderHeightContext(new Animated.Value(0));
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} />,
                createSearchContext(),
                createColorContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom height', () => {
            const headerHeightContext = createHeaderHeightContext(new Animated.Value(120));
            const tree = renderWithContext(
                <HeaderContent title="Title" subtitle="Subtitle" theme={theme} />,
                createSearchContext(),
                createColorContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Color Context', () => {
        it('renders with custom text color', () => {
            const colorContext = createColorContext({ color: '#ffffff' });
            const tree = renderWithContext(
                <HeaderContent title="Title" theme={theme} />,
                createSearchContext(),
                colorContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with dark text color', () => {
            const colorContext = createColorContext({ color: '#000000' });
            const tree = renderWithContext(
                <HeaderContent title="Title" subtitle="Subtitle" theme={theme} />,
                createSearchContext(),
                colorContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Complex Scenarios', () => {
        it('renders with title and subtitle but no info', () => {
            const tree = renderWithContext(<HeaderContent title="Title" subtitle="Subtitle" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with title and info but no subtitle', () => {
            const tree = renderWithContext(<HeaderContent title="Title" info="Info" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders in search mode with actions', () => {
            const searchContext = createSearchContext({ searching: true, searchConfig: {} });
            const tree = renderWithContext(
                <HeaderContent
                    title="Title"
                    theme={theme}
                    actions={{ components: { count: 0, width: 0 }, icons: { count: 2 } }}
                />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with all props combined', () => {
            const tree = renderWithContext(
                <HeaderContent
                    title="Full Title"
                    subtitle="Full Subtitle"
                    info="Full Info"
                    theme={theme}
                    actions={{ components: { count: 1, width: 40 }, icons: { count: 2 } }}
                    styles={{
                        root: { paddingHorizontal: 16 },
                        title: { fontSize: 22 },
                        subtitle: { fontSize: 14 },
                        info: { fontSize: 10 },
                    }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('calculates marginBottom correctly with title and subtitle', () => {
            const tree = renderWithContext(<HeaderContent title="Title" subtitle="Subtitle" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('calculates marginBottom correctly with title only', () => {
            const tree = renderWithContext(<HeaderContent title="Title Only" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HeaderContent - Edge Cases', () => {
        it('renders with empty string title', () => {
            const tree = renderWithContext(<HeaderContent title="" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty string subtitle', () => {
            const tree = renderWithContext(<HeaderContent title="Title" subtitle="" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty string info', () => {
            const tree = renderWithContext(<HeaderContent title="Title" info="" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with no actions specified (default)', () => {
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty styles object', () => {
            const tree = renderWithContext(<HeaderContent title="Title" theme={theme} styles={{}} />);
            expect(tree).toMatchSnapshot();
        });
    });
});
