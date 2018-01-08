import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CounterView1 extends Component {
  render() {
    return (
      <View style={{backgroundColor: "red"}}>
        <Button
          title="Counter1 Up"
          onPress={this.props.increment}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.data.CountReducer1.number1}
        </Text>

        <Button
          title="Counter1 Down"
          onPress={this.props.decrement}/>
        
        <Text
          style={styles.counter}>
          {this.props.data.CountReducer.number}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
