import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { BasicDialog } from '../Dialog/BasicDialog.js';
import { ErrorMessageBox } from './ErrorMessageBox.js';
/**
 * Component that manages the display of error messages. Can be configured to display a dialog, a message box, or neither
 *
 * @param {ErrorManagerProps} props - Props of Error Manager
 *
 * @category Component
 */
export const ErrorManager = (props) => {
    const {
        children,
        mode = 'dialog',
        title,
        error = '',
        errorOptions,
        titleOptions,
        onClose = () => {},
        dialogConfig,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        t = (key, _options) => key,
        messageBoxConfig = {
            position: 'top',
        },
    } = props;
    const ErrorDialogWithProps = useCallback(
        () =>
            _jsx(BasicDialog, {
                testID: 'blui-error-manager-basic-dialog',
                open: error.length > 0,
                title: t(dialogConfig?.title ?? title ?? 'Error', titleOptions),
                body: t(error, errorOptions),
                onDismiss: onClose,
                dismissButtonText: t(dialogConfig?.dismissLabel ?? 'Okay'),
                style: dialogConfig?.style,
            }),
        [dialogConfig, title, error, onClose, errorOptions, titleOptions, t]
    );
    const ErrorMessageBoxWithProps = useCallback(() => {
        const { dismissible = true, fontColor, backgroundColor, style } = messageBoxConfig;
        return _jsx(ErrorMessageBox, {
            title: t(messageBoxConfig?.title ?? title ?? 'Error', titleOptions),
            errorMessage: t(error, errorOptions),
            dismissible: dismissible,
            style: style,
            backgroundColor: backgroundColor,
            fontColor: fontColor,
            onClose: onClose,
        });
    }, [error, errorOptions, titleOptions, title, t, messageBoxConfig, onClose]);
    return mode === 'dialog' && error.length > 0
        ? _jsxs(_Fragment, { children: [children, _jsx(ErrorDialogWithProps, {})] })
        : mode === 'message-box' && error.length > 0
          ? _jsxs(_Fragment, {
                children: [
                    messageBoxConfig.position !== 'bottom' && _jsx(ErrorMessageBoxWithProps, {}),
                    children,
                    messageBoxConfig.position === 'bottom' && _jsx(ErrorMessageBoxWithProps, {}),
                ],
            })
          : _jsx(_Fragment, { children: children });
};
