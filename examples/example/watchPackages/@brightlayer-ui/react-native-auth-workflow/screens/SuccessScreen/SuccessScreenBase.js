import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import {
    WorkflowCard,
    WorkflowCardActions,
    WorkflowCardBody,
    WorkflowCardHeader,
} from '../../components/WorkflowCard/index.js';
import { EmptyState } from '@brightlayer-ui/react-native-components';
import { View, StyleSheet } from 'react-native';
const makeStyles = () =>
    StyleSheet.create({
        emptyStateContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
    });
/**
 * Component that renders a success screen
 *
 * @param {SuccessScreenProps} props - Basic props of Success Screen component
 *
 * @category Component
 */
export const SuccessScreenBase = (props) => {
    const { dismissButtonLabel = '', canDismiss, onDismiss, EmptyStateProps } = props;
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    const bodyProps = props.WorkflowCardBodyProps ?? {};
    const styles = makeStyles();
    return _jsxs(WorkflowCard, {
        ...cardBaseProps,
        children: [
            Object.keys(headerProps).length !== 0 && _jsx(WorkflowCardHeader, { ...headerProps }),
            _jsx(WorkflowCardBody, {
                scrollable: false,
                ...bodyProps,
                children: _jsx(View, {
                    style: [styles.emptyStateContainer],
                    children: EmptyStateProps && _jsx(EmptyState, { ...EmptyStateProps }),
                }),
            }),
            _jsx(WorkflowCardActions, {
                ...actionsProps,
                nextLabel: dismissButtonLabel || actionsProps.nextLabel,
                canGoNext: canDismiss ?? actionsProps.canGoNext,
                onNext: () => {
                    if (onDismiss) onDismiss();
                    if (actionsProps.onNext) actionsProps.onNext();
                },
            }),
        ],
    });
};
