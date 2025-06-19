import React, {MutableRefObject} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput as ReactTextInput,
  Platform,
  TextStyle,
} from 'react-native';
import {
  HelperText,
  TextInput as PaperTextInput,
  Text,
  TextInputProps,
} from 'react-native-paper';
import {Spacer} from '@brightlayer-ui/react-native-components';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

const makeStyles = (
  theme: any,
): StyleSheet.NamedStyles<{
  textInput: TextStyle;
  errorText: TextStyle;
  helperText: TextStyle;
  helperTextRight: TextStyle;
}> =>
  StyleSheet.create({
    textInput: {
      height: 70,
      fontSize: 18,
      backgroundColor: theme.colors?.background,
    },
    errorText: {
      color: theme.colors?.error,
      fontSize: 12,
    },
    helperText: {
      color: theme.colors?.outline,
      fontSize: 12,
    },
    helperTextRight: {
      paddingRight: 13,
      color: theme.colors?.outline,
      fontSize: 12,
    },
  });

export type TextInputRenderProps = Omit<TextInputProps, 'theme'> & {
  errorText?: string;
  helperText?: string;
  helperStyles?: ViewStyle;
  helperTextRight?: string;
  rightIcon?: InputIconType;
  rightText?: InputTextType;
  rightIconOnPress?: () => void;
  theme?: ThemeProp;
  testID?: string;
};

export type InputIconType = {
  name?: string;
  color?: string;
  onPress?: () => void;
};

export type InputTextType = {
  text?: string;
  style?: TextStyle;
};

const TextInputRender: React.ForwardRefRenderFunction<
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  {},
  TextInputRenderProps
> = (
  props: TextInputRenderProps,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  ref: MutableRefObject<{} | null> | ((instance: {} | null) => void) | null,
) => {
  const {
    style,
    keyboardType = 'default',
    autoCapitalize = 'none',
    returnKeyType = 'done',
    error,
    errorText,
    helperText,
    helperTextRight,
    rightIcon,
    rightText,
    ...inputProps
  } = props;
  const theme = useExtendedTheme();
  const styles = makeStyles(theme);

  const inputRef = React.useRef<ReactTextInput>(null);
  React.useImperativeHandle(ref, () => ({
    focus: (): void => {
      if (inputRef?.current) inputRef.current.focus();
    },
  }));

  const selectionColor =
    Platform.OS === 'android' ? theme.colors.primary : undefined;
  return (
    <View>
      <PaperTextInput
        ref={inputRef}
        style={[styles.textInput, style]}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        textContentType={props.secureTextEntry ? 'oneTimeCode' : 'none'} // "oneTimeCode" is workaround to avoid iOS 12 "strong password" autofill overlay on secure input password fields (ISSUE TRACKING: https://github.com/facebook/react-native/issues/21911)
        underlineColor={theme.colors.surface}
        selectionColor={selectionColor}
        right={
          rightIcon?.name ? (
            <PaperTextInput.Icon
              icon={rightIcon.name}
              forceTextInputFocus={false}
              onPress={rightIcon?.onPress}
              color={rightIcon?.color}
            />
          ) : rightText?.text ? (
            <PaperTextInput.Affix
              text={rightText.text}
              textStyle={rightText.style}
            />
          ) : undefined
        }
        error={error}
        {...inputProps}
      />
      {helperText && !error && (
        <View style={{flexDirection: 'row'}}>
          <HelperText type="info">
            <Text variant="bodySmall" style={styles.helperText}>
              {helperText}
            </Text>
          </HelperText>
          {helperTextRight && (
            <>
              <Spacer flex={1} />
              <HelperText type="info">
                <Text variant="bodySmall" style={styles.helperTextRight}>
                  {helperTextRight}
                </Text>
              </HelperText>
            </>
          )}
        </View>
      )}

      {error && errorText && (
        <HelperText type="error">
          <Text variant="bodySmall" style={styles.errorText}>
            {errorText}
          </Text>
        </HelperText>
      )}
    </View>
  );
};
// Necessary to allow use of ref (to pass focus to next TextInput on submit)
export const TextInput = React.forwardRef(TextInputRender);
TextInput.displayName = 'TextInput'; // Set a display name for testing with shallow renders
