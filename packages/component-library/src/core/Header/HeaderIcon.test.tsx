import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { HeaderIcon } from './HeaderIcon';
import { Text } from 'react-native';

// Mock the font scale context
jest.mock('../__contexts__/font-scale-context', () => ({
    useFontScaleSettings: jest.fn(() => ({
        maxScale: 1.5,
        disableScaling: false,
    })),
}));

// Mock the Icon component
jest.mock('../Icon', () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { Text } = jest.requireActual('react-native');
    return {
        Icon: ({ source, size, color, allowFontScaling }: any): React.ReactElement => {
            const MockIcon = (): React.ReactElement => (
                <Text
                    testID="mock-icon"
                    accessibilityLabel={`icon-${typeof source === 'string' ? source : 'component'}-${size}-${color}-${allowFontScaling}`}
                >
                    Icon
                </Text>
            );
            return <MockIcon />;
        },
    };
});

describe('HeaderIcon', () => {
    afterEach(cleanup);

    const { useFontScaleSettings } = require('../__contexts__/font-scale-context');

    beforeEach(() => {
        // Reset mock to default before each test
        useFontScaleSettings.mockReturnValue({
            maxScale: 1.5,
            disableScaling: false,
        });
    });

    describe('Basic Rendering', () => {
        it('renders null when no icon is provided', () => {
            const tree = TestRenderer.create(<HeaderIcon />).toJSON();
            expect(tree).toBeNull();
        });

        it('renders null when icon is undefined', () => {
            const tree = TestRenderer.create(<HeaderIcon icon={undefined} />).toJSON();
            expect(tree).toBeNull();
        });

        it('renders with icon as string', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="menu" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon as component', () => {
            const CustomIcon = (): React.ReactElement => <Text>Custom</Text>;
            const tree = TestRenderer.create(<HeaderIcon icon={CustomIcon} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with icon as object', () => {
            const iconObj = { family: 'material', name: 'home' };
            const tree = TestRenderer.create(<HeaderIcon icon={iconObj as any} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Color Prop', () => {
        it('renders with custom color', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="menu" color="#FF0000" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with color as rgba', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="menu" color="rgba(255, 0, 0, 0.5)" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with color as named color', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="menu" color="red" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without color prop', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="menu" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Font Scaling', () => {
        it('allows font scaling when disableScaling is false', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 1.5,
                disableScaling: false,
            });

            const renderer = TestRenderer.create(<HeaderIcon icon="menu" />);
            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('disables font scaling when disableScaling is true', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 1.5,
                disableScaling: true,
            });

            const renderer = TestRenderer.create(<HeaderIcon icon="menu" />);
            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('passes allowFontScaling as true when disableScaling is false', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 1.5,
                disableScaling: false,
            });

            const tree = TestRenderer.create(<HeaderIcon icon="menu" color="blue" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('passes allowFontScaling as false when disableScaling is true', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 1.5,
                disableScaling: true,
            });

            const tree = TestRenderer.create(<HeaderIcon icon="menu" color="blue" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Icon Component Integration', () => {
        it('passes correct props to Icon component', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="settings" color="#00FF00" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('uses ICON_SIZE constant for size prop', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="home" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders with both icon and color as undefined', () => {
            const tree = TestRenderer.create(<HeaderIcon icon={undefined} color={undefined} />).toJSON();
            expect(tree).toBeNull();
        });

        it('renders with icon but color undefined', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="star" color={undefined} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty string as icon', () => {
            const tree = TestRenderer.create(<HeaderIcon icon="" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles multiple renders with different icons', () => {
            const renderer = TestRenderer.create(<HeaderIcon icon="menu" />);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            renderer.update(<HeaderIcon icon="home" />);
            tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles multiple renders with different colors', () => {
            const renderer = TestRenderer.create(<HeaderIcon icon="menu" color="red" />);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            renderer.update(<HeaderIcon icon="menu" color="blue" />);
            tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles changing from icon to no icon', () => {
            const renderer = TestRenderer.create(<HeaderIcon icon="menu" />);
            let tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();

            renderer.update(<HeaderIcon icon={undefined} />);
            tree = renderer.toJSON();
            expect(tree).toBeNull();
        });
    });

    describe('Complex Scenarios', () => {
        it('renders with custom icon component and color', () => {
            const CustomIcon = (): React.ReactElement => <Text>CustomIcon</Text>;
            const tree = TestRenderer.create(<HeaderIcon icon={CustomIcon} color="#123456" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all props when disableScaling is true', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 2.0,
                disableScaling: true,
            });

            const tree = TestRenderer.create(<HeaderIcon icon="notifications" color="#ABCDEF" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with all props when disableScaling is false', () => {
            useFontScaleSettings.mockReturnValue({
                maxScale: 1.2,
                disableScaling: false,
            });

            const tree = TestRenderer.create(<HeaderIcon icon="search" color="#FEDCBA" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
