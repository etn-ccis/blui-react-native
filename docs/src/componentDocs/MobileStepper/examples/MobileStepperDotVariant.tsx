import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperDotVariantExample} from './MobileStepperDotVariantExample';

const codeSnippet = `<MobileStepper
    activeStep={activeStep}
    steps={steps}
    leftButton={<BackButton />}
    rightButton={<NextButton />}
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
