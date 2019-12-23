import axios from 'axios';

import { ADD_EMPLOYEE, GET_EMPLOYEES  } from './types';

function addEmployee(employee) {
  return {
    type: ADD_EMPLOYEE,
    employee
  }
}

function receiveEmployees(employees) {
  return {
    type: GET_EMPLOYEES,
    employees
  }
}

export function postEmployee(employee) {
  return (dispatch) => {
    const options =  {
      url: 'https://localhost/api/admin/employees',
      method: 'POST',
      data: employee
    };
    return axios(options)
      .then(
        res => {
          const employee = res.data;
          dispatch(addEmployee(employee));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEmployees() {
  return (dispatch) => {
    return axios
      .get('https://localhost/api/admin/employees')
      .then(
        res => {
          const employees = res.data;
          dispatch(receiveEmployees(employees));
        },
        err => {
          console.log(err);
        }
      );
  }
}