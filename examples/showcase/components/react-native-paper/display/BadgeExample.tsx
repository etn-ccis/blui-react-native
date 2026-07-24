import React, { JSX } from 'react';
import { View } from 'react-native';
import { Badge, Card, Text } from 'react-native-paper';
import { DISABLE_FONT_SCALE, MAX_FONT_SCALE } from '../../../constants';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const BadgeExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Badge</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <Badge
          size={24}
          visible
          allowFontScaling={!DISABLE_FONT_SCALE}
          maxFontSizeMultiplier={MAX_FONT_SCALE}
        />
        <Badge
          size={24}
          visible
          allowFontScaling={!DISABLE_FONT_SCALE}
          maxFontSizeMultiplier={MAX_FONT_SCALE}
        >
          3
        </Badge>
        <Badge
          size={40}
          visible
          allowFontScaling={!DISABLE_FONT_SCALE}
          maxFontSizeMultiplier={MAX_FONT_SCALE}
        >
          8
        </Badge>
        <Badge size={24} visible />
        <Badge size={24} visible>
          3
        </Badge>
        <Badge size={40} visible>
          8
        </Badge>
      </View>
    </View>
  </Card>
);
