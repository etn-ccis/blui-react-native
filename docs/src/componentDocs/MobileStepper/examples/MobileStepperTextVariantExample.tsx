import React, { useCallback, useState } from 'react';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Button } from 'react-native-paper';

export const MobileStepperTextVariantExample = (): JSX.Element => {
    const totalSteps = 5;
    const [currentStep, setCurrentStep] = useState(0);

    const updateStep = useCallback(
        (delta: number): void => {
            setCurrentStep(currentStep + delta);
        },
        [currentStep]
    );

    return (
        <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
            <MobileStepper
                activeStep={currentStep}
                steps={totalSteps}
                leftButton={
                    <Button
                        disabled={currentStep === 0}
                        onPress={(): void => updateStep(-1)}
                        mode="outlined"
                        style={{ width: 100, alignSelf: 'flex-start', marginRight: 24 }}
                    >
                        Back
                    </Button>
                }
                rightButton={
                    <Button
                        disabled={currentStep === totalSteps - 1}
                        onPress={(): void => updateStep(1)}
                        mode="contained"
                        style={{ width: 100, alignSelf: 'flex-end', marginLeft: 24 }}
                    >
                        Next
                    </Button>
                }
                variant={'text'}
            />
        </ExampleShowcase>
    );
};
