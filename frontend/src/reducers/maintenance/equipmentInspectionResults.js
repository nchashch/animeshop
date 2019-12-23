import { ADD_EQUIPMENT_INSPECTION_RESULT, GET_EQUIPMENT_INSPECTION_RESULTS, DELETE_EQUIPMENT_INSPECTION_RESULT } from '../../actions/types';

export function equipmentInspectionResults(state = [], action) {
  switch (action.type) {
    case ADD_EQUIPMENT_INSPECTION_RESULT:
      return [ ...state, action.equipmentInspectionResult];
    case GET_EQUIPMENT_INSPECTION_RESULTS:
      return action.equipmentInspectionResults;
    case DELETE_EQUIPMENT_INSPECTION_RESULT:
      return state.filter(equipmentInspectionResult => equipmentInspectionResult.id !== action.id);
    default:
      return state;
  }
}
