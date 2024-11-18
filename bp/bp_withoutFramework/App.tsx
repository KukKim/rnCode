// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store';
import {HomeScreen, OptionScreen} from './src/components/screens';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionScreen} />
      </Stack.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
