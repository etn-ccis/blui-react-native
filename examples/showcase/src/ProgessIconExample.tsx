import React from 'react';
import {View} from 'react-native';
import {
  Battery,
  Heart,
  Pie,
  Ups,
} from '@brightlayer-ui/react-native-progress-icons';
import {Text} from 'react-native-paper';

const ProgessIconExample: React.FC = () => (
  <View style={{marginTop: 20}}>
    <Text variant="titleMedium" style={{color: 'black'}}>
      React Native Progres icon
    </Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Battery
        percent={50}
        size={50}
        color={'green'}
        charging={true}
        outlined={false}
      />
      <Heart percent={50} size={50} color={'red'} outlined={true} />
      <Pie percent={50} size={50} color={'blue'} ring={4} outlined={true} />
      <Ups percent={50} size={50} color={'pink'} outlined={true} />
    </View>
  </View>
);

export default ProgessIconExample;
