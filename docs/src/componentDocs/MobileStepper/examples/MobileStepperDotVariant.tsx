import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperDotVariantExample} from './MobileStepperDotVariantExample';

const codeSnippet = `<MobileStepper
      activeStep={2}
      steps={5}
      leftButton={
        <Button
          onPress={() => ({})}
          mode="outlined"
          style={{width: 100, alignSelf: 'flex-start', marginRight: 40}}>
          Back
        </Button>
      }
      rightButton={
        <Button
          onPress={() => ({})}
          mode="contained"
          style={{width: 100, alignSelf: 'flex-end', marginLeft: 40}}>
          Next
        </Button>
      }
      variant={'dots'}
    />`;

export const MobileStepperDotVariant = (): JSX.Element => (
  <Box>
    <MobileStepperDotVariantExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine='20' />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/MobileStepper/examples/MobileStepperDotVariantExample.tsx"
    />
  </Box>
);
