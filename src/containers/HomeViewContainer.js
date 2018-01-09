import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import HomeView from '../components/screens/HomeView.js';

// 'stateObject' is the object store.getState() from <Provider store={Store}>
// Provider is given the store as a prop
const mapStateToProps = (stateObject) => ({
  data: stateObject,
})

// 'dispatch' is the state.dispath from <Provider store={Store}>
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({setDetailData: () => {console.log("1111111111")}}, dispatch)
)

//const HomeViewContainer = connect(mapStateToProps, mapDispatchToProps)(HomeView)
const HomeViewContainer = connect(mapStateToProps)(HomeView)

export default HomeViewContainer 
