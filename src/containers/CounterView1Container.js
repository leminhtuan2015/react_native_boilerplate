import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CounterView1 from '../components/views/CounterView1.js';

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT1' }) },
  decrement: () => { dispatch({ type: 'DECREMENT1' }) },
  reset: () => { dispatch({ type: 'RESET1' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView1)
