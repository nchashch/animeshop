import axios from 'axios';

import { ADD_EQUIPMENT_INSTANCE, GET_EQUIPMENT_INSTANCES, DELETE_EQUIPMENT_INSTANCE } from '../types';

function addEquipmentInstance(equipmentInstance) {
  return {
    type: ADD_EQUIPMENT_INSTANCE,
    equipmentInstance
  }
}

function receiveEquipmentInstances(equipmentInstances) {
  return {
    type: GET_EQUIPMENT_INSTANCES,
    equipmentInstances
  }
}

export function postEquipmentInstance(equipmentInstance) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_instances',
      method: 'POST',
      data: equipmentInstance
    };
    return axios(options)
      .then(
        res => {
          const equipmentInstance = res.data;
          dispatch(addEquipmentInstance(equipmentInstance));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEquipmentInstances() {
  return (dispatch) => {
    return axios
      .get('/api/maintenance/equipment_instances')
      .then(
        res => {
          const equipmentInstances = res.data;
          dispatch(receiveEquipmentInstances(equipmentInstances));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteEquipmentInstance(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_instances',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EQUIPMENT_INSTANCE,
          id
        };
        dispatch(action);
      })
  }
}
