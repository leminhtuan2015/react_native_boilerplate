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
  state = {}
 
  constructor(props) {
    super(props);
    
    this.state.data = this.props.data.DetailReducer.data
    
    // if you want to listen on navigator events, set this up
    //this.props.navigator
    //  .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  
  }

  onNavigatorEvent(event) {
    console.log(event.type)
    if (event.type == 'ScreenChangedEvent') {
      console.log("data haha : " + JSON.stringify(this.props.data.DetailReducer.data))
    
      this.setState({data: this.props.data.DetailReducer.data})
    }
  }

  buttonPress = () => {
    console.log("press")
    this.props.navigator.popToRoot({
      animated: true,
      animationType: 'fade',
    });
  }

  editButtonPress = () => {
    console.log("press")
    this.props.navigator.push({
      screen: "EditViewContainer",      
    });
  }
 
  render() {
    return (
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

        <Text>{this.state.data.name}</Text>
      </View>
    </View>
   )
 
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
