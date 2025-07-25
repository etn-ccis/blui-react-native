import React, { createContext, useContext } from 'react';
import { PixelRatio } from 'react-native';
const FontScaleContext = createContext({
    maxScale: 100,
    disableScaling: false,
});
export const FontScaleProvider = (props) => (React.createElement(FontScaleContext.Provider, { value: { ...props } }, props.children));
/**
 *
 * @returns the current settings specified in the nearest FontScaleContext
 */
export const useFontScaleSettings = () => useContext(FontScaleContext);
/**
 * @param forceEnable if true, get the clamped fontScale even if the Context has disabled scaling
 * @returns the clamped fontScale value taking into account settings in the FontScaleContext
 */
export const useFontScale = (forceEnable = false) => {
    const { disableScaling, maxScale } = useFontScaleSettings();
    const systemScale = PixelRatio.getFontScale();
    // Clamp the scale between min and max
    return disableScaling && !forceEnable ? 1 : Math.min(maxScale, systemScale);
};
