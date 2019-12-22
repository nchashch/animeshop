import { ADD_UNIT, GET_UNITS } from '../actions/types';

export function units(state = [], action) {
  switch (action.type) {
    case ADD_UNIT:
      return [ ...state, action.unit];
    case GET_UNITS:
      return action.units;
    default:
      return state;
  }
}
