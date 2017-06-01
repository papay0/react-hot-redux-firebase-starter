import * as types from './actionTypes';
import { push } from 'react-router-redux';

export function loadRequests() {
  return (dispatch, getState) => {
    return getState().requests;
  };
}

export function loadTypes() {
  return (dispatch, getState) => {
    return getState().types;
  };
}

export function saveNewProduct(product) {
  return (dispatch, getState) => {
    dispatch({ type: types.SAVE_PRODUCT, product });
    dispatch(push('/requests'));
  };
}
