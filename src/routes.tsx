import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScene from './screens/Home';
import RestaurantScene from './screens/Restaurant';

export type RootStackParamsList = {
  Home: undefined;
  Restaurant: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScene} />
        <Stack.Screen name="Restaurant" component={RestaurantScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
// ------
