import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from '../../actions/types';

export function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [ ...state, action.item];
    case GET_ITEMS:
      return action.items;
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
