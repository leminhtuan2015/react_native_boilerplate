/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import Button1 from '../views/Button1'
import Button2 from '../views/Button2'
import CounterViewContainer from '../../containers/CounterViewContainer.js';
import Store from '../../store/Store.js';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeView extends Component<{}> {
  
  state = {value: 10}

  buttonPress2 = () => {
    console.log("press")
    
    this.props.navigator.push({
      screen: 'UserDetailViewContainer',
      title: "UserDetail",
    });
  }

  buttonPress1 = () => {
    console.log("hello")
    
    this.setState({value: (this.state.value + 1)}) 
  }
 
  buttonPress = () => {
    console.log("press")
    
    this.props.navigator.push({
      screen: 'DetailView',
      title: "Detail",
    });
  }
 
 render() {
    return (
      <Provider store={Store}>
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
        <Button1 title="Button 1 props" />
        <Button2 title="Button 2 props" />
        <Button2 />

        <Text>Current State: {this.state.value}</Text>

        <Button
          onPress={this.buttonPress}
          title="Push Detail Component"
          color="#841584"
        />

        <Button
          onPress={this.buttonPress2}
          title="Push User Detail Component"
          color="#841584"
        />

        <Button
          onPress={this.buttonPress1}
          title="Change State"
          color="#841584"
        />
        
        <CounterViewContainer/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default  HomeView
