import { jsx as _jsx } from 'react/jsx-runtime';
import { useCallback, useEffect, useState } from 'react';
import { EulaScreenBase } from './EulaScreenBase.js';
import { useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts/index.js';
import { useErrorManager } from '../../contexts/ErrorContext/useErrorManager.js';
import { useTranslation } from 'react-i18next';
import { timeOutDelay } from '../../constants/index.js';
/**
 * Component that renders a screen displaying the EULA and requests acceptance via a checkbox.
 *
 * @param {EulaScreenProps} props - Props of Eula Screen
 *
 * @category Component
 */
export const EulaScreen = (props) => {
    const { t } = useTranslation();
    const { actions, language, navigate } = useRegistrationContext();
    const { triggerError, errorManagerConfig } = useErrorManager();
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: () => {
            if (props.errorDisplayConfig?.onClose) props.errorDisplayConfig.onClose();
            if (errorManagerConfig.onClose) errorManagerConfig?.onClose();
        },
    };
    const regWorkflow = useRegistrationWorkflowContext();
    const {
        nextScreen,
        previousScreen,
        screenData,
        currentScreen,
        totalScreens,
        isInviteRegistration,
        updateScreenData,
        resetScreenData,
    } = regWorkflow;
    const {
        WorkflowCardBaseProps,
        WorkflowCardHeaderProps,
        WorkflowCardActionsProps,
        eulaContent,
        checkboxLabel = t('bluiRegistration:REGISTRATION.EULA.AGREE_TERMS'),
        html: htmlProp,
        initialCheckboxValue,
        ...otherEulaScreenProps
    } = props;
    const html = htmlProp !== undefined ? htmlProp : regWorkflow?.eulaIsHtml;
    const eulaAccepted = initialCheckboxValue ?? screenData.Eula.accepted;
    const [isLoading, setIsLoading] = useState(true);
    const [eulaData, setEulaData] = useState();
    const [eulaFetchError, setEulaFetchError] = useState(false);
    const loadAndCacheEula = useCallback(async () => {
        setIsLoading(true);
        if (!eulaContent) {
            setEulaData(t('bluiRegistration:REGISTRATION.EULA.LOADING'));
            try {
                const eulaText = await actions?.loadEula?.(language);
                setEulaData(eulaText);
                setIsLoading(false);
            } catch (_error) {
                triggerError(_error);
                setEulaFetchError(true);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            setEulaData(eulaContent);
        }
    }, [eulaContent, t, actions, language]);
    const onNext = useCallback(async () => {
        setIsLoading(true);
        try {
            if (screenData.Eula.accepted) {
                await actions?.acceptEula?.();
            }
            let isAccExist;
            if (isInviteRegistration) {
                const { codeValid, accountExists } =
                    (await actions?.validateUserRegistrationRequest?.(
                        screenData.VerifyCode.code,
                        screenData.CreateAccount.emailAddress
                    )) ?? {};
                isAccExist = accountExists;
                if (isAccExist) {
                    updateScreenData({
                        screenId: 'Eula',
                        values: { accepted: screenData.Eula.accepted },
                        isAccountExist: accountExists,
                    });
                } else {
                    if (typeof codeValid === 'boolean') {
                        if (codeValid)
                            void nextScreen({
                                screenId: 'Eula',
                                values: { accepted: screenData.Eula.accepted },
                                isAccountExist: accountExists,
                            });
                        else {
                            triggerError(
                                new Error(t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.CODE_VALIDATOR_ERROR'))
                            );
                        }
                    } else {
                        triggerError(new Error(codeValid));
                    }
                }
            } else {
                void nextScreen({
                    screenId: 'Eula',
                    values: { accepted: screenData.Eula.accepted },
                    isAccountExist: isAccExist,
                });
            }
        } catch (_error) {
            triggerError(_error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, timeOutDelay);
        }
    }, [actions, nextScreen, triggerError, isInviteRegistration, screenData, t, updateScreenData]);
    const onPrevious = useCallback(() => {
        setIsLoading(true);
        try {
            previousScreen({
                screenId: 'Eula',
                values: { accepted: eulaAccepted },
            });
        } catch (_error) {
            triggerError(_error);
        } finally {
            setIsLoading(false);
        }
    }, [previousScreen, triggerError, eulaAccepted]);
    const updateEulaAcceptedStatus = useCallback(
        (accepted) => {
            screenData.Eula = { ...screenData, accepted };
            props?.onEulaAcceptedChange?.(accepted);
        },
        [screenData]
    );
    useEffect(() => {
        void loadAndCacheEula();
    }, [language]);
    const {
        refreshConfig = {
            showRefreshButton: eulaFetchError,
            onRefresh: () => {
                setEulaFetchError(false);
                void loadAndCacheEula();
            },
        },
    } = props;
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.LICENSE'),
        onIconPress: () => {
            navigate(-1);
            resetScreenData();
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardActionsProps = {
        showNext: true,
        nextLabel: t('bluiCommon:ACTIONS.NEXT'),
        canGoNext: true,
        showPrevious: true,
        previousLabel: t('bluiCommon:ACTIONS.BACK'),
        canGoPrevious: true,
        currentStep: currentScreen,
        totalSteps: totalScreens,
        ...WorkflowCardActionsProps,
        onNext: () => {
            void onNext();
            WorkflowCardActionsProps?.onNext?.();
        },
        onPrevious: () => {
            void onPrevious();
            WorkflowCardActionsProps?.onPrevious?.();
        },
    };
    return _jsx(EulaScreenBase, {
        WorkflowCardHeaderProps: workflowCardHeaderProps,
        eulaContent: eulaData,
        WorkflowCardBaseProps: {
            loading: isLoading,
            ...WorkflowCardBaseProps,
        },
        checkboxLabel: checkboxLabel,
        html: html,
        initialCheckboxValue: eulaAccepted,
        onEulaAcceptedChange: updateEulaAcceptedStatus,
        WorkflowCardActionsProps: workflowCardActionsProps,
        errorDisplayConfig: errorDisplayConfig,
        refreshConfig: refreshConfig,
        ...otherEulaScreenProps,
    });
};
