import React, {ReactNode} from 'react';
import {AllSharedProps} from './types.js';
/**
 * mergeStyleProp function
 *
 * This function takes a parent value and a child value as arguments. It returns the child value if it is
 * defined, otherwise it returns the parent value.
 *
 * @param parentValue The value of the property on the parent
 * @param childValue The value of the property on the child
 * @returns The child value if it is defined, otherwise the parent value
 */
export declare const mergeStyleProp: <T extends unknown>(
  parentValue: T,
  childValue: T,
) => T | undefined;
/**
 * inheritSharedProps function
 *
 * This function will take the properties object for a parent and a child and return an object
 * that represents the properly inherited props for the child. If a property is specified for the
 * child, that value will be used. If the value is undefined, it will use the value of the property
 * from the parent.
 *
 * @param parent object representation of the props of the parent element
 * @param child object representation of the props of the child element
 * @returns an object representing the child props with any undefined properties replaced by the parent values.
 */
export declare const inheritSharedProps: (
  parent: AllSharedProps,
  child: AllSharedProps,
) => AllSharedProps;
/**
 * findChildByType function
 *
 * This function searches the `children` array of a component and returns an array of child elements
 * whose displayName is included in the supplied list.
 *
 * @param children the children property of a react component
 * @param type an array of displayName values to search for
 * @returns an array of child elements whose displayName is in the search array
 */
export declare const findChildByType: (
  children: ReactNode,
  type: string[],
) => React.JSX.Element[];
