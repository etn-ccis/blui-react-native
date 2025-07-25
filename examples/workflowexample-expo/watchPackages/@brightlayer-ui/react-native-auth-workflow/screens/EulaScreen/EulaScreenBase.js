import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useCallback, useRef, useState } from 'react';
import {
    ErrorManager,
    WorkflowCard,
    WorkflowCardActions,
    WorkflowCardBody,
    WorkflowCardHeader,
} from '../../components/index.js';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { Icon } from '@brightlayer-ui/react-native-components';
import { WebView } from 'react-native-webview';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useTranslation } from 'react-i18next';
const makeStyles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        retryContainer: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        retryBody: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: { letterSpacing: 0, paddingLeft: 10 },
        webview: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        checkbox: {
            paddingLeft: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        checkboxLabel: { flexGrow: 0, flexShrink: 0, textAlign: 'left' },
    });
/**
 * Base Component that renders a screen displaying the EULA and requests acceptance via a checkbox.
 *
 * @param {EulaScreenProps} props - Basic props of EULA Screen Base component
 *
 * @category Component
 */
export const EulaScreenBase = (props) => {
    const {
        onEulaAcceptedChange,
        eulaContent,
        checkboxLabel,
        html,
        initialCheckboxValue,
        checkboxProps,
        errorDisplayConfig,
        refreshConfig,
    } = props;
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const cardBodyProps = props.WorkflowCardBodyProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    const theme = useExtendedTheme();
    const { t } = useTranslation();
    const scrollViewRef = useRef(null);
    const contentSizeRef = useRef({ width: 0, height: 0 });
    const defaultStyles = makeStyles(theme);
    const [eulaAccepted, setEulaAccepted] = useState(initialCheckboxValue ?? false);
    const [checkboxEnable, setCheckboxEnable] = useState(eulaAccepted);
    const handleEulaAcceptedChecked = useCallback(
        (accepted) => {
            setEulaAccepted(accepted);
            onEulaAcceptedChange?.(accepted);
        },
        [onEulaAcceptedChange]
    );
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 30;
        if (eulaAccepted) {
            return true;
        }
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    };
    const handleLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        contentSizeRef.current = { width, height };
    };
    return _jsxs(WorkflowCard, {
        ...cardBaseProps,
        children: [
            _jsx(WorkflowCardHeader, { ...headerProps }),
            _jsx(WorkflowCardBody, {
                scrollable: false,
                ...cardBodyProps,
                children: _jsx(View, {
                    style: defaultStyles.container,
                    children: refreshConfig?.showRefreshButton
                        ? _jsx(View, {
                              style: defaultStyles.retryContainer,
                              children: _jsxs(TouchableOpacity, {
                                  style: defaultStyles.retryBody,
                                  onPress: refreshConfig?.onRefresh,
                                  children: [
                                      _jsx(Icon, { source: { name: 'refresh' } }),
                                      _jsx(Text, {
                                          variant: 'titleSmall',
                                          style: defaultStyles.text,
                                          children: refreshConfig?.refreshButtonLabel ?? t('bluiCommon:MESSAGES.RETRY'),
                                      }),
                                  ],
                              }),
                          })
                        : _jsxs(View, {
                              style: defaultStyles.container,
                              children: [
                                  html
                                      ? _jsx(WebView, {
                                            originWhitelist: ['*'],
                                            testID: 'blui-eula-web-view',
                                            source: { html: eulaContent, baseUrl: '' },
                                            scalesPageToFit: false,
                                            nestedScrollEnabled: true,
                                            onScroll: ({ nativeEvent }) => {
                                                if (isCloseToBottom(nativeEvent)) {
                                                    setCheckboxEnable(true);
                                                }
                                            },
                                            injectedJavaScript: `
                                        function updateScroll() {
                                            window.scrollTo(1, 0);
                                        }
                                        updateScroll();
                                    `,
                                            scrollEventThrottle: 10,
                                            forceDarkOn: theme.dark ? true : false,
                                            style: defaultStyles.webview,
                                        })
                                      : _jsx(ScrollView, {
                                            onScroll: ({ nativeEvent }) => {
                                                if (isCloseToBottom(nativeEvent)) {
                                                    setCheckboxEnable(true);
                                                }
                                            },
                                            testID: 'blui-eula-scroll-view',
                                            ref: scrollViewRef,
                                            scrollEventThrottle: 10,
                                            nestedScrollEnabled: true,
                                            onContentSizeChange: (w, height) => {
                                                if (eulaAccepted === false) {
                                                    setCheckboxEnable(height <= contentSizeRef.current.height);
                                                }
                                            },
                                            onLayout: handleLayout,
                                            children: _jsx(Text, {
                                                variant: 'bodyLarge',
                                                style: defaultStyles.text,
                                                children: eulaContent,
                                            }),
                                        }),
                                  _jsx(ErrorManager, {
                                      ...errorDisplayConfig,
                                      children: _jsx(Checkbox.Item, {
                                          testID: 'blui-eula-checkbox',
                                          color: checkboxProps?.color ?? theme.colors.primary,
                                          disabled: !checkboxEnable,
                                          status: eulaAccepted ? 'checked' : 'unchecked',
                                          label: checkboxLabel,
                                          onPress: () => {
                                              handleEulaAcceptedChecked(!eulaAccepted);
                                          },
                                          style: [defaultStyles.checkbox, checkboxProps?.style],
                                          labelStyle: [defaultStyles.checkboxLabel, checkboxProps?.labelStyle],
                                          position: 'leading',
                                          mode: 'android',
                                          ...checkboxProps,
                                      }),
                                  }),
                              ],
                          }),
                }),
            }),
            _jsx(WorkflowCardActions, { ...actionsProps, canGoNext: eulaAccepted && actionsProps.canGoNext }),
        ],
    });
};
