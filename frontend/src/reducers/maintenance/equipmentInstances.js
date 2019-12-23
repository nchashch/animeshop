import { ADD_EQUIPMENT_INSTANCE, GET_EQUIPMENT_INSTANCES, DELETE_EQUIPMENT_INSTANCE } from '../../actions/types';

export function equipmentInstances(state = [], action) {
  switch (action.type) {
    case ADD_EQUIPMENT_INSTANCE:
      return [ ...state, action.equipmentInstance];
    case GET_EQUIPMENT_INSTANCES:
      return action.equipmentInstances;
    case DELETE_EQUIPMENT_INSTANCE:
      return state.filter(equipmentInstance => equipmentInstance.id !== action.id);
    default:
      return state;
  }
}
