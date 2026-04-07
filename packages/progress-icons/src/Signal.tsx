import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SignalProgressProps } from './types';
import { rangeValue } from './utilities';
import { ProgressIcon } from './ProgressIcon';

const basePath = 'M2 22L22 2V22H2Z';

const outlinedPath = 'M22 22H2L22 2V22ZM6.828 20H20V6.828L6.828 20Z';

const getPath = (outlined: boolean): string => (outlined ? outlinedPath : basePath);

/**
 * Signal progress icon component
 * Displays a triangular signal strength indicator that fills from bottom-left to top-right
 * based on percentage (0-100%)
 */
export const Signal: React.FC<SignalProgressProps> = (props) => {
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

    const rangedPercent = rangeValue(percent, 0, 100);

    const getFillPath = (): string => {
        if (rangedPercent === 0) return '';

        if (outlined) {
            const startX = 6.774;
            const startY = 20.003;
            const maxDiagonal = 13.226;
            const diagonalProgress = (rangedPercent / 100) * maxDiagonal;

            const x = startX + diagonalProgress;
            const y = startY - diagonalProgress;

            return `M${startX} ${startY}L${x} ${y}V${startY}H${startX}Z`;
        }

        const x = 2 + (rangedPercent / 100) * 20;
        const y = 22 - (rangedPercent / 100) * 20;

        return `M2 22L${x} ${y}V22H2Z`;
    };

    const fillPath = getFillPath();

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
            <Svg height={`${size}px`} width={`${size}px`} viewBox="0 0 24 24" fill="none" {...svgProps}>
                {outlined && backgroundColor && <Path d={outlinedPath} fill={backgroundColor} />}
                <Path
                    d={getPath(outlined)}
                    fill={(!outlined && backgroundColor) || color}
                    fillOpacity={outlined || percent >= 100 || (!outlined && backgroundColor) ? 1 : 0.3}
                />

                {percent > 0 && <Path d={fillPath} fill={color} fillOpacity={1} />}
            </Svg>
        </ProgressIcon>
    );
};
