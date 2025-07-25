import React, {ReactNode} from 'react';
type FontScaleContextType = {
  maxScale: number;
  disableScaling?: boolean;
};
export declare const FontScaleProvider: React.FC<
  FontScaleContextType & {
    children: ReactNode;
  }
>;
/**
 *
 * @returns the current settings specified in the nearest FontScaleContext
 */
export declare const useFontScaleSettings: () => FontScaleContextType;
/**
 * @param forceEnable if true, get the clamped fontScale even if the Context has disabled scaling
 * @returns the clamped fontScale value taking into account settings in the FontScaleContext
 */
export declare const useFontScale: (forceEnable?: boolean) => number;
export {};
