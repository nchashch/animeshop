import axios from 'axios';

import { ADD_ITEM_INSTANCE, GET_ITEM_INSTANCES, DELETE_ITEM_INSTANCE } from '../types';

function addItemInstance(itemInstance) {
  return {
    type: ADD_ITEM_INSTANCE,
    itemInstance
  }
}

function receiveItemInstances(itemInstances) {
  return {
    type: GET_ITEM_INSTANCES,
    itemInstances
  }
}

export function postItemInstance(itemInstance) {
  return (dispatch) => {
    const options =  {
      url: '/api/stock/item_instances',
      method: 'POST',
      data: itemInstance
    };
    return axios(options)
      .then(
        res => {
          const itemInstance = res.data;
          dispatch(addItemInstance(itemInstance));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchItemInstances() {
  return (dispatch) => {
    return axios
      .get('/api/stock/item_instances')
      .then(
        res => {
          const itemInstances = res.data;
          dispatch(receiveItemInstances(itemInstances));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteItemInstance(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/stock/item_instances',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_ITEM_INSTANCE,
          id
        };
        dispatch(action);
      })
  }
}
