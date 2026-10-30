import React from 'react';
import { SlashedBLUISvgMaskIcon } from '@brightlayer-ui/react-native-vector-icons';
import { Path } from 'react-native-svg';
import { ExampleShowcase } from '../../../shared';

export const SlashedIconMaskExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <SlashedBLUISvgMaskIcon size={48} slashColor="#ca3c3d">
            <Path d="M4 4H20V20H4Z" fill="#007bc1" />
        </SlashedBLUISvgMaskIcon>
    </ExampleShowcase>
);
