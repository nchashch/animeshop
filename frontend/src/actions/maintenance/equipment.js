import axios from 'axios';

import { ADD_EQUIPMENT, GET_EQUIPMENT, DELETE_EQUIPMENT } from '../types';

function addEquipment(equipment) {
  return {
    type: ADD_EQUIPMENT,
    equipment
  }
}

function receiveEquipment(equipment) {
  return {
    type: GET_EQUIPMENT,
    equipment
  }
}

export function postEquipment(equipment) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment',
      method: 'POST',
      data: equipment
    };
    return axios(options)
      .then(
        res => {
          const equipment = res.data;
          dispatch(addEquipment(equipment));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEquipment() {
  return (dispatch) => {
    return axios
      .get('/api/maintenance/equipment')
      .then(
        res => {
          const equipment = res.data;
          dispatch(receiveEquipment(equipment));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteEquipment(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EQUIPMENT,
          id
        };
        dispatch(action);
      })
  }
}
