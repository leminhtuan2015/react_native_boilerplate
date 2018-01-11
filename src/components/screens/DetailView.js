import React, { Component } from 'react';
import { Button } from 'react-native-elements'

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

  editButtonPress = () => {
    console.log("press")
    this.props.navigator.showModal({
      screen: "EditViewContainer",      
    });
  }
 
  view = (
    <View style={styles.container}>
     <Button
       onPress={this.buttonPress}
       color="#009688"
       backgroundColor="#FFC107"
       title='Back' />

     <Text></Text>

      <Button
        raised
        onPress={this.editButtonPress}
        backgroundColor="#E41E63"
        icon={{name: 'cached'}}
        title='Edit' />

      <View style={styles.container}>

        <Text>{this.props.data.DetailReducer.data.name}</Text>
      </View>
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
    padding: 10,
    marginTop: 10,

  },
})



export default DetailView
