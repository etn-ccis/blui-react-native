import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperDotVariantExample} from './MobileStepperDotVariantExample';

const codeSnippet = `<MobileStepper
    activeStep={3}
    steps={5}
    leftButton={<Button>{'Back'}</Button>}
    rightButton={<Button>{'Next'}</Button>}
    variant={'dots'}
/>;`;

export const MobileStepperDotVariant = (): JSX.Element => (
  <Box>
    <MobileStepperDotVariantExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/MobileStepper/examples/MobileStepperDotVariantExample.tsx"
    />
  </Box>
);
