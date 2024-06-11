import React from 'react';
import Box from '@mui/material/Box';
import {Spacer} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import * as colors from '@brightlayer-ui/colors';

export const SpacerWithFlexExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Box sx={{display: 'flex', height: 56, width: 300}}>
      <Spacer flex={1} style={{backgroundColor: colors.blue[300]}}>
        1
      </Spacer>
      <Spacer flex={2} style={{backgroundColor: colors.yellow[300]}}>
        2
      </Spacer>
      <Spacer flex={3} style={{backgroundColor: colors.red[300]}}>
        3
      </Spacer>
    </Box>
  </ExampleShowcase>
);
