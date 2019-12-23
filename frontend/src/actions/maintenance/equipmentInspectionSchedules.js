import axios from 'axios';

import { ADD_EQUIPMENT_INSPECTION_SCHEDULE, GET_EQUIPMENT_INSPECTION_SCHEDULES, DELETE_EQUIPMENT_INSPECTION_SCHEDULE } from '../types';

function addEquipmentInstance(equipmentInspectionSchedule) {
  return {
    type: ADD_EQUIPMENT_INSPECTION_SCHEDULE,
    equipmentInspectionSchedule
  }
}

function receiveEquipmentInstances(equipmentInspectionSchedules) {
  return {
    type: GET_EQUIPMENT_INSPECTION_SCHEDULES,
    equipmentInspectionSchedules
  }
}

export function postEquipmentInstance(equipmentInspectionSchedule) {
  return (dispatch) => {
    const options =  {
      url: 'https://localhost/api/maintenance/equipment_inspection_schedules',
      method: 'POST',
      data: equipmentInspectionSchedule
    };
    return axios(options)
      .then(
        res => {
          const equipmentInspectionSchedule = res.data;
          dispatch(addEquipmentInstance(equipmentInspectionSchedule));
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
      .get('https://localhost/api/maintenance/equipment_inspection_schedules')
      .then(
        res => {
          const equipmentInspectionSchedules = res.data;
          dispatch(receiveEquipmentInstances(equipmentInspectionSchedules));
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
      url: 'https://localhost/api/maintenance/equipment_inspection_schedules',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EQUIPMENT_INSPECTION_SCHEDULE,
          id
        };
        dispatch(action);
      })
  }
}
