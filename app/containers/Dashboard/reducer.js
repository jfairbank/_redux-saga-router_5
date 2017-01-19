/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_SERVICES,
} from './constants';

const initialState = fromJS({
  loading: true,
  services: null,
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SERVICES:
      return state.merge({
        loading: false,
        services: action.payload,
      });

    default:
      return state;
  }
}

export default dashboardReducer;
