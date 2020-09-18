import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ExploreScreen from './src/screens/Explore';
import SubscriptionsScreen from './src/screens/Subscriptions';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName =
            'https://toppng.com/uploads/preview/home-family-house-icon-home-icon-ios-11553392707bgapvjo9ic.png';
        } else if (route.name === 'Explore') {
          iconName =
            'https://www.iconfinder.com/data/icons/google-material-design-icons/48/ic_explore_48px-512.png';
        } else if (route.name === 'Subscriptions') {
          iconName =
            'https://cdn.iconscout.com/icon/free/png-512/subscriptions-1779801-1513966.png';
        }

        // You can return any component that you like here!
        return (
          <Image source={{uri: iconName}} style={{width: 32, height: 32}} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
