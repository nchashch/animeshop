import axios from 'axios';

import { ADD_UNIT, GET_UNITS  } from './types';

function addUnit(unit) {
  return {
    type: ADD_UNIT,
    unit
  }
}

function receiveUnits(units) {
  return {
    type: GET_UNITS,
    units
  }
}

export function postUnit(name, address) {
  return (dispatch) => {
    const unit = {
      name,
      address
    }
    return axios
      .post('https://localhost/api/admin/units', unit)
      .then(
        res => {
          const unit = res.data;
          dispatch(addUnit(unit));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchUnits() {
  return (dispatch) => {
    return axios
      .get('https://localhost/api/admin/units')
      .then(
        res => {
          const units = res.data;
          dispatch(receiveUnits(units));
        },
        err => {
          console.log(err);
        }
      );
  }
}
