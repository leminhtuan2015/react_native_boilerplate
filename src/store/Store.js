import { createStore, combineReducers } from 'redux'
import CountReducer from '../reducers/CountReducer'
import CountReducer1 from '../reducers/CountReducer1'

const reducers = combineReducers({
 CountReducer,
 CountReducer1,
});


// Pass current state and action for reducers
let Store = createStore(reducers)

console.log("Store state: " + JSON.stringify(Store.getState()))

export default Store;
