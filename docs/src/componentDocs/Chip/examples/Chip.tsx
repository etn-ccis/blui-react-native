import React from 'react';
import {Box} from '@mui/material';
import {ChipExample} from './ChipExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Chip>Outlined Chip</Chip>
<Chip icon={{name: 'info'}}>Outlined Chip With Icon</Chip>
<Chip avatar={<Avatar.Icon size={40} icon="account-circle" />}>Outlined Chip With Avatar</Chip>
<Chip closeIcon="delete" onClose={() => {}}>Outlined Chip With Close Icon</Chip>
<Chip selected>Selected Outlined Chip</Chip>
<Chip selected showSelectedOverlay>Selected Outlined Chip With Overlay</Chip>
<Chip selected showSelectedCheck>Selected Outlined Chip With Check</Chip>
<Chip rippleColor={BLUIColors.primary[50]} onPress={() => {}}>Outlined Chip With Ripple Color</Chip>
<Chip disabled>Disabled Outlined Chip</Chip>
<Chip onPress={() => {}}>Outlined Chip On Press</Chip>
<Chip onPress={() => {}} onLongPress={() => {}}>Outlined Chip On Long Press</Chip>
<Chip onPressIn={() => {})}>Outlined Chip On Press In</Chip>
<Chip onPressOut={() => {}}>Outlined Chip On Press Out</Chip>
<Chip onClose={(): void => {}}>Outlined Chip On Close</Chip>
<Chip
      delayLongPress={3000}
      onPress={() => console.log('outlined chip pressed')}
      onLongPress={() =>
        console.log('outlined chip long pressed for 3 seconds')
      }
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip Delay Long Press
    </Chip>
    <Chip
      compact
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Compact Outlined Chip
    </Chip>
    <Chip
      //   textStyle={{color: BLUIColors.neutralVariant[50]}}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Text Style
    </Chip>
    <Chip
      style={{
        marginTop: 10,
        marginRight: 5,
        // backgroundColor: BLUIColors.neutralVariant[50],
      }}>
      Outlined Chip With Style
    </Chip>
    <Chip
      ellipsizeMode="middle"
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Ellipsize Mode Outlined Chip With Ellipsize Mode
    </Chip>
    <Chip
      icon={{name: 'info'}}
      //   iconColor={BLUIColors.error[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Icon Color
    </Chip>
    <Chip
      //   chipColor={BLUIColors.primary[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Chip Color
    </Chip>
    <Chip
      //   borderColor={BLUIColors.primary[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Border Color
    </Chip>`;

export const Chip = (): JSX.Element => (
  <Box>
    <ChipExample />
    <CodeBlock code={codeSnippet} language={'jsx'} />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Chip/examples/Chip.tsx"
    />
  </Box>
);
