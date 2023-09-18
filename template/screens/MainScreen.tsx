import * as React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

export default function MainScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>
          React Native navigation, redux, redux toolkit hazırlanmış sürümünü
          yüklediniz.
        </Text>
        <Text>Home Screen</Text>
        <Button
          title="Go to Second"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
    </SafeAreaView>
  );
}
