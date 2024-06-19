import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperProgressVariantExample} from './MobileStepperProgressVariantExample';

const codeSnippet = `<MobileStepper
      activeStep={2}
      steps={5}
      leftButton={
        <View style={{ flex: 1 }}>
        <Button
          style={{ width: 100, alignSelf: 'flex-start' }}
          onPress={() => ({})}
          mode="outlined">
          Back
        </Button>
        </View>
      }
      rightButton={
        <View style={{ flex: 1 }}>
        <Button
          style={{ width: 100, alignSelf: 'flex-end' }}
          onPress={() => ({})}
          mode="contained">
          Next
        </Button>
        </View>
      }
      variant={'progress'}
    />`;

export const MobileStepperProgressVariant = (): JSX.Element => (
  <Box>
    <MobileStepperProgressVariantExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="24" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/MobileStepper/examples/MobileStepperProgressVariantExample.tsx"
    />
  </Box>
);
