/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './src/Main';

const App: () => React$Node = () => {
  return (
     <View style={styles.container1}>
    <Main/>
    </View>
  );
};


const styles = StyleSheet.create({
  container1: {
    flex:1
  }
});

export default App;
