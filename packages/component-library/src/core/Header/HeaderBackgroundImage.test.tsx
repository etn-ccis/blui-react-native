import React, { createRef } from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { HeaderBackgroundImage } from './HeaderBackgroundImage';
import { SearchContext } from './contexts/SearchContextProvider';
import { HeaderHeightContext } from './contexts/HeaderHeightContextProvider';
import { Animated, TextInput } from 'react-native';

// Mock the useHeaderDimensions hook to avoid SafeAreaProvider requirement
jest.mock('../__hooks__/useHeaderDimensions', () => ({
    useHeaderDimensions: jest.fn(() => ({
        REGULAR_HEIGHT: 56,
        EXTENDED_HEIGHT: 200,
        COLLAPSED_HEIGHT: 0,
    })),
}));

describe('HeaderBackgroundImage', () => {
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

    const createHeaderHeightContext = (headerHeight = new Animated.Value(200)): any => ({
        headerHeight,
    });

    const snapshotWithContext = (
        component: React.ReactElement,
        searchContext = createSearchContext(),
        headerHeightContext = createHeaderHeightContext()
    ): any =>
        TestRenderer.create(
            <SearchContext.Provider value={searchContext}>
                <HeaderHeightContext.Provider value={headerHeightContext}>{component}</HeaderHeightContext.Provider>
            </SearchContext.Provider>
        ).toJSON();

    const renderComponent = (
        component: React.ReactElement,
        searchContext = createSearchContext(),
        headerHeightContext = createHeaderHeightContext()
    ): TestRenderer.ReactTestRenderer =>
        TestRenderer.create(
            <SearchContext.Provider value={searchContext}>
                <HeaderHeightContext.Provider value={headerHeightContext}>{component}</HeaderHeightContext.Provider>
            </SearchContext.Provider>
        );

    describe('Basic Rendering', () => {
        it('renders null when no backgroundImage is provided', () => {
            const tree = snapshotWithContext(<HeaderBackgroundImage />);
            expect(tree).toBeNull();
        });

        it('renders null when backgroundImage is undefined', () => {
            const tree = snapshotWithContext(<HeaderBackgroundImage backgroundImage={undefined} />);
            expect(tree).toBeNull();
        });

        it('renders with backgroundImage as URI', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with backgroundImage as require', () => {
            const mockImage = 1; // Mock require result
            const tree = snapshotWithContext(<HeaderBackgroundImage backgroundImage={mockImage} />);
            expect(tree).toMatchSnapshot();
        });

        it('renders with backgroundImage as array of sources', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={[
                        { uri: 'https://example.com/image1.png' },
                        { uri: 'https://example.com/image2.png' },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Search State', () => {
        it('renders null when searching is true', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                searchContext
            );
            expect(tree).toBeNull();
        });

        it('renders when searching is false', () => {
            const searchContext = createSearchContext({ searching: false });
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('validates conditional: backgroundImage exists but searching is true returns null', () => {
            const searchContext = createSearchContext({ searching: true });
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/test.png' }} />,
                searchContext
            );
            expect(tree).toBeNull();
        });

        it('validates conditional: backgroundImage exists and searching is false renders image', () => {
            const searchContext = createSearchContext({ searching: false });
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/test2.png' }} />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Header Height Animation', () => {
        it('renders with default header height', () => {
            const headerHeight = new Animated.Value(200);
            const headerHeightContext = createHeaderHeightContext(headerHeight);
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                createSearchContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with minimum header height', () => {
            const headerHeight = new Animated.Value(56);
            const headerHeightContext = createHeaderHeightContext(headerHeight);
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                createSearchContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with maximum header height', () => {
            const headerHeight = new Animated.Value(300);
            const headerHeightContext = createHeaderHeightContext(headerHeight);
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                createSearchContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Image Props', () => {
        it('renders with custom style', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    style={{ borderRadius: 10, opacity: 0.5 }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom resizeMode via style', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    style={{ resizeMode: 'contain' }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with accessibility props', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    accessible
                    accessibilityLabel="Header background"
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with blurRadius', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} blurRadius={5} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with onLoad callback', () => {
            const onLoad = jest.fn();
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} onLoad={onLoad} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with onError callback', () => {
            const onError = jest.fn();
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} onError={onError} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with loadingIndicatorSource', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    loadingIndicatorSource={{ uri: 'https://example.com/loading.png' }}
                />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Combined States', () => {
        it('renders with backgroundImage, custom style, and default height', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    style={{ borderWidth: 2, borderColor: 'red' }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with all props combined', () => {
            const onLoad = jest.fn();
            const onError = jest.fn();
            const headerHeight = new Animated.Value(250);
            const headerHeightContext = createHeaderHeightContext(headerHeight);

            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    style={{ opacity: 0.8, borderRadius: 5 }}
                    blurRadius={3}
                    onLoad={onLoad}
                    onError={onError}
                    accessible
                    accessibilityLabel="Background"
                />,
                createSearchContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders null when backgroundImage is null', () => {
            const tree = snapshotWithContext(<HeaderBackgroundImage backgroundImage={null as any} />);
            expect(tree).toBeNull();
        });

        it('renders with different header heights', () => {
            const headerHeight = new Animated.Value(150);
            const headerHeightContext = createHeaderHeightContext(headerHeight);

            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                createSearchContext(),
                headerHeightContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('handles multiple style objects', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/image.png' }}
                    style={[{ opacity: 0.7 }, { borderRadius: 10 }, { tintColor: 'blue' }]}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty style object', () => {
            const tree = snapshotWithContext(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} style={{}} />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Component Instantiation (for coverage)', () => {
        it('instantiates component with image and default search state', () => {
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />
            );
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toMatchSnapshot();
            renderer.unmount();
        });

        it('instantiates component when searching is true', () => {
            const searchContext = createSearchContext({ searching: true });
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/image.png' }} />,
                searchContext
            );
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toBeNull();
            renderer.unmount();
        });

        it('instantiates component when searching is false', () => {
            const searchContext = createSearchContext({ searching: false });
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/different.png' }} />,
                searchContext
            );
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toMatchSnapshot();
            renderer.unmount();
        });

        it('instantiates component with no backgroundImage', () => {
            const renderer = renderComponent(<HeaderBackgroundImage />);
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toBeNull();
            renderer.unmount();
        });

        it('instantiates component with custom styles', () => {
            const renderer = renderComponent(
                <HeaderBackgroundImage
                    backgroundImage={{ uri: 'https://example.com/styled.png' }}
                    style={{ opacity: 0.5 }}
                />
            );
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toMatchSnapshot();
            renderer.unmount();
        });

        it('instantiates component with different header heights', () => {
            const headerHeight = new Animated.Value(100);
            const headerHeightContext = createHeaderHeightContext(headerHeight);
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/height.png' }} />,
                createSearchContext(),
                headerHeightContext
            );
            expect(renderer).toBeDefined();
            expect(renderer.toJSON()).toMatchSnapshot();
            renderer.unmount();
        });

        it('exercises the conditional branch when backgroundImage is provided and not searching', () => {
            const searchContext = createSearchContext({ searching: false });
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/branch1.png' }} />,
                searchContext
            );
            expect(renderer).toBeDefined();
            const json = renderer.toJSON();
            expect(json).toMatchSnapshot();
            renderer.unmount();
        });

        it('exercises the conditional branch when backgroundImage is provided but searching', () => {
            const searchContext = createSearchContext({ searching: true });
            const renderer = renderComponent(
                <HeaderBackgroundImage backgroundImage={{ uri: 'https://example.com/branch2.png' }} />,
                searchContext
            );
            expect(renderer).toBeDefined();
            const json = renderer.toJSON();
            expect(json).toBeNull();
            renderer.unmount();
        });
    });
});
