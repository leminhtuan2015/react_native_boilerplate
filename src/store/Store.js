import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk"

import HomeReducer from '../reducers/HomeReducer'
import DetailReducer from '../reducers/DetailReducer'

const reducers = combineReducers({
 HomeReducer,
 DetailReducer,
});

// Pass current state and action for reducers
let Store = createStore(reducers)

console.log("Store state: " + JSON.stringify(Store.getState()))

export default Store;
