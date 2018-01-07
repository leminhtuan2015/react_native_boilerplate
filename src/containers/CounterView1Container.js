import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CounterView1 from '../components/views/CounterView1.js';

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = (dispatch) => ({
//  increment: () => { dispatch({ type: 'INCREMENT' }) },
//  decrement: () => { dispatch({ type: 'DECREMENT' }) },
//  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView1)
