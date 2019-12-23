import { ADD_EQUIPMENT, GET_EQUIPMENT, DELETE_EQUIPMENT } from '../../actions/types';

export function equipment(state = [], action) {
  switch (action.type) {
    case ADD_EQUIPMENT:
      return [ ...state, action.equipment];
    case GET_EQUIPMENT:
      return action.equipment;
    case DELETE_EQUIPMENT:
      return state.filter(equipment => equipment.id !== action.id);
    default:
      return state;
  }
}
