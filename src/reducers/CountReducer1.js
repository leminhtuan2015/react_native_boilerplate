export const CountReducer1 = (stateObject = {number1: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT1':
    return {number1: stateObject.number1 + 10};
  case 'DECREMENT1':
    return {number1: stateObject.number1 - 10};
  case 'RESET1':
    return {number1: 0};
  default:
    return stateObject
  }
}

export default CountReducer1
