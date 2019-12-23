import { combineReducers } from 'redux';
import { units } from './units';
import { employees } from './employees';
import { manufacturers } from './manufacturers';

const rootReducer = combineReducers({
  units,
  employees,
  manufacturers
});

export default rootReducer;
