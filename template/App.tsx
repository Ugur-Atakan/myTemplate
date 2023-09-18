import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import {Provider} from 'react-redux';
import {store} from './utils/redux/stores/store';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Main" component={MainScreen} />
          <Drawer.Screen name="Second" component={SecondScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
