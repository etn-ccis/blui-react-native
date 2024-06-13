import React from 'react';
import {MobileStepper} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {Button} from 'react-native-paper';

export const MobileStepperTextVariantExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <MobileStepper
      activeStep={3}
      steps={5}
      leftButton={<Button>{'Back'}</Button>}
      rightButton={<Button>{'Next'}</Button>}
      variant={'text'}
    />
    ;
  </ExampleShowcase>
);
