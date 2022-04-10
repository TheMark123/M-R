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
import firebase from 'firebase';
import { firebaseConfig } from '../config';
import { RFValue } from 'react-native-responsive-fontsize';
import MyRecipes from "./MyRecipes"
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default class Profile extends Component {
  
  render() {
    return (
      <View style={styles.container1}>
        <ImageBackground
          style={styles.background}
          source={require('../assets/Test1.jpg')}>
          <View>
            <View>
              <Image
                style={styles.appTitle}
                source={require('../assets/Header.PNG')}></Image>
            </View>

            <View style={styles.container}>
              <TouchableOpacity
                 onPress={this.props.navigation.navigate("MyRecipe")} 
                style={styles.button}>
                <Text>My Recipes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text>Saved Recipes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text>Options</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text>Challenges</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 120,

    flexDirection: 'column',

    marginTop: 20,
    height: 80,
    justifyContent: 'center',
    borderRadius: 20,
  },

  appTitle: {
    resizeMode: 'contain',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  background: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '',
    height: '100%',
  },
});
