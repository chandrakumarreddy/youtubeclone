import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Image} from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ExploreScreen from './src/screens/Explore';
import SubscriptionsScreen from './src/screens/Subscriptions';
import VideoPlayer from './src/screens/VideoPlayer';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    white: '#fff',
    fontWhite: '#ffffff',
    inactive: '#898989',
  },
};

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: '#fff',
    white: '#000',
    fontWhite: '#000000',
    inactive: '#898989',
  },
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const iconColor = color.slice(1);
          let iconName;

          if (route.name === 'Home') {
            iconName = `https://img.icons8.com/ios-glyphs/50/${iconColor}/home-page.png`;
          } else if (route.name === 'Explore') {
            iconName = `https://img.icons8.com/ios-glyphs/30/${iconColor}/compass.png`;
          } else if (route.name === 'Subscriptions') {
            iconName = `https://img.icons8.com/fluent-systems-filled/24/${iconColor}/video-playlist.png`;
          }
          return (
            <Image source={{uri: iconName}} style={{width: 32, height: 32}} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.fontWhite,
        inactiveTintColor: colors.inactive,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer theme={CustomDarkTheme}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
