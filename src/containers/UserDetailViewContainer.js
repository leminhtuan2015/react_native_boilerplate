import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import UserDetailView from '../components/screens/UserDetailView.js';

// 'stateObject' is the object from <Provider store={Store}>
// Provider is given the store as a prop
// data = stateObject = store.getState()
const mapStateToProps = (stateObject) => ({
  data: stateObject
})

const UserDetailViewContainer = connect(mapStateToProps)(UserDetailView)

export default UserDetailViewContainer 
