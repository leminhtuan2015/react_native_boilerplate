import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CounterView from '../components/views/CounterView.js';

// 'stateObject' is the object from <Provider store={Store}>
// Provider is given the store as a prop
const mapStateToProps = (stateObject) => ({
  data: stateObject
})

// 'dispatch' is the action from <Provider store={Store}>
const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

const CounterViewContainer = connect(mapStateToProps, mapDispatchToProps)(CounterView)

export default CounterViewContainer 
