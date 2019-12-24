import axios from 'axios';

import { ADD_EMPLOYEE, GET_EMPLOYEES, DELETE_EMPLOYEE } from '../types';

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
      url: '/api/admin/employees',
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
      .get('/api/admin/employees')
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

export function deleteEmployee(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/admin/employees',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EMPLOYEE,
          id
        };
        dispatch(action);
      })
  }
}
