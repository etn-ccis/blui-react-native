import React, { useCallback } from 'react';
import { BasicDialog } from '../Dialog/BasicDialog';
import { ErrorMessageBox } from './ErrorMessageBox';
import { ErrorManagerProps } from './types';
import { TOptions } from 'i18next';

/**
 * Component that manages the display of error messages. Can be configured to display a dialog, a message box, or neither
 *
 * @param {ErrorManagerProps} props - Props of Error Manager
 *
 * @category Component
 */

export const ErrorManager: React.FC<React.PropsWithChildren<ErrorManagerProps>> = (props) => {
    const {
        children,
        mode = 'dialog',
        title,
        error = '',
        errorOptions,
        titleOptions,
        onClose = (): void => {},
        dialogConfig,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        t = (key: string, _options?: TOptions): string => key,
        messageBoxConfig = {
            position: 'top',
        },
    } = props;

    // i18next's `TFunction` exposes overloads that reject a bare `TOptions` argument; alias it to the
    // simpler (and compatible) signature this component relies on.
    const translate = t as (key: string, options?: TOptions) => string;

    const ErrorDialogWithProps = useCallback(
        (): React.JSX.Element => (
            <BasicDialog
                testID="blui-error-manager-basic-dialog"
                open={error.length > 0}
                title={translate(dialogConfig?.title ?? title ?? 'Error', titleOptions)}
                body={translate(error, errorOptions)}
                onDismiss={onClose}
                dismissButtonText={translate(dialogConfig?.dismissLabel ?? 'Okay')}
                style={dialogConfig?.style}
            />
        ),
        [dialogConfig, title, error, onClose, errorOptions, titleOptions, translate]
    );

    const ErrorMessageBoxWithProps = useCallback((): React.JSX.Element => {
        const { dismissible = true, fontColor, backgroundColor, style } = messageBoxConfig;

        return (
            <ErrorMessageBox
                title={translate(messageBoxConfig?.title ?? title ?? 'Error', titleOptions)}
                errorMessage={translate(error, errorOptions)}
                dismissible={dismissible}
                style={style}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                onClose={onClose}
            />
        );
    }, [error, errorOptions, titleOptions, title, translate, messageBoxConfig, onClose]);

    return mode === 'dialog' && error.length > 0 ? (
        <>
            {children}
            <ErrorDialogWithProps />
        </>
    ) : mode === 'message-box' && error.length > 0 ? (
        <>
            {messageBoxConfig.position !== 'bottom' && <ErrorMessageBoxWithProps />}
            {children}
            {messageBoxConfig.position === 'bottom' && <ErrorMessageBoxWithProps />}
        </>
    ) : (
        <>{children}</>
    );
};
