import { ADD_EMPLOYEE_ENTRY, GET_EMPLOYEE_ENTRIES, DELETE_EMPLOYEE_ENTRY } from '../../actions/types';

export function employeeEntries(state = [], action) {
  switch (action.type) {
    case ADD_EMPLOYEE_ENTRY:
      return [ ...state, action.employeeEntry];
    case GET_EMPLOYEE_ENTRIES:
      return action.employeeEntries;
    case DELETE_EMPLOYEE_ENTRY:
      return state.filter(employeeEntry => employeeEntry.id !== action.id);
    default:
      return state;
  }
}
