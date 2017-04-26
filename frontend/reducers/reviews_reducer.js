import { RECEIVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = { reviews: [] }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      const review = action.review;
      const collection = state.reviews;
      collection.push(review);
      newState.reviews = collection;
      debugger
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
