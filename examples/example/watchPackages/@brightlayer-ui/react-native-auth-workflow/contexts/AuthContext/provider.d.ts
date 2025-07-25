/**
 * @packageDocumentation
 * @module AuthContextProvider
 */
import React from 'react';
import { AuthContextProviderProps } from './types.js';
/**
 * AuthContextProvider allow you to access shared data / configuration / API definition for authentication screens
 * @param {AuthContextProviderProps} props - props for Auth Context Provider
 */
export declare const AuthContextProvider: React.FC<
    React.PropsWithChildren<
        AuthContextProviderProps & {
            PasswordDialog?: React.JSX.Element;
        }
    >
>;
