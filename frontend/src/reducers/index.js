import { combineReducers } from 'redux';
import { units } from './units';

export const initialState = {
  units: []
}

const rootReducer = combineReducers({
  units
});

export default rootReducer;
