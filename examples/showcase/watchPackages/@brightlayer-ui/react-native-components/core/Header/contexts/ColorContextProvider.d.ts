type ColorContextType = {
  color: string;
};
export declare const ColorContext: import('react').Context<ColorContextType | null>;
/**
 * useColor hook
 *
 * This hook will provide you with the current text color value that is set at the top level
 * of the Header component. We expose this through a Context in order to avoid passing this prop
 * through every layer of the component hierarchy. This hook can only be called from within a
 * ColorContext.Provider.
 */
export declare const useColor: () => ColorContextType;
export {};
