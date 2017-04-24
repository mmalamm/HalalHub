import { RECEIVE_TRUCK, RECEIVE_TRUCKS } from '../actions/truck_actions';

const TrucksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TRUCKS:
      return action.trucks;
    case RECEIVE_TRUCK:
      const newTruck = {[action.truck.id]: action.truck};
      return Object.assign({}, state, newTruck);
    default:
      return state;
  }
};

export default TrucksReducer;
