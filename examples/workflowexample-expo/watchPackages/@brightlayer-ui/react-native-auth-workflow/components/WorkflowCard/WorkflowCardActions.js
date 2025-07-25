import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
const makeStyles = (fullWidthButton) => StyleSheet.create({
    button: {
        width: fullWidthButton ? '100%' : 100,
    },
    previousButton: {
        alignSelf: 'flex-start',
    },
    nextButton: {
        alignSelf: 'flex-end',
    },
});
/**
 * Component that renders the workflow card action elements used for all screen components.
 * @param {WorkflowCardActionsProps} props - props of WorkflowCardActions component
 * @category Component
 */
export const WorkflowCardActions = (props) => {
    const { divider = true, canGoPrevious, showPrevious, previousLabel, onPrevious, canGoNext, showNext, nextLabel, onNext, currentStep = 0, totalSteps = 5, fullWidthButton, stepperVariant = 'dots', style, ...otherProps } = props;
    const defaultStyles = makeStyles(fullWidthButton);
    const { isTablet } = useScreenDimensions();
    const showStepperDots = totalSteps !== 0 && !fullWidthButton;
    return (_jsxs(View, { ...otherProps, style: style, children: [divider && _jsx(Divider, { testID: "blui-workflow-card-action-divider", bold: true }), _jsx(MobileStepper, { styles: {
                    root: [
                        {
                            flex: 0,
                            justifyContent: 'space-between',
                            paddingHorizontal: isTablet ? 8 : 0,
                            paddingVertical: isTablet ? 8 : 0,
                        },
                    ],
                    stepperContainer: !showStepperDots
                        ? {
                            display: 'none',
                        }
                        : { display: 'flex' },
                }, activeStep: currentStep, steps: totalSteps, leftButton: showPrevious ? (_jsx(Button, { mode: "outlined", disabled: canGoPrevious === false || (typeof canGoPrevious === 'function' && !canGoPrevious()), testID: 'blui-workflow-card-actions-previous-button', style: [defaultStyles.previousButton, defaultStyles.button], onPress: onPrevious, labelStyle: { marginHorizontal: 10 }, children: previousLabel })) : (_jsx(View, { style: { width: fullWidthButton ? 0 : 100 } })), rightButton: showNext ? (_jsx(Button, { mode: "contained", disabled: canGoNext === false || (typeof canGoNext === 'function' && !canGoNext()), onPress: onNext, testID: 'blui-workflow-card-actions-next-button', style: [defaultStyles.nextButton, defaultStyles.button], labelStyle: { marginHorizontal: 10 }, children: nextLabel })) : (_jsx(View, { style: { width: fullWidthButton ? 0 : 100 } })), variant: stepperVariant, "data-testid": 'workflow-card-stepper' })] }));
};
