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

  buttonPress = () => {
    console.log("press")
    this.props.navigator.popToRoot({
    animated: true,
    animationType: 'fade',
  });
}
 
view = (
  <View style={styles.container}>
   <Button
    onPress={this.buttonPress}
     color="#E91E63"
     title='Back' />
   <Text>{this.props.data.DetailReducer.data.name}</Text>
  </View>
 )

 render() {
    return this.view
  }
}

 var styles = StyleSheet.create({
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
