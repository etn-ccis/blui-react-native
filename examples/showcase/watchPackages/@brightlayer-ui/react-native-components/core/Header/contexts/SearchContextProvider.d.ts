import { Ref } from 'react';
import { SearchableConfig } from '../Header.js';
import { TextInput } from 'react-native';
type SearchContextType = {
    searchRef: Ref<TextInput>;
    query: string;
    searching: boolean;
    onQueryChange: (text: string) => void;
    searchConfig?: SearchableConfig;
    onSearch: () => void;
    onClear: () => void;
    onClose: () => void;
};
export declare const SearchContext: import("react").Context<SearchContextType | null>;
/**
 * useSearch hook
 *
 * This hook will provide you with the current searchConfig that is set at the top level
 * of the Header component. We expose this through a Context in order to avoid passing this prop
 * through every layer of the component hierarchy. This hook can only be called from within a
 * SearchContext.Provider.
 */
export declare const useSearch: () => SearchContextType;
export {};
