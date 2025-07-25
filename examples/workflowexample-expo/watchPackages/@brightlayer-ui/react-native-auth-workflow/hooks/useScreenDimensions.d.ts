type ScreenDimensionsProps = {
    width: number;
    height: number;
    isTablet: boolean;
};
/**
 * Hook used to identify whether an app is run on a tablet and to get the app window's width and height.
 *
 * @category Hook
 */
export declare const useScreenDimensions: () => ScreenDimensionsProps;
export {};
