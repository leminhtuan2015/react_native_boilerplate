export const CountReducer = (stateObject = {number: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return {number: stateObject.number + 1};
  case 'DECREMENT':
    return {number: stateObject.number - 1};
  case 'RESET':
    return {number: 0};
  default:
    return stateObject
  }
}

export default CountReducer
