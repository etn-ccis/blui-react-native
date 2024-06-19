import React from 'react';
import {EmptyState} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {Text} from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';

export const EmptyStateWithContentExample = (): JSX.Element => (
  <ExampleShowcase>
    <EmptyState
      icon={{name: 'report'}}
      title={<Text style={{color: Colors.blue[500]}}>Request Permission</Text>}
      description={
        <Text>
          You must{' '}
          <Text
            style={{textDecorationLine: 'underline', color: Colors.blue[500]}}>
            contact your system admin
          </Text>{' '}
          to view this content.
        </Text>
      }
    />
  </ExampleShowcase>
);
