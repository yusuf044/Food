import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Routes />
    </View>
  );
};

export default App;
