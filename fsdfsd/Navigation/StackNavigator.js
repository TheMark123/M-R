import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import RecipeScreen from '../Navigation/RecipeScreen';
import MyRecipe from './MyRecipes';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppContainer from "../App"
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: null,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="MyRecipe" component={AppContainer} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
