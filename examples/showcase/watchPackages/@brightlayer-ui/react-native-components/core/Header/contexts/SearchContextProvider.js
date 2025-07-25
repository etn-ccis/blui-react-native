import {createContext, useContext} from 'react';
export const SearchContext = createContext(null);
/**
 * useSearch hook
 *
 * This hook will provide you with the current searchConfig that is set at the top level
 * of the Header component. We expose this through a Context in order to avoid passing this prop
 * through every layer of the component hierarchy. This hook can only be called from within a
 * SearchContext.Provider.
 */
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error('useSearch must be used within a SearchContextProvider');
  }
  return context;
};
