import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import  {NavigationContainer}  from "@react-navigation/native";

import firebase from 'firebase';
import { firebaseConfig } from './config';

import { RFValue } from 'react-native-responsive-fontsize';
import Home from "./Navigation/Home"
import MyRecipe from "./Navigation/MyRecipes"
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import StackNavigator from "./Navigation/StackNavigator"
import Profile from "./Navigation/Profile"
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
import BottomTabNavigator from "./Navigation/TabNavigator";
export default class App extends Component {
  render() {
     
    return (
      <NavigationContainer>
     
<StackNavigator>
<AppContainer/>
   <BottomTabNavigator />
   </StackNavigator>
   
</NavigationContainer>
 


    )
  }
  }

var AppNavigator = createSwitchNavigator({
Profile:Profile,
 MyRecipe : MyRecipe,

})

const AppContainer = createAppContainer(AppNavigator)
