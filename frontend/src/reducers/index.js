import { combineReducers } from 'redux';
import { units } from './admin/units';
import { employees } from './admin/employees';
import { manufacturers } from './stock/manufacturers';
import { items } from './stock/items';
import { itemInstances } from './stock/itemInstances';
import { employeeEntries } from './security/employeeEntries';
import { transportEntries } from './security/transportEntries';
import { equipment } from './maintenance/equipment';

const rootReducer = combineReducers({
  units,
  employees,
  manufacturers,
  items,
  itemInstances,
  employeeEntries,
  transportEntries,
  equipment
});

export default rootReducer;
