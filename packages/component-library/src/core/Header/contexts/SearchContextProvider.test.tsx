import React, { createRef } from 'react';
import { renderHook } from '@testing-library/react-native';
import { TextInput } from 'react-native';
import { SearchContext, useSearch } from './SearchContextProvider';
import { SearchableConfig } from '../Header';

describe('SearchContext', () => {
    describe('Context Creation', () => {
        it('should exist as a React context', (): void => {
            expect(SearchContext).toBeDefined();
            expect(SearchContext.Provider).toBeDefined();
            expect(SearchContext.Consumer).toBeDefined();
        });
    });

    describe('useSearch hook', () => {
        const mockOnQueryChange = jest.fn();
        const mockOnSearch = jest.fn();
        const mockOnClear = jest.fn();
        const mockOnClose = jest.fn();
        const searchRef = createRef<TextInput>();

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should throw error when used outside SearchContext.Provider', (): void => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            try {
                renderHook(() => useSearch());
            } catch (error: any) {
                expect(error.message).toContain('useSearch must be used within a SearchContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should return search context values when used within SearchContext.Provider', (): void => {
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: 'test query',
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searchRef).toBe(searchRef);
            expect(result.current.query).toBe('test query');
            expect(result.current.searching).toBe(true);
            expect(result.current.onQueryChange).toBe(mockOnQueryChange);
            expect(result.current.onSearch).toBe(mockOnSearch);
            expect(result.current.onClear).toBe(mockOnClear);
            expect(result.current.onClose).toBe(mockOnClose);
        });

        it('should handle searching state as false', (): void => {
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: '',
                        searching: false,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searching).toBe(false);
        });

        it('should handle empty query string', (): void => {
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: '',
                        searching: false,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.query).toBe('');
        });

        it('should handle searchConfig when provided', (): void => {
            const searchConfig: SearchableConfig = {
                placeholder: 'Search here',
                autoFocus: true,
                autoCapitalize: 'none',
                autoCorrect: false,
            };

            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: 'test',
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        searchConfig,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searchConfig).toBe(searchConfig);
            expect(result.current.searchConfig?.placeholder).toBe('Search here');
            expect(result.current.searchConfig?.autoFocus).toBe(true);
        });

        it('should handle undefined searchConfig', (): void => {
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: 'test',
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searchConfig).toBeUndefined();
        });

        it('should handle nested providers with context override', (): void => {
            const outerRef = createRef<TextInput>();
            const innerRef = createRef<TextInput>();

            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef: outerRef,
                        query: 'outer',
                        searching: false,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    <SearchContext.Provider
                        value={{
                            searchRef: innerRef,
                            query: 'inner',
                            searching: true,
                            onQueryChange: mockOnQueryChange,
                            onSearch: mockOnSearch,
                            onClear: mockOnClear,
                            onClose: mockOnClose,
                        }}
                    >
                        {children}
                    </SearchContext.Provider>
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searchRef).toBe(innerRef);
            expect(result.current.query).toBe('inner');
            expect(result.current.searching).toBe(true);
        });

        it('should throw error when context value is explicitly set to null', (): void => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider value={null}>{children}</SearchContext.Provider>
            );

            try {
                renderHook(() => useSearch(), { wrapper });
            } catch (error: any) {
                expect(error.message).toContain('useSearch must be used within a SearchContextProvider');
            }

            consoleSpy.mockRestore();
        });

        it('should handle long query strings', (): void => {
            const longQuery = 'a'.repeat(1000);
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: longQuery,
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.query).toBe(longQuery);
            expect(result.current.query.length).toBe(1000);
        });

        it('should handle special characters in query', (): void => {
            const specialQuery = '!@#$%^&*()_+-=[]{}|;:",.<>?/~`';
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: specialQuery,
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.query).toBe(specialQuery);
        });

        it('should handle searchConfig with all properties', (): void => {
            const fullSearchConfig: SearchableConfig = {
                placeholder: 'Search...',
                autoFocus: true,
                autoCapitalize: 'words',
                autoCorrect: true,
                icon: 'search',
                onChangeText: jest.fn(),
            };

            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: 'test',
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        searchConfig: fullSearchConfig,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.searchConfig).toEqual(fullSearchConfig);
            expect(result.current.searchConfig?.autoCapitalize).toBe('words');
            expect(result.current.searchConfig?.icon).toBe('search');
        });

        it('should handle different ref instances', (): void => {
            const ref1 = createRef<TextInput>();
            const ref2 = createRef<TextInput>();

            const wrapper1 = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef: ref1,
                        query: 'test1',
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const wrapper2 = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef: ref2,
                        query: 'test2',
                        searching: false,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result: result1 } = renderHook(() => useSearch(), { wrapper: wrapper1 });
            const { result: result2 } = renderHook(() => useSearch(), { wrapper: wrapper2 });

            expect(result1.current.searchRef).toBe(ref1);
            expect(result2.current.searchRef).toBe(ref2);
            expect(result1.current.searchRef).not.toBe(result2.current.searchRef);
        });

        it('should handle whitespace-only query', (): void => {
            const whitespaceQuery = '   ';
            const wrapper = ({ children }: any): React.ReactElement => (
                <SearchContext.Provider
                    value={{
                        searchRef,
                        query: whitespaceQuery,
                        searching: true,
                        onQueryChange: mockOnQueryChange,
                        onSearch: mockOnSearch,
                        onClear: mockOnClear,
                        onClose: mockOnClose,
                    }}
                >
                    {children}
                </SearchContext.Provider>
            );

            const { result } = renderHook(() => useSearch(), { wrapper });

            expect(result.current.query).toBe(whitespaceQuery);
        });
    });
});
