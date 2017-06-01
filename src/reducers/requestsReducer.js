import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.requests, action) {
  switch (action.type) {
    default:
      return state;
  }
}