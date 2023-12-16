import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../screens/Home';
import { Feedback } from '../screens/Feedback';
import { New } from '../screens/New';
import { Statistics } from '../screens/Statistics';

type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  New: undefined;
  Feedback: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Statistics" component={Statistics} />

        <Stack.Screen name="New" component={New} />

        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };
