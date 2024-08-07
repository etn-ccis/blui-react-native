import React, { useCallback, useState } from 'react';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export const MobileStepperProgressVariantExample = (): JSX.Element => {
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
                    <View style={{ flex: 1 }}>
                        <Button
                            style={{ width: 100, alignSelf: 'flex-start', marginRight: -8 }}
                            disabled={currentStep === 0}
                            onPress={(): void => updateStep(-1)}
                            mode="outlined"
                        >
                            Back
                        </Button>
                    </View>
                }
                rightButton={
                    <View style={{ flex: 1 }}>
                        <Button
                            style={{ width: 100, alignSelf: 'flex-end', marginLeft: -8 }}
                            disabled={currentStep === totalSteps - 1}
                            onPress={(): void => updateStep(1)}
                            mode="contained"
                        >
                            Next
                        </Button>
                    </View>
                }
                variant={'progress'}
            />
        </ExampleShowcase>
    );
};
