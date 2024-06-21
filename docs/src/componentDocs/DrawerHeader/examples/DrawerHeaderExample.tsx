import React from 'react';
import {Drawer, DrawerHeader} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const DrawerHeaderExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerHeader title="Title" subtitle="Subtitle" icon={{name: 'menu'}} />
    </Drawer>
  </ExampleShowcase>
);
