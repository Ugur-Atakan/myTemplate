import * as React from 'react';
import {View} from 'react-native';
import {Text, Button, Icon} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
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
    </SafeAreaProvider>
  );
}
