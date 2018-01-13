import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import * as ActionTypes from "../../constants/ActionTypes"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class EditView extends Component<{}> {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Save',
        id: 'save',
        testID: 'e2e_rules',
        //disabled: true,
        //disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonColor: 'blue',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      },
      { 
        //icon: "",
        id: 'save'
      }
    ],

  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator
      .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'save') {
        console.log('Input Text Value' + this.inputNameText)
        this.inputName.shake()
        var user = this.props.data.DetailReducer.data
        // TODO
        //user.name = this.inputNameText
        let newUser = {name: this.inputNameText} 
        this.props.dispatch({type: ActionTypes.UPDATE_DETAIL_DATA, data: newUser})
      }
      
      if (event.id == 'backPress') {
        console.log('back');
      }
    }
  }

  buttonPress = () => {
    console.log("press")
    this.props.navigator.popToRoot({
      animated: true,
      animationType: 'fade',
    });
  }

  onTextChange = (text) => {
    this.inputNameText = text
  }
 
view = (
  <View style={styles.container}>
    <FormLabel>Name</FormLabel>
    <FormInput
      ref={(inputName) => {this.inputName = inputName}}
      onChangeText={(text) => {this.onTextChange(text)}}
      placeholder="Name"
      defaultValue={this.props.data.DetailReducer.data.name} />
    <FormValidationMessage>Error message</FormValidationMessage>
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



export default EditView

