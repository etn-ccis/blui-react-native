export type HeaderDimensions = {
    REGULAR_HEIGHT: number;
    EXTENDED_HEIGHT: number;
    LANDSCAPE: boolean;
    getScaledHeight: (height: number) => number;
};
/**
 * useHeaderDimensions hook
 *
 * This hook is used to provide the 'constant' values for the Header height in the collapsed
 * and expanded states. These values can change when the device rotates based on the safe areas
 * and presence or absence of a status bar.
 *
 * This hook listens for device rotation changes and makes sure the the correct constant values
 * are being returned
 *
 * @returns { REGULAR_HEIGHT, EXTENDED_HEIGHT, LANDSCAPE, getScaledHeight }
 */
export declare const useHeaderDimensions: () => HeaderDimensions;
