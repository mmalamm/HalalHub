import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TrucksReducer from './trucks_reducer';
import ReviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  trucks: TrucksReducer,
  reviews: ReviewsReducer
});

export default rootReducer;
