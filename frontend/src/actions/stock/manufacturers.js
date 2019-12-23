import axios from 'axios';

import { ADD_MANUFACTURER, GET_MANUFACTURERS, DELETE_MANUFACTURER } from '../types';

function addManufacturer(manufacturer) {
  return {
    type: ADD_MANUFACTURER,
    manufacturer
  }
}

function receiveManufacturers(manufacturers) {
  return {
    type: GET_MANUFACTURERS,
    manufacturers
  }
}

export function postManufacturer(manufacturer) {
  return (dispatch) => {
    const options =  {
      url: 'https://localhost/api/stock/manufacturers',
      method: 'POST',
      data: manufacturer
    };
    return axios(options)
      .then(
        res => {
          const manufacturer = res.data;
          dispatch(addManufacturer(manufacturer));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchManufacturers() {
  return (dispatch) => {
    return axios
      .get('https://localhost/api/stock/manufacturers')
      .then(
        res => {
          const manufacturers = res.data;
          dispatch(receiveManufacturers(manufacturers));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteManufacturer(id) {
  return (dispatch) => {
    const options =  {
      url: 'https://localhost/api/stock/manufacturers',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_MANUFACTURER,
          id
        };
        dispatch(action);
      })
  }
}
