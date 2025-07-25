import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
import { Card } from 'react-native-paper';
import { WorkflowCardInstructions } from './WorkflowCardInstructions.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const makeStyles = (isTablet) => StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    workflowBody: {
        marginHorizontal: isTablet ? 24 : 16,
        paddingTop: 32,
        paddingBottom: isTablet ? 32 : 24,
        paddingHorizontal: 0,
        flex: 1,
    },
});
/**
 * Component that renders the body content for the workflow card.
 *
 * @param {CardContentProps} props - Props of CardContentProps component
 *
 * @category Component
 */
export const WorkflowCardBody = (props) => {
    const { children, style, scrollable = true, WorkflowCardInstructionProps, ...otherCardContentProps } = props;
    const { isTablet } = useScreenDimensions();
    const defaultStyles = makeStyles(isTablet);
    const windowHeight = Dimensions.get('window').height;
    return (_jsx(_Fragment, { children: scrollable ? (_jsxs(KeyboardAwareScrollView, { contentInsetAdjustmentBehavior: "always", bounces: false, keyboardShouldPersistTaps: 'handled', extraScrollHeight: Platform.OS === 'ios' ? -windowHeight * 0.07 : 0, children: [_jsx(WorkflowCardInstructions, { ...WorkflowCardInstructionProps }), _jsx(Card.Content, { style: [defaultStyles.workflowBody, style], ...otherCardContentProps, children: children })] })) : (_jsxs(_Fragment, { children: [_jsx(WorkflowCardInstructions, { ...WorkflowCardInstructionProps }), _jsx(Card.Content, { style: [defaultStyles.workflowBody, style], ...otherCardContentProps, children: _jsx(View, { style: defaultStyles.viewContainer, children: children }) })] })) }));
};
