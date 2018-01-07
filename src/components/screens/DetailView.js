/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import Store from '../../store/Store'
import CounterView1Container from '../../containers/CounterView1Container'

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
  <Provider store={Store}>
  <View style={styles.container}>
   <Button
    onPress={this.buttonPress}
     color="#E91E63"
     title='BUTTON WITH ICON' />
  
    <TouchableHighlight
       loading={true}
       style={styles.button} >
      <Text> Touch Here {this.props.count}</Text>
    </TouchableHighlight>
   
    <CounterView1Container />
  </View>
  </Provider>
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
