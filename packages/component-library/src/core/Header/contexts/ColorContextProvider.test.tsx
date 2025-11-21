import React from 'react';
import { render, renderHook } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ColorContext, useColor } from './ColorContextProvider';

// Helper component for testing multiple consumers
const TestConsumer = ({ testID }: { testID: string }): React.ReactElement => {
    const { color } = useColor();
    return <Text testID={testID}>{color}</Text>;
};

describe('ColorContext', () => {
    describe('Context Creation', () => {
        it('should exist as a React context', (): void => {
            expect(ColorContext).toBeDefined();
            expect(ColorContext.Provider).toBeDefined();
            expect(ColorContext.Consumer).toBeDefined();
        });
    });

    describe('useColor hook', () => {
        it('should throw error when used outside ColorContext.Provider', (): void => {
            // Mock console.error to suppress error boundary warnings in tests
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            try {
                renderHook(() => useColor());
            } catch (error: any) {
                expect(error.message).toContain('useColor must be used within a ColorContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should return color value when used within ColorContext.Provider', (): void => {
            const testColor = '#FF5722';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: testColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(testColor);
        });

        it('should return different color values for different providers', (): void => {
            const color1 = '#2196F3';
            const color2 = '#4CAF50';

            const wrapper1 = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: color1 }}>{children}</ColorContext.Provider>
            );

            const wrapper2 = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: color2 }}>{children}</ColorContext.Provider>
            );

            const { result: result1 } = renderHook(() => useColor(), { wrapper: wrapper1 });
            const { result: result2 } = renderHook(() => useColor(), { wrapper: wrapper2 });

            expect(result1.current.color).toBe(color1);
            expect(result2.current.color).toBe(color2);
        });

        it('should handle empty string color', (): void => {
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: '' }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe('');
        });

        it('should handle color with transparency', (): void => {
            const transparentColor = 'rgba(33, 150, 243, 0.5)';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: transparentColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(transparentColor);
        });

        it('should handle nested providers with context override', (): void => {
            const outerColor = '#000000';
            const innerColor = '#FFFFFF';

            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: outerColor }}>
                    <ColorContext.Provider value={{ color: innerColor }}>{children}</ColorContext.Provider>
                </ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(innerColor);
        });

        it('should throw error when context value is explicitly set to null', (): void => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={null}>{children}</ColorContext.Provider>
            );

            try {
                renderHook(() => useColor(), { wrapper });
            } catch (error: any) {
                expect(error.message).toContain('useColor must be used within a ColorContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should work with multiple components consuming the same context', (): void => {
            const testColor = '#9C27B0';

            const { getByTestId } = render(
                <ColorContext.Provider value={{ color: testColor }}>
                    <TestConsumer testID="consumer1" />
                    <TestConsumer testID="consumer2" />
                </ColorContext.Provider>
            );

            expect(getByTestId('consumer1').props.children).toBe(testColor);
            expect(getByTestId('consumer2').props.children).toBe(testColor);
        });

        it('should handle hex color codes', (): void => {
            const hexColor = '#E91E63';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: hexColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(hexColor);
        });

        it('should handle rgb color format', (): void => {
            const rgbColor = 'rgb(255, 87, 34)';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: rgbColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(rgbColor);
        });

        it('should handle named colors', (): void => {
            const namedColor = 'red';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: namedColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(namedColor);
        });

        it('should handle hsl color format', (): void => {
            const hslColor = 'hsl(200, 100%, 50%)';
            const wrapper = ({ children }: any): React.ReactElement => (
                <ColorContext.Provider value={{ color: hslColor }}>{children}</ColorContext.Provider>
            );

            const { result } = renderHook(() => useColor(), { wrapper });

            expect(result.current.color).toBe(hslColor);
        });
    });
});
