import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

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
        id: 'edit',
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
        id: 'add'
      }
    ],

    leftButtons: [
      {
        title: 'Cancel',
        id: 'edit',
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
        id: 'add'
      }
    ]

  };

  buttonPress = () => {
    console.log("press")
    this.props.navigator.popToRoot({
    animated: true,
    animationType: 'fade',
  });
}
 
view = (
  <View style={styles.container}>
    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={() => {}}/>
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

