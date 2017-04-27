import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TrucksReducer from './trucks_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  trucks: TrucksReducer,
});

export default rootReducer;
