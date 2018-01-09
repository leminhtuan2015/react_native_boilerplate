import * as ActionTypes from "../constants/ActionTypes"

function setDetailData(stateObject, data){
  stateObject.data = data
  
  return stateObject
}

export const DetailReducer = (stateObject = {number: 0}, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.SET_DETAIL_DATA:
    return setDetailData(stateObject, data) 
  default:
    return stateObject
  }
}

export default DetailReducer
