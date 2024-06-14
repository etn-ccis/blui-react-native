import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperTextVariantExample} from './MobileStepperTextVariantExample';

const codeSnippet = `<MobileStepper
    activeStep={3}
    steps={5}
    leftButton={<Button>{'Back'}</Button>}
    rightButton={<Button>{'Next'}</Button>}
    variant={'text'}
/>;`;

export const MobileStepperTextVariant = (): JSX.Element => (
  <Box>
    <MobileStepperTextVariantExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/MobileStepper/examples/MobileStepperTextVariantExample.tsx"
    />
  </Box>
);
