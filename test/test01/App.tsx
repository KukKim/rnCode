// In App.js in a new project
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {
  HomeScreen,
  LoginScreen,
  OptionScreen,
  SignupScreen,
  TestListScreen,
  TestNavigationScreen,
  TestPanresponderScreen,
  TestStyleScreen,
  TestTabScreen,
} from './src/screens';
import store from './src/store';

const Stack = createNativeStackNavigator();
// store.dispatch()

function RootStack() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Options" component={OptionScreen} />
          <Stack.Screen name="TestStyle" component={TestStyleScreen} />
          <Stack.Screen name="TestList" component={TestListScreen} />
          <Stack.Screen
            name="TestPanresponder"
            component={TestPanresponderScreen}
          />
          <Stack.Screen name="TestTab" component={TestTabScreen} />
          <Stack.Screen
            name="TestNavigation"
            component={TestNavigationScreen}
          />

          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </GestureHandlerRootView>
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
