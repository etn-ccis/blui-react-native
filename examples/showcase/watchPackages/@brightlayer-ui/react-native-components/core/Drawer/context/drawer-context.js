import {createContext, useContext} from 'react';
export const DrawerContext = createContext({});
/**
 * useDrawerContext hook
 *
 * This hook will provide you with the activeItem that is set at the top-level of the Drawer. It also provides access
 * to the onItemSelect callback function. We expose this through a Context in order to avoid passing this prop
 * through every layer of the component hierarchy. This hook can only be called from within a
 * DrawerContext.Provider.
 */
export const useDrawerContext = () => useContext(DrawerContext);
