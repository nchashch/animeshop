import { ADD_MANUFACTURER, GET_MANUFACTURERS, DELETE_MANUFACTURER } from '../actions/types';

export function manufacturers(state = [], action) {
  switch (action.type) {
    case ADD_MANUFACTURER:
      return [ ...state, action.manufacturer];
    case GET_MANUFACTURERS:
      return action.manufacturers;
    case DELETE_MANUFACTURER:
      return state.filter(manufacturer => manufacturer.id !== action.id);
    default:
      return state;
  }
}
