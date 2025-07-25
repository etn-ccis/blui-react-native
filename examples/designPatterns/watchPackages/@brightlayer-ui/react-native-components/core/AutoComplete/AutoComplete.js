import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput as RNTextInput,
  TouchableHighlight,
  Platform,
} from 'react-native';
import {HelperText, Text} from 'react-native-paper';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {Chip} from '../Chip/index.js';
import MatIcon from '@react-native-vector-icons/material-icons';
const AutocompleteStyles = (theme, filterOptions, selected) =>
  StyleSheet.create({
    optionText: {color: theme.colors.onSurfaceVariant, marginHorizontal: 16},
    labelStyle: {
      paddingTop: 4,
      paddingHorizontal: 6,
      paddingVertical: 0,
      color: selected ? theme.colors.onSurfaceVariant : theme.colors.primary,
    },
    individualTextInputWrapper: {
      marginHorizontal: -1,
      marginVertical: 4,
      minHeight: 20,
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    iconWrapper: {width: '7%', paddingTop: 8},
    selectorContainer: {
      backgroundColor: theme.colors.surfaceVariant,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomWidth: 2,
      paddingTop: 8,
      paddingBottom: 8,
      paddingHorizontal: 10,
      borderBottomColor: selected
        ? theme.colors.onSurfaceVariant
        : theme.colors.primary,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      flex: 1,
    },
    chip: {
      marginHorizontal: 6,
      marginVertical: 6,
    },
    dropDownItem: {
      paddingBottom: 12,
      flexDirection: 'row',
      flex: 1,
    },
    tagTextInput: {
      fontSize: 16,
      marginTop: Platform.OS === 'android' ? 0 : 13,
      marginLeft: Platform.OS === 'android' ? 4 : 8,
      marginBottom: Platform.OS === 'android' ? 0 : 13,
    },
    tagInput: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingRight: 12,
    },
    dropDownMenuTags: {
      paddingRight: 16,
      backgroundColor: theme.colors.surfaceVariant,
      paddingTop: filterOptions.length < 1 ? 0 : 12,
      paddingBottom: filterOptions.length < 1 ? 0 : 6,
      maxHeight: 150,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    tagInputWrapper: {paddingTop: 5, paddingHorizontal: 2, flexShrink: 1},
    bottomMargin: {
      paddingBottom: 18,
    },
    helpersWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    helper: {
      flexShrink: 1,
    },
    counterHelper: {
      textAlign: 'right',
    },
  });
export const AutoComplete = props => {
  const {
    theme: themeOverride,
    value = [],
    options = [],
    limitTags = 6,
    tagCharacterLimit = 16,
    helperText,
    tagInputFieldProps,
    ChipProps,
    onChange,
    onDelete,
    label = '',
    styles,
    disabled = false,
    allowCustomTag = false,
  } = props;
  const theme = useExtendedTheme(themeOverride);
  function filterChips(chipOptions, chipValue) {
    return chipOptions.filter(
      option => chipValue.findIndex(item => item === option) === -1,
    );
  }
  const [filterOptions, setFilterOptions] = useState(
    filterChips(options, value),
  );
  const [hideDropDownTags, setHideDropDownTags] = useState(true);
  const [textInput, setTextInput] = useState('');
  const tagInputRef = useRef(null);
  const defaultStyles = AutocompleteStyles(
    theme,
    filterOptions,
    hideDropDownTags,
  );
  const handleTextInputPress = () => {
    tagInputRef.current?.focus();
  };
  const handleTextInputFocus = () => {
    setHideDropDownTags(false);
  };
  const handleOnBlurTags = () => {
    setHideDropDownTags(true);
  };
  const handleOnChangeText = text => {
    if (text.length <= tagCharacterLimit && value.length < limitTags) {
      setTextInput(text);
      const searchData = filterChips(options, value);
      let arr;
      if (text === '') {
        arr = searchData;
      } else {
        arr = searchData.filter(str =>
          str.toLowerCase().includes(text.toLowerCase()),
        );
      }
      setFilterOptions(arr);
    }
  };
  const handleSubmitText = () => {
    if (value.length < limitTags && textInput.length >= 1) {
      if (allowCustomTag === true || filterOptions.includes(textInput)) {
        const newChip = [...value];
        newChip.push(textInput);
        setFilterOptions(filterChips(options, newChip));
        setTextInput('');
        if (onChange) {
          onChange(newChip);
        }
      }
    }
  };
  const onTagsSelected = tag => {
    if (value.length < limitTags) {
      const newChip = [...value];
      newChip.push(tag);
      setFilterOptions(filterChips(options, newChip));
      setTextInput('');
      if (onChange) {
        onChange(newChip);
      }
    }
  };
  const removeChipItem = item => {
    const arr = value.filter(str => str !== item);
    setFilterOptions(filterChips(options, arr));
    if (onDelete) {
      onDelete(item);
    }
  };
  return React.createElement(
    View,
    {
      style: [
        defaultStyles.individualTextInputWrapper,
        defaultStyles.tagInputWrapper,
        styles?.root,
      ],
    },
    React.createElement(
      View,
      null,
      React.createElement(
        TouchableHighlight,
        {onPress: handleTextInputPress},
        React.createElement(
          View,
          {style: defaultStyles.selectorContainer},
          React.createElement(
            View,
            {style: {width: '93%'}},
            !hideDropDownTags || value.length > 0
              ? React.createElement(
                  HelperText,
                  {style: defaultStyles.labelStyle, type: 'info'},
                  !hideDropDownTags || value.length > 0 ? label : '',
                  ' ',
                )
              : null,
            React.createElement(
              View,
              {style: [defaultStyles.tagInput, styles?.textInputContainer]},
              value.map(item =>
                React.createElement(
                  Chip,
                  {
                    key: item,
                    style: [defaultStyles.chip, styles?.chip],
                    borderColor: theme.colors.outline,
                    textColor: theme.colors.onSurfaceVariant,
                    disabled: disabled,
                    onClose: () => {
                      removeChipItem(item);
                    },
                    ...ChipProps,
                  },
                  item,
                ),
              ),
              React.createElement(RNTextInput, {
                testID: 'tagInput',
                ref: tagInputRef,
                selectionColor: theme.colors.primary,
                value: textInput,
                placeholderTextColor: theme.colors.onSurfaceVariant,
                placeholder: hideDropDownTags && value.length < 1 ? label : '',
                onChangeText: e => handleOnChangeText(e),
                style: [defaultStyles.tagTextInput, styles?.textInput],
                onBlur: handleOnBlurTags,
                onFocus: handleTextInputFocus,
                blurOnSubmit: false,
                onSubmitEditing: handleSubmitText,
                autoCorrect: false,
                editable: !disabled && value.length < limitTags,
                ...tagInputFieldProps,
              }),
            ),
          ),
          React.createElement(
            View,
            {style: defaultStyles.iconWrapper},
            hideDropDownTags
              ? React.createElement(MatIcon, {
                  name: 'arrow-drop-down',
                  size: 24,
                })
              : React.createElement(MatIcon, {name: 'arrow-drop-up', size: 24}),
          ),
        ),
      ),
    ),
    !hideDropDownTags &&
      !disabled &&
      React.createElement(
        View,
        {style: [defaultStyles.dropDownMenuTags, styles?.dropdownContainer]},
        React.createElement(
          ScrollView,
          {
            testID: 'dropDownMenuTags',
            nestedScrollEnabled: true,
            keyboardShouldPersistTaps: 'handled',
          },
          filterOptions.map((item, index) =>
            React.createElement(
              TouchableOpacity,
              {
                key: index,
                style: [defaultStyles.dropDownItem, styles?.dropdownItem],
                onPress: () => onTagsSelected(item),
              },
              React.createElement(
                Text,
                {style: [defaultStyles.optionText]},
                item,
              ),
            ),
          ),
        ),
      ),
    React.createElement(
      View,
      {style: [defaultStyles.helpersWrapper, styles?.helperContainer]},
      React.createElement(
        HelperText,
        {
          type: 'info',
          style: [defaultStyles.helper, styles?.helperText],
          visible: true,
        },
        helperText ? helperText : '',
      ),
      React.createElement(
        HelperText,
        {
          type: 'info',
          visible: true,
          style: [defaultStyles.counterHelper, styles?.helperCounter],
        },
        textInput.length,
        ' / ',
        tagCharacterLimit,
      ),
    ),
    React.createElement(View, {style: [defaultStyles.bottomMargin]}),
  );
};
