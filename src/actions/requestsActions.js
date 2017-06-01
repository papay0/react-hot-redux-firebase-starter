import * as types from './actionTypes';
import { push } from 'react-router-redux';

export function loadRequests() {
  return (dispatch, getState) => {
    return getState().requests;
  };
}
