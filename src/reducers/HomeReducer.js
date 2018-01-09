export const HomeReducer = (stateObject = {number: 0}, action) => {
  console.log("---------------------------------------Home Reducer")

  switch (action.type) {
  case 'HOME':
    console.log("1")
    return stateObject
  default:
    console.log("2")
    return stateObject
  }
}

export default HomeReducer
