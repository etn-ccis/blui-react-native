import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {DrawerFooterExample} from './DrawerFooterExample';

const codeSnippet = `<Drawer style={{width: 320, margin: 'auto'}}>
        <DrawerBody>
          <DrawerNavItem
            itemID={'account'}
            title={'Account'}
            icon={{
              family: 'material-community',
              name: 'account',
              direction: 'auto',
            }}
          />
          <DrawerNavItem
            itemID={'notification'}
            title={'Notification'}
            icon={{
              family: 'material-community',
              name: 'bell',
              direction: 'auto',
            }}
            activeItemBackgroundShape={'round'}
          />
        </DrawerBody>
        <DrawerFooter>
          <View style={{padding: 16}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.onSurface,
                }}>
                v2.4.2
              </Text>
              <Text style={{fontSize: 12, color: theme.colors.onSurface}}>
                10:33:05 05/12/2024
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{uri: EatonLogoLight}}
                style={{height: 32, width: '36%'}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.onSurface,
                  width: '39%',
                }}>
                {'Copyright © Eaton All Rights Reserved'}
              </Text>
            </View>
          </View>
        </DrawerFooter>
      </Drawer>`;

export const DrawerFooter = (): JSX.Element => (
  <Box>
    <DrawerFooterExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine='23-64' />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerFooter/examples/DrawerFooterExample.tsx"
    />
  </Box>
);
