import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export declare const renderableSubtitleComponent: (element: React.ReactNode, style?: StyleProp<TextStyle>, wrapSubtitle?: boolean) => React.ReactNode;
export declare const renderableInfoComponent: (element: React.ReactNode, style?: StyleProp<TextStyle>, wrapInfo?: boolean) => React.ReactNode;
export declare const interpunct: (separator?: string, style?: StyleProp<TextStyle>) => React.JSX.Element;
export declare const withKeys: (array: React.ReactNode[]) => React.JSX.Element[];
export declare const separate: (array: React.ReactNode[], separator?: string) => React.ReactNode[];
