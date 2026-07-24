import React, { JSX } from 'react';
import { Card } from 'react-native-paper';
import { FlatTextInputExample } from './FlatTextInputExample';
import { OutlinedTextInputExample } from './OutlinedTextInputExample';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const TextFieldCard: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <FlatTextInputExample />
    <OutlinedTextInputExample />
  </Card>
);
