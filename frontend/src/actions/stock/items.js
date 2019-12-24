import axios from 'axios';

import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from '../types';

function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

function receiveItems(items) {
  return {
    type: GET_ITEMS,
    items
  }
}

export function postItem(item) {
  return (dispatch) => {
    const options =  {
      url: '/api/stock/items',
      method: 'POST',
      data: item
    };
    return axios(options)
      .then(
        res => {
          const item = res.data;
          dispatch(addItem(item));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchItems() {
  return (dispatch) => {
    return axios
      .get('/api/stock/items')
      .then(
        res => {
          const items = res.data;
          dispatch(receiveItems(items));
        },
        err => {
          console.log(err);
        }
      );
  }
}

export function deleteItem(id) {
  return (dispatch) => {
    const options =  {
      url: '/api/stock/items',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: id
    };
    return axios(options)
      .then(res => {
        const action = {
          type: DELETE_ITEM,
          id
        };
        dispatch(action);
      })
  }
}
