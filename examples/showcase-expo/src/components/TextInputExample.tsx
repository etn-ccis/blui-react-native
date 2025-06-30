import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const TextFieldExample: React.FC = () => {
    const theme = useExtendedTheme();
    const [normalText, setNormalText] = React.useState('');
    const [errorText, setErrorText] = React.useState('');
    const [disabledText, setDisabledText] = React.useState('');
    const [normalFilledText, setNormalFilledText] = React.useState('Hello');
    const [errorFilledText, setErrorFilledText] = React.useState('Hello');
    const [disabledFilledText, setDisabledFilledText] = React.useState('Hello');
    const [hasError, setHasError] = React.useState(true);

    const styles = StyleSheet.create({
        container: {
            marginVertical: 8,
        },
        flatInput: {
            marginTop: 8,
            marginHorizontal: 8,
        },
        flatTextInputBackgroundColor: {
            backgroundColor: theme.colors.textFieldContainer,
        },
        disabledFlatTextInputBackgroundColor: {
            backgroundColor: theme.colors.disabledContainer,
        },
        outlineInput: {
            margin: 8,
            backgroundColor: 'transparent',
        },
        thinUnderline: {
            borderBottomWidth: 0, // Adjust the thickness as needed
        },
        helperText: {
            marginHorizontal: 8,
            paddingHorizontal: 16,
        },
        textInputLabel: {
            marginTop: 16,
            marginHorizontal: 8,
        },
    });

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    textColor={theme.colors.onSurface} // We can remove this prop when this issue gets fixed https://github.com/callstack/react-native-paper/issues/4250.
                    value={normalText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />

                <Text style={styles.textInputLabel}> Error Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    textColor={hasError ? theme.colors.error : theme.colors.onSurface}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    error={hasError}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onDisabledContainer}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    style={[styles.flatInput, styles.disabledFlatTextInputBackgroundColor]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    textColor={theme.colors.onSurface}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />

                <Text style={styles.textInputLabel}> Error Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    textColor={hasError ? theme.colors.error : theme.colors.onSurface}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    error={hasError}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onDisabledContainer}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    style={[styles.flatInput, styles.disabledFlatTextInputBackgroundColor]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalText}
                    dense={true}
                    textColor={theme.colors.onSurface}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />

                <Text style={styles.textInputLabel}> Error Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    textColor={hasError ? theme.colors.error : theme.colors.onSurface}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    dense={true}
                    error={hasError}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onDisabledContainer}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput, styles.disabledFlatTextInputBackgroundColor]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    dense={true}
                    textColor={theme.colors.onSurface}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />

                <Text style={styles.textInputLabel}> Error Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    textColor={hasError ? theme.colors.error : theme.colors.onSurface}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    dense={true}
                    error={hasError}
                    style={[styles.flatInput, styles.flatTextInputBackgroundColor]}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onDisabledContainer}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput, styles.disabledFlatTextInputBackgroundColor]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Normal Outlined TextInput </Text>
                <TextInput
                    label="Normal Outlined TextInput"
                    mode="outlined"
                    value={normalText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => setNormalText(value)}
                    style={styles.outlineInput}
                />

                <Text style={styles.textInputLabel}> Error Outlined TextInput </Text>
                <TextInput
                    label="Error Outlined TextInput"
                    mode="outlined"
                    value={errorText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: 'transparent' }}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Outlined TextInput </Text>
                <TextInput
                    label="Disabled Outlined TextInput"
                    mode="outlined"
                    value={disabledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    style={styles.outlineInput}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.outlineInput]}
                />

                <Text style={styles.textInputLabel}> Error Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: 'transparent' }}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    style={[styles.outlineInput]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.outlineInput]}
                />

                <Text style={styles.textInputLabel}> Error Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: 'transparent' }}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    dense={true}
                    style={[styles.outlineInput]}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textInputLabel}> Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.outlineInput]}
                />

                <Text style={styles.textInputLabel}> Error Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: 'transparent' }}
                />
                <HelperText type="error" visible={hasError} style={styles.helperText}>
                    Error Message
                </HelperText>

                <Text style={styles.textInputLabel}> Disabled Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email-outline" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    dense={true}
                    style={[styles.outlineInput]}
                />
            </View>
        </View>
    );
};
