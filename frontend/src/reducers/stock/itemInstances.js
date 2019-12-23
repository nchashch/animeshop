import { ADD_ITEM_INSTANCE, GET_ITEM_INSTANCES, DELETE_ITEM_INSTANCE } from '../../actions/types';

export function itemInstances(state = [], action) {
  switch (action.type) {
    case ADD_ITEM_INSTANCE:
      return [ ...state, action.itemInstance];
    case GET_ITEM_INSTANCES:
      return action.itemInstances;
    case DELETE_ITEM_INSTANCE:
      return state.filter(itemInstance => itemInstance.id !== action.id);
    default:
      return state;
  }
}
