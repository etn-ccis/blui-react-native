import React from 'react';
import { renderHook } from '@testing-library/react-native';
import { Animated } from 'react-native';
import { HeaderHeightContext, useHeaderHeight } from './HeaderHeightContextProvider';

describe('HeaderHeightContext', () => {
    describe('Context Creation', () => {
        it('should exist as a React context', (): void => {
            expect(HeaderHeightContext).toBeDefined();
            expect(HeaderHeightContext.Provider).toBeDefined();
            expect(HeaderHeightContext.Consumer).toBeDefined();
        });
    });

    describe('useHeaderHeight hook', () => {
        it('should throw error when used outside HeaderHeightContext.Provider', (): void => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            try {
                renderHook(() => useHeaderHeight());
            } catch (error: any) {
                expect(error.message).toContain('useHeaderHeight must be used within a HeaderHeightContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should return headerHeight value when used within HeaderHeightContext.Provider', (): void => {
            const testHeight = new Animated.Value(56);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: testHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(testHeight);
        });

        it('should return different headerHeight values for different providers', (): void => {
            const height1 = new Animated.Value(56);
            const height2 = new Animated.Value(64);

            const wrapper1 = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: height1 }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const wrapper2 = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: height2 }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result: result1 } = renderHook(() => useHeaderHeight(), { wrapper: wrapper1 });
            const { result: result2 } = renderHook(() => useHeaderHeight(), { wrapper: wrapper2 });

            expect(result1.current.headerHeight).toBe(height1);
            expect(result2.current.headerHeight).toBe(height2);
        });

        it('should handle Animated.Value with initial value of 0', (): void => {
            const zeroHeight = new Animated.Value(0);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: zeroHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(zeroHeight);
        });

        it('should handle nested providers with context override', (): void => {
            const outerHeight = new Animated.Value(56);
            const innerHeight = new Animated.Value(72);

            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: outerHeight }}>
                    <HeaderHeightContext.Provider value={{ headerHeight: innerHeight }}>
                        {children}
                    </HeaderHeightContext.Provider>
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(innerHeight);
        });

        it('should throw error when context value is explicitly set to null', (): void => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={null}>{children}</HeaderHeightContext.Provider>
            );

            try {
                renderHook(() => useHeaderHeight(), { wrapper });
            } catch (error: any) {
                expect(error.message).toContain('useHeaderHeight must be used within a HeaderHeightContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should handle AnimatedInterpolation as headerHeight', (): void => {
            const animatedValue = new Animated.Value(0);
            const interpolatedHeight = animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [56, 120],
            });

            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: interpolatedHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(interpolatedHeight);
        });

        it('should handle large header height values', (): void => {
            const largeHeight = new Animated.Value(200);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: largeHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(largeHeight);
        });

        it('should handle negative header height values', (): void => {
            const negativeHeight = new Animated.Value(-10);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: negativeHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(negativeHeight);
        });

        it('should handle decimal header height values', (): void => {
            const decimalHeight = new Animated.Value(56.5);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: decimalHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });

            expect(result.current.headerHeight).toBe(decimalHeight);
        });

        it('should maintain reference to same Animated.Value across re-renders', (): void => {
            const testHeight = new Animated.Value(56);
            const wrapper = ({ children }: any): React.ReactElement => (
                <HeaderHeightContext.Provider value={{ headerHeight: testHeight }}>
                    {children}
                </HeaderHeightContext.Provider>
            );

            const { result } = renderHook(() => useHeaderHeight(), { wrapper });
            const firstReference = result.current.headerHeight;
            const secondReference = result.current.headerHeight;

            expect(firstReference).toBe(secondReference);
            expect(secondReference).toBe(testHeight);
        });

        it('should handle common header height values', (): void => {
            const commonHeights = [56, 64, 72, 80, 96, 112];

            commonHeights.forEach((heightValue) => {
                const height = new Animated.Value(heightValue);
                const wrapper = ({ children }: any): React.ReactElement => (
                    <HeaderHeightContext.Provider value={{ headerHeight: height }}>
                        {children}
                    </HeaderHeightContext.Provider>
                );

                const { result } = renderHook(() => useHeaderHeight(), { wrapper });

                expect(result.current.headerHeight).toBe(height);
            });
        });
    });
});
