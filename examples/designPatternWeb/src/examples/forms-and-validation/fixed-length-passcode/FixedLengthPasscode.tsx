import React, {JSX, useCallback, useEffect, useState} from 'react';
import {Header} from '@brightlayer-ui/react-native-components';
import {
  View,
  StyleSheet,
  ScrollView,
  ViewStyle,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

import {TextInput} from '../shared/TextInput';
import {Button, Divider, Text} from 'react-native-paper';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

const makeStyles = (): StyleSheet.NamedStyles<{
  section: ViewStyle;
  sectionTablet: ViewStyle;
  topDivider: ViewStyle;
  passcodeFormFieldWrapper: ViewStyle;
  passcodeErrorFormFieldWrapper: ViewStyle;
  resetFormButton: ViewStyle;
}> =>
  StyleSheet.create({
    section: {
      padding: 16,
      marginBottom: 32,
    },
    sectionTablet: {
      width: '100%',
      maxWidth: 480,
      alignSelf: 'center',
      paddingTop: 40,
    },
    topDivider: {
      marginTop: 40,
      marginBottom: 32,
      marginHorizontal: -16,
    },
    passcodeFormFieldWrapper: {
      marginBottom: 24.5,
    },
    passcodeErrorFormFieldWrapper: {
      marginBottom: 0,
    },
    resetFormButton: {
      marginTop: 16,
    },
  });

export const FixedLengthPasscodeScreen: React.FC = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<Record<string, undefined>>>();
  const styles = makeStyles();
  const theme = useExtendedTheme();
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });
  const [passcode, setPasscode] = useState('');
  const [passcodeErrorText, setPasscodeErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passcodeSubmitted, setPasscodeSubmitted] = useState(false);
  const [passcodeSuccess, setPasscodeSuccess] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions({window});
    });
    return (): void => subscription?.remove();
  });

  const toggleMenu = (): void => {
    navigation.openDrawer();
  };

  const validatePasscode = useCallback((value: string): void => {
    const tempPasscode = value;
    let tempPasscodeError = '';
    if (tempPasscode.trim().length < 6) {
      tempPasscodeError = 'Please enter a six-digit-passcode';
    }
    setPasscodeErrorText(tempPasscodeError);
  }, []);

  const verifyPasscode = (text: string): void => {
    setPasscodeErrorText('');
    setIsLoading(true);
    setTimeout((): void => {
      if (text === '123456') {
        setPasscodeSuccess(true);
        setPasscodeErrorText('');
      } else {
        setPasscodeSuccess(false);
        setPasscodeErrorText('Invalid Passcode');
      }
      setPasscodeSubmitted(true);
      setIsLoading(false);
    }, 3000);
  };

  const onPasscodeChange = useCallback(
    (text: string) => {
      setPasscode(text);
      if (shouldValidate) validatePasscode(text);
      if (text.length === 6) verifyPasscode(text);
    },
    [validatePasscode, shouldValidate, verifyPasscode],
  );

  const onPasscodeBlur = useCallback((): void => {
    setShouldValidate(true);
    validatePasscode(passcode);
  }, [validatePasscode, passcode]);

  const resetForm = (): void => {
    setPasscode('');
    setPasscodeErrorText('');
    setPasscodeSubmitted(false);
    setPasscodeSuccess(false);
    setShouldValidate(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Header
        title={'Fixed Length Passcode'}
        icon={<MatIcon name="menu" color={theme.colors.onPrimary} size={24} />}
        onIconPress={(): void => {
          toggleMenu();
        }}
      />
      <SafeAreaView>
        <ScrollView>
          <View
            style={[
              styles.section,
              dimensions.window.width < 600 ? {} : styles.sectionTablet,
            ]}>
            <Text variant="bodySmall">
              Please enter the{' '}
              <Text variant="bodyMedium">six-digit passcode</Text> we just send
              to you. The passcode is valid for 15 minutes.
            </Text>
            <Text variant="bodySmall" style={{marginTop: 8}}>
              For the purpose of this demonstration, passcode{' '}
              <Text variant="bodyMedium">123456</Text> will pass. Any other 6
              digit passcode will fail.
            </Text>
            <Divider style={styles.topDivider} />
            <View
              style={
                passcodeErrorText !== ''
                  ? styles.passcodeErrorFormFieldWrapper
                  : styles.passcodeFormFieldWrapper
              }>
              <TextInput
                label="Passcode *"
                value={passcode}
                onChangeText={onPasscodeChange}
                keyboardType={'numeric'}
                error={passcodeErrorText !== ''}
                errorText={passcodeErrorText}
                onBlur={onPasscodeBlur}
                rightIcon={{
                  name:
                    !isLoading && passcodeSubmitted && passcodeSuccess
                      ? 'check'
                      : undefined,
                  color:
                    !isLoading && passcodeSubmitted && passcodeSuccess
                      ? theme.colors.successNonText
                      : undefined,
                }}
                rightText={{
                  text: isLoading ? 'verifying...' : '',
                  style: {color: isLoading ? theme.colors.outline : ''},
                }}
                maxLength={6}
                disabled={isLoading || (passcodeSubmitted && passcodeSuccess)}
              />
            </View>
            <Button
              mode="outlined"
              style={styles.resetFormButton}
              onPress={resetForm}
              icon={(): JSX.Element => (
                <MatIcon
                  name="refresh"
                  color={theme.colors.primaryNonText}
                  size={24}
                />
              )}>
              Reset Form
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
