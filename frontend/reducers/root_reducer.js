import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TrucksReducer from './trucks_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  trucks: TrucksReducer,
  filters: FiltersReducer
});

export default rootReducer;
