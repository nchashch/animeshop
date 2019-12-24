import axios from 'axios';

import { ADD_EMPLOYEE_ENTRY, GET_EMPLOYEE_ENTRIES, DELETE_EMPLOYEE_ENTRY } from '../types';

function addEmployeeEntry(employeeEntry) {
  return {
    type: ADD_EMPLOYEE_ENTRY,
    employeeEntry
  }
}

function receiveEmployeeEntries(employeeEntries) {
  return {
    type: GET_EMPLOYEE_ENTRIES,
    employeeEntries
  }
}

export function postEmployeeEntry(employeeEntries) {
  return (dispatch) => {
    const options =  {
      url: '/api/security/employee_entries',
      method: 'POST',
      data: employeeEntries
    };
    return axios(options)
      .then(
        res => {
          const employeeEntry = res.data;
          dispatch(addEmployeeEntry(employeeEntry));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEmployeeEntries() {
  return (dispatch) => {
    return axios
      .get('/api/security/employee_entries')
      .then(
        res => {
          const employeeEntries = res.data;
          dispatch(receiveEmployeeEntries(employeeEntries));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteEmployeeEntry(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/security/employee_entries',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EMPLOYEE_ENTRY,
          id
        };
        dispatch(action);
      })
  }
}
