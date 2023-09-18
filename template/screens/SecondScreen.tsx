import * as React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

export default function SecondScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>
          React Native navigation, redux, redux toolkit hazırlanmış sürümünü
          yüklediniz.
        </Text>
      </View>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Main"
          onPress={() => navigation.navigate('Main')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>
  );
}
