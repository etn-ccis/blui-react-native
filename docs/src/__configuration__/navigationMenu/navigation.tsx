import React from 'react';
import {RouteProps} from 'react-router';
import {HomePage} from '../../pages';

export type RouteConfig = Omit<RouteProps, 'children'> & {
  title: string;
  icon?: JSX.Element;
  pages?: RouteConfig[];
  children?: RouteConfig[];
  hidden?: boolean;
};

export const pageDefinitions: RouteConfig[] = [
  {
    title: 'Home',
    path: '/',
    element: <HomePage />,
    hidden: true,
  },
];
