import axios from 'axios';

import { ADD_EQUIPMENT_INSPECTION_SCHEDULE, GET_EQUIPMENT_INSPECTION_SCHEDULES, DELETE_EQUIPMENT_INSPECTION_SCHEDULE } from '../types';

function addEquipmentInspectionSchedule(equipmentInspectionSchedule) {
  return {
    type: ADD_EQUIPMENT_INSPECTION_SCHEDULE,
    equipmentInspectionSchedule
  }
}

function receiveEquipmentInspectionSchedules(equipmentInspectionSchedules) {
  return {
    type: GET_EQUIPMENT_INSPECTION_SCHEDULES,
    equipmentInspectionSchedules
  }
}

export function postEquipmentInspectionSchedule(equipmentInspectionSchedule) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_inspection_schedules',
      method: 'POST',
      data: equipmentInspectionSchedule
    };
    return axios(options)
      .then(
        res => {
          const equipmentInspectionSchedule = res.data;
          dispatch(addEquipmentInspectionSchedule(equipmentInspectionSchedule));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEquipmentInspectionSchedules() {
  return (dispatch) => {
    return axios
      .get('/api/maintenance/equipment_inspection_schedules')
      .then(
        res => {
          const equipmentInspectionSchedules = res.data;
          dispatch(receiveEquipmentInspectionSchedules(equipmentInspectionSchedules));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteEquipmentInspectionSchedule(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_inspection_schedules',
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
