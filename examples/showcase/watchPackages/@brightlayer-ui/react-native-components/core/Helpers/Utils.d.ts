/**
 * Interleave function
 *
 * This function is used to interleave a 'separator' element between the items of an array.
 *
 * @param array An array of initial elements
 * @param separator The separator to inject between all array elements
 * @returns a new array with a separator inserted between each of the original items
 */
export declare const interleave: <TElement, TSeparator>(array: TElement[], separator: () => TSeparator) => Array<TSeparator | TElement>;
export type LabeledArrays<T> = Record<string, T[]>;
/**
 * groupBy function
 *
 * This function is used to group items from a flat list into buckets
 *
 * @param getGroup A function that takes an item and returns the group that it should belong to as a string
 * @param array The array of elements to group
 * @returns An object whose keys are the groups and values are the elements from the original array who belong in that bucket
 */
export declare const groupBy: <T>(getGroup: (data: T) => string, array: T[]) => LabeledArrays<T>;
