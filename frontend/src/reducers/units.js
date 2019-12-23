import { ADD_UNIT, GET_UNITS, DELETE_UNIT } from '../actions/types';

export function units(state = [], action) {
  switch (action.type) {
    case ADD_UNIT:
      return [ ...state, action.unit];
    case GET_UNITS:
      return action.units;
    case DELETE_UNIT:
      return state.filter(unit => unit.id !== action.id);
    default:
      return state;
  }
}
