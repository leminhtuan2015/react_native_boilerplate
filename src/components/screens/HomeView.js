/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'

import * as ActionTypes from "../../constants/ActionTypes"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


class HomeView extends Component<{}> {
  constructor(props) {
    super(props);
  }

  onSelectedItem = (itemIndex) => {
    let user = this.props.users[itemIndex]
    this.props.dispatch({type: ActionTypes.SET_DETAIL_DATA, data: user})
    
    this.props.navigator.push({
      screen: "DetailViewContainer",
      title: "Detail",
      backButtonTitle: "Home",
    })
 }

 render() {
    return (
      <View style={styles.container}>
        <SearchBar
          round
          lightTheme
          placeholder='Type Here...' />
        <ScrollView>          
        <List scrollEnabled={true}  style={styles.listView}>
          {
            this.props.users.map((user, index) => (
              <ListItem
                onPress={()=>this.onSelectedItem(index)}
                roundAvatar
                avatar={{uri:user.avatar_url}}
                key={index}
                title={user.name}
              />
            ))
          }
        </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  listView: {
    flex: 1,
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
