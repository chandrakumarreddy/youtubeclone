import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.Container}>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;
