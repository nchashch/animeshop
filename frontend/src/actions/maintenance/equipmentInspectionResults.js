import axios from 'axios';

import { ADD_EQUIPMENT_INSPECTION_RESULT, GET_EQUIPMENT_INSPECTION_RESULTS, DELETE_EQUIPMENT_INSPECTION_RESULT } from '../types';

function addEquipmentInspectionResult(equipmentInspectionResult) {
  return {
    type: ADD_EQUIPMENT_INSPECTION_RESULT,
    equipmentInspectionResult
  }
}

function receiveEquipmentInspectionResults(equipmentInspectionResults) {
  return {
    type: GET_EQUIPMENT_INSPECTION_RESULTS,
    equipmentInspectionResults
  }
}

export function postEquipmentInspectionResult(equipmentInspectionResult) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_inspection_results',
      method: 'POST',
      data: equipmentInspectionResult
    };
    return axios(options)
      .then(
        res => {
          const equipmentInspectionResult = res.data;
          dispatch(addEquipmentInspectionResult(equipmentInspectionResult));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchEquipmentInspectionResults() {
  return (dispatch) => {
    return axios
      .get('/api/maintenance/equipment_inspection_results')
      .then(
        res => {
          const equipmentInspectionResults = res.data;
          dispatch(receiveEquipmentInspectionResults(equipmentInspectionResults));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteEquipmentInspectionResult(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/maintenance/equipment_inspection_results',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_EQUIPMENT_INSPECTION_RESULT,
          id
        };
        dispatch(action);
      })
  }
}
