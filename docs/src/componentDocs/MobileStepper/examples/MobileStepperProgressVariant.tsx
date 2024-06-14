import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {MobileStepperProgressVariantExample} from './MobileStepperProgressVariantExample';

const codeSnippet = `<MobileStepper
    activeStep={3}
    steps={5}
    leftButton={<Button>{'Back'}</Button>}
    rightButton={<Button>{'Next'}</Button>}
    variant={'progress'}
/>;`;

export const MobileStepperProgressVariant = (): JSX.Element => (
  <Box>
    <MobileStepperProgressVariantExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/MobileStepper/examples/MobileStepperProgressVariantExample.tsx"
    />
  </Box>
);
