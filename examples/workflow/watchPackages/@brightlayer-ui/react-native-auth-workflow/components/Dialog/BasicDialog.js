import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
const makeStyles = () =>
    StyleSheet.create({
        basicDialog: {
            minWidth: 300,
            maxWidth: 600,
            alignSelf: 'center',
        },
        actions: {
            flexGrow: 0,
        },
    });
/**
 * Component that renders a basic dialog with a title, body description, and a close button.
 *
 * @param {BasicDialogProps} props - Basic props of Dialog
 *
 * @category Component
 */
export const BasicDialog = (props) => {
    const { title, body, dismissButtonText, open = false, onDismiss, style, ...otherDialogProps } = props;
    const defaultStyles = makeStyles();
    return _jsx(Portal, {
        children: _jsxs(Dialog, {
            visible: open,
            dismissable: false,
            style: [defaultStyles.basicDialog, style],
            ...otherDialogProps,
            children: [
                _jsx(Dialog.Title, { children: title }),
                _jsx(Dialog.Content, { children: _jsx(Paragraph, { children: body }) }),
                _jsx(Dialog.Actions, {
                    style: [defaultStyles.actions],
                    children: _jsx(Button, {
                        testID: 'blui-basic-dialog-dismiss-button',
                        onPress: () => {
                            onDismiss?.();
                        },
                        children: dismissButtonText ?? 'Okay',
                    }),
                }),
            ],
        }),
    });
};
