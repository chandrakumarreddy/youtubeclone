import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
// import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          bounces="off"
          showsVerticalScrollIndicator={false}
          snapToAlignment="center">
          <View style={styles.Container}>
            {/* <HomeScreen /> */}
            <SearchScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
