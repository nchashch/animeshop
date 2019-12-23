import { combineReducers } from 'redux';
import { units } from './admin/units';
import { employees } from './admin/employees';
import { manufacturers } from './stock/manufacturers';
import { items } from './stock/items';

const rootReducer = combineReducers({
  units,
  employees,
  manufacturers,
  items
});

export default rootReducer;
