import { combineReducers } from 'redux';
import { units } from './admin/units';
import { employees } from './admin/employees';
import { manufacturers } from './stock/manufacturers';
import { items } from './stock/items';
import { itemInstances } from './stock/itemInstances';

const rootReducer = combineReducers({
  units,
  employees,
  manufacturers,
  items,
  itemInstances
});

export default rootReducer;
