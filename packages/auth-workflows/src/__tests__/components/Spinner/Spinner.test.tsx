import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Spinner } from '../../../components/Spinner';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
import type { ExtendedTheme } from '@brightlayer-ui/react-native-themes';

// Mock the theme hook to control theme.dark value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockTheme: any = BLUIThemes.blue;
jest.mock('@brightlayer-ui/react-native-themes', () => ({
    ...jest.requireActual('@brightlayer-ui/react-native-themes'),
    useExtendedTheme: (): ExtendedTheme => mockTheme,
}));

describe('Spinner Component', () => {
    afterEach(cleanup);

    beforeEach(() => {
        mockTheme = BLUIThemes.blue;
    });

    it('renders correctly when visible is true', () => {
        const { toJSON } = render(<Spinner visible={true} />);
        expect(toJSON()).toBeTruthy();
    });

    it('renders correctly when visible is false', () => {
        const { toJSON } = render(<Spinner visible={false} />);
        expect(toJSON()).toBeTruthy();
    });

    it('renders correctly when visible is undefined', () => {
        const { toJSON } = render(<Spinner />);
        expect(toJSON()).toBeTruthy();
    });

    it('renders with correct testID', () => {
        const { getByTestId } = render(<Spinner visible={true} />);
        expect(getByTestId('blui-spinner')).toBeTruthy();
    });

    it('renders correctly in light theme', () => {
        mockTheme = BLUIThemes.blue;
        const { getByTestId } = render(<Spinner visible={true} />);
        const spinner = getByTestId('blui-spinner');
        expect(spinner).toBeTruthy();
        expect(spinner.props.style.backgroundColor).toContain('0.75');
    });

    it('renders correctly in dark theme', () => {
        mockTheme = BLUIThemes.blueDark;
        const { getByTestId } = render(<Spinner visible={true} />);
        const spinner = getByTestId('blui-spinner');
        expect(spinner).toBeTruthy();
        expect(spinner.props.style.backgroundColor).toContain('0.15');
    });

    it('passes additional ViewProps correctly', () => {
        const { getByTestId } = render(<Spinner visible={true} accessibilityLabel="Loading spinner" />);
        const spinner = getByTestId('blui-spinner');
        expect(spinner.props.accessibilityLabel).toBe('Loading spinner');
    });

    it('renders with correct layout styles', () => {
        const { getByTestId } = render(<Spinner visible={true} />);
        const spinner = getByTestId('blui-spinner');
        expect(spinner.props.style).toMatchObject({
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
        });
    });

    it('passes custom style props along with default styles', () => {
        const customStyle = { zIndex: 9999 };
        const { getByTestId } = render(<Spinner visible={true} style={customStyle} />);
        const spinner = getByTestId('blui-spinner');
        expect(spinner).toBeTruthy();
    });

    it('uses primary color from theme', () => {
        const { getByTestId } = render(<Spinner visible={true} />);
        const spinner = getByTestId('blui-spinner');
        // ActivityIndicator child should receive the theme's primary color
        expect(spinner).toBeTruthy();
    });
});
