import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.requests, action) {
  switch (action.type) {
    case types.SAVE_PRODUCT:
      return Object.assign({}, state, { products: [...state.products, action.product] });
    default:
      return state;
  }
}