import React, { Component } from 'react'
import { Button, Alert } from 'react-native'

const Button1 = () => {
    const handlePress = () => {
        Alert.alert('You tapped the button!');
    }
    
    return (
        <Button
            onPress = {handlePress}
            title = "Red button!"
            color = "red"
        />    
    )
}
export default Button1
