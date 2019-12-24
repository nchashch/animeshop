import axios from 'axios';

import { ADD_TRANSPORT_ENTRY, GET_TRANSPORT_ENTRIES, DELETE_TRANSPORT_ENTRY } from '../types';

function addTransportEntry(transportEntry) {
  return {
    type: ADD_TRANSPORT_ENTRY,
    transportEntry
  }
}

function receiveTransportEntries(transportEntries) {
  return {
    type: GET_TRANSPORT_ENTRIES,
    transportEntries
  }
}

export function postTransportEntry(transportEntries) {
  return (dispatch) => {
    const options =  {
      url: '/api/security/transport_entries',
      method: 'POST',
      data: transportEntries
    };
    return axios(options)
      .then(
        res => {
          const transportEntry = res.data;
          dispatch(addTransportEntry(transportEntry));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchTransportEntries() {
  return (dispatch) => {
    return axios
      .get('/api/security/transport_entries')
      .then(
        res => {
          const transportEntries = res.data;
          dispatch(receiveTransportEntries(transportEntries));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteTransportEntry(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/security/transport_entries',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_TRANSPORT_ENTRY,
          id
        };
        dispatch(action);
      })
  }
}
