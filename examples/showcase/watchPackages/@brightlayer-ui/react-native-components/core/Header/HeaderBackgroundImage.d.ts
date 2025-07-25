import React from 'react';
import { ImageProps, ImageSourcePropType } from 'react-native';
type HeaderBackgroundProps = Omit<ImageProps, 'source'> & {
    /** Background image to render */
    backgroundImage?: ImageSourcePropType;
};
/**
 * HeaderBackgroundImage component
 *
 * The HeaderBackgroundImage is a helper component for organizing the contents in the Header. It is
 * used for displaying the background image and blending it with the background color.
 */
export declare const HeaderBackgroundImage: React.FC<HeaderBackgroundProps>;
export {};
