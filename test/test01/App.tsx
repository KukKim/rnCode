// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store';
import {
  HomeScreen,
  OptionScreen,
  LoginScreen,
  SignupScreen,
  TestStyleScreen,
  TestListScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();
// store.dispatch()

function RootStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionScreen} />
        <Stack.Screen name="TestStyle" component={TestStyleScreen} />
        <Stack.Screen name="TestList" component={TestListScreen} />

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Group>
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
