import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'CocktailFinder',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        options={{title: 'CocktailFinder'}}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};
