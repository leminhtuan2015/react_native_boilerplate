/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

class HomeView extends Component<{}> {
  constructor(props) {
    super(props);
    console.log('PushedScreen', 'constructor');
  }

 itemSelected = () => {
    console.log("selected 1" + JSON.stringify(this.props))
    this.props.dispatch({type: "HOME"})
    
//    this.props.navigator.push({
//      screen: "DetailViewContainer",
//      title: "Detail",
//      backButtonTitle: "Home",
//    })
 }

 render() {
    return (
      <View>
        <SearchBar
          round
          lightTheme
          placeholder='Type Here...' />
          
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <ListItem
                onPress={this.itemSelected}
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
              />
            ))
          }
        </List>
      </View>
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
