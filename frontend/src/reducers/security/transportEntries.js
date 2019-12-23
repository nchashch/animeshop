import { ADD_TRANSPORT_ENTRY, GET_TRANSPORT_ENTRIES, DELETE_TRANSPORT_ENTRY } from '../../actions/types';

export function transportEntries(state = [], action) {
  switch (action.type) {
    case ADD_TRANSPORT_ENTRY:
      return [ ...state, action.transportEntry];
    case GET_TRANSPORT_ENTRIES:
      return action.transportEntries;
    case DELETE_TRANSPORT_ENTRY:
      return state.filter(transportEntry => transportEntry.id !== action.id);
    default:
      return state;
  }
}
