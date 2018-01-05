/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class DetailView extends Component<{}> {
 buttonPress(){console.log("press")}
 
 view = (
  <View style={styles.container}>
   <Button
     //containerViewStyle={styles.buttonContainer}
     color="#E91E63"
     title='BUTTON WITH ICON' />
  
    <TouchableHighlight
       loading={true}
       style={styles.button} >
      <Text> Touch Here </Text>
    </TouchableHighlight>
  </View>
 )

 render() {
    return this.view
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,

  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  countText: {
    color: '#FF00FF'
  },

  buttonContainer: {
    width: "50%"
  }
})



export default DetailView
