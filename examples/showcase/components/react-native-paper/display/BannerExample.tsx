import React, { JSX } from 'react';
import { View } from 'react-native';
import { Avatar, Banner, Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const BannerExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();
  const [bannerVisible, setBannerVisible] = React.useState(true);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Banner</Text>
        <View style={{ marginTop: 24 }}>
          <Banner
            visible={bannerVisible}
            actions={[
              { label: 'Fix it', onPress: () => setBannerVisible(false) },
              { label: 'Learn more', onPress: () => setBannerVisible(false) },
            ]}
            icon={props => (
              <Avatar.Icon
                {...props}
                icon="account-circle"
                color={theme.colors.onPrimary}
              />
            )}
          >
            There was a problem processing a transaction on your credit card.
          </Banner>
          {!bannerVisible && (
            <Button
              mode={'contained'}
              onPress={(): void => setBannerVisible(true)}
            >
              Show Banner
            </Button>
          )}
        </View>
      </View>
    </Card>
  );
};
