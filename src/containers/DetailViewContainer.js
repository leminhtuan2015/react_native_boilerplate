import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import DetailView from '../components/screens/DetailView.js';

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

const DetailViewContainer = connect(mapStateToProps, mapDispatchToProps)(DetailView)

export default DetailViewContainer 
