import {View, SafeAreaView, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTab, OptionTab} from './tab';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="MainTab" component={MainTab} />
      <Tab.Screen name="OptionTab" component={OptionTab} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
