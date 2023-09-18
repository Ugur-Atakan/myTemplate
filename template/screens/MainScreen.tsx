import * as React from 'react';
import {View} from 'react-native';
import {Text, Button, Icon, Card} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CardTitle} from '@rneui/base/dist/Card/Card.Title';
export default function MainScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaProvider>
      <View>
        <Text>
          React Native navigation, redux, redux toolkit hazırlanmış sürümünü
          yüklediniz.
        </Text>
        <Button
          radius={'sm'}
          type="solid"
          onPress={() => navigation.navigate('Second')}>
          Go to Second{' '}
          <Icon
            name="arrow-right"
            size={24}
            color="white"
            type="font-awesome"
          />
        </Button>
      </View>
      <View>
        <Card>
          <CardTitle>CARD WITH DIVIDER</CardTitle>
          <Card.Divider />
          <Text h1>h1 Heading</Text>

          <Card.Divider />
          <Text h2>h2 Heading</Text>
          <Text h3>h3 Heading</Text>
          <Text h4>h4 Heading</Text>
        </Card>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon
          raised
          name="heart"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log('hello')}
        />
      </View>
    </SafeAreaProvider>
  );
}
