import React, { Component } from 'react'
import { Button, Alert } from 'react-native'

class Button2 extends Component {
    handlePress = () => {
        Alert.alert('You tapped the button!');
    }
    
    render() {
      return (
        <Button
            onPress = {this.handlePress}
            title = {this.props.title}
            color = "red"
        />    
      )
    }
}
export default Button2
