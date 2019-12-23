import { combineReducers } from 'redux';
import { units } from './units';
import { employees } from './employees';

const rootReducer = combineReducers({
  units,
  employees
});

export default rootReducer;
