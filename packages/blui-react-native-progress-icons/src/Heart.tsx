import React from 'react';
import Svg, { Path, Rect, ClipPath } from 'react-native-svg';
import { HeartProgressProps } from './types';
import { rangeValue } from './utilities';
import { ProgressIcon } from './ProgressIcon';

const basePath =
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
const outlinedPath =
    'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';

const getPath = (outlined: boolean): string => (outlined ? outlinedPath : basePath);

export const Heart: React.FC<HeartProgressProps> = (props) => {
    const {
        backgroundColor,
        outlined = false,
        size = 24,
        percent = 100,
        color,
        labelSize,
        labelColor,
        showPercentLabel,
        labelPosition,
        styles,
        ...svgProps
    } = props;

    const startY = outlined ? 18.35 : 21.35;
    const fillHeight = outlined ? 13.35 : 18.35;

    return (
        <ProgressIcon
            color={color}
            percent={percent}
            labelColor={labelColor}
            labelSize={labelSize}
            size={size}
            showPercentLabel={showPercentLabel}
            labelPosition={labelPosition}
            styles={styles}
        >
            <Svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...svgProps}>
                {outlined && backgroundColor && <path d={basePath} fill={backgroundColor} />}
                <Path
                    fill={(!outlined && backgroundColor) || color}
                    fillOpacity={outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'}
                    d={getPath(outlined)}
                />
                <ClipPath id="blui-heart-clip">
                    <Path d={basePath} />
                </ClipPath>
                {percent > 0 && (
                    <Rect
                        fill={color}
                        clipPath="url(#blui-heart-clip)"
                        x="2"
                        y={startY - (rangeValue(percent, 0, 100) * fillHeight) / 100}
                        width="20"
                        height="20"
                    />
                )}
            </Svg>
        </ProgressIcon>
    );
};
