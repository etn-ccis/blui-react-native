import React from 'react';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export const MobileStepperProgressVariantExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <MobileStepper
            activeStep={2}
            steps={5}
            leftButton={
                <View style={{ flex: 1 }}>
                    <Button style={{ width: 100, alignSelf: 'flex-start' }} onPress={() => ({})} mode="outlined">
                        Back
                    </Button>
                </View>
            }
            rightButton={
                <View style={{ flex: 1 }}>
                    <Button style={{ width: 100, alignSelf: 'flex-end' }} onPress={() => ({})} mode="contained">
                        Next
                    </Button>
                </View>
            }
            variant={'progress'}
        />
    </ExampleShowcase>
);
