import { RECEIVE_TRUCK, RECEIVE_TRUCKS } from '../actions/truck_actions';

// const defaultState = {
//   index: {},
//   detail: {},
//   errors: []
// }


const TrucksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({

  }, state);

  switch (action.type) {
    case RECEIVE_TRUCKS:
      return action.trucks;
      // return Object.assign({}, state, { index: action.trucks });
    case RECEIVE_TRUCK:
      const newTruck = {[action.truck.id]: action.truck};
      return Object.assign({}, state, newTruck);
    // case RECEIVE_TRUCK_ERRORS:
    //   return Object.assign({}, state, { errors: })
    default:
      return state;
  }
};

export default TrucksReducer;
