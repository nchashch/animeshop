import { ADD_EMPLOYEE, GET_EMPLOYEES, DELETE_EMPLOYEE } from '../../actions/types';

export function employees(state = [], action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [ ...state, action.employee];
    case GET_EMPLOYEES:
      return action.employees;
    case DELETE_EMPLOYEE:
      return state.filter(employee => employee.id !== action.id);
    default:
      return state;
  }
}
