/**
 * @packageDocumentation
 * @module ErrorContext
 */
import { ErrorManagerProps } from '../../components/Error/types.js';
export type ErrorContextProviderProps = Omit<ErrorManagerProps, 'error'>;
