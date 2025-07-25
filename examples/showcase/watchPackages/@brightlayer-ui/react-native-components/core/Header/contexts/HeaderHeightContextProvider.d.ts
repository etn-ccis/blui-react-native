import {Animated} from 'react-native';
type HeaderHeightContextType = {
  headerHeight:
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>;
};
export declare const HeaderHeightContext: import('react').Context<HeaderHeightContextType | null>;
/**
 * useHeaderHeight hook
 *
 * This hook will provide you with the current height of the Header component. We expose this through a Context in order to avoid passing this prop
 * through every layer of the component hierarchy. This hook can only be called from within a
 * HeaderHeightContext.Provider.
 */
export declare const useHeaderHeight: () => HeaderHeightContextType;
export {};
