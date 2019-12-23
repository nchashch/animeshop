import { ADD_EQUIPMENT_INSPECTION_SCHEDULE, GET_EQUIPMENT_INSPECTION_SCHEDULES, DELETE_EQUIPMENT_INSPECTION_SCHEDULE } from '../../actions/types';

export function equipmentInspectionSchedules(state = [], action) {
  switch (action.type) {
    case ADD_EQUIPMENT_INSPECTION_SCHEDULE:
      return [ ...state, action.equipmentInspectionSchedule];
    case GET_EQUIPMENT_INSPECTION_SCHEDULES:
      return action.equipmentInspectionSchedules;
    case DELETE_EQUIPMENT_INSPECTION_SCHEDULE:
      return state.filter(equipmentInspectionSchedule => equipmentInspectionSchedule.id !== action.id);
    default:
      return state;
  }
}
