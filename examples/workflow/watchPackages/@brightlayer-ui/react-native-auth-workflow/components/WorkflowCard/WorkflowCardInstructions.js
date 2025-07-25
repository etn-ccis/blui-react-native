import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
const makeStyles = (isTablet) =>
    StyleSheet.create({
        container: {
            marginHorizontal: isTablet ? 24 : 16,
            paddingTop: isTablet ? 0 : 32,
            paddingBottom: isTablet ? 30 : 40,
        },
        workflowCardInstructions: {
            letterSpacing: 0,
        },
    });
/**
 * Component that renders the instructions content for the workflow card.
 *
 * @param {WorkflowCardInstructionProps} props - Props of WorkflowCardInstruction component
 *
 * @category Component
 */
export const WorkflowCardInstructions = (props) => {
    const { instructions, divider = true, style, ...otherProps } = props;
    const { isTablet } = useScreenDimensions();
    const styles = makeStyles(isTablet);
    return instructions
        ? _jsxs(_Fragment, {
              children: [
                  _jsx(View, {
                      style: [styles.container],
                      children:
                          typeof instructions === 'string'
                              ? _jsx(Text, {
                                    variant: 'bodyLarge',
                                    style: [styles.workflowCardInstructions, style],
                                    ...otherProps,
                                    children: instructions,
                                })
                              : instructions,
                  }),
                  divider && _jsx(Divider, { bold: true }),
              ],
          })
        : null;
};
