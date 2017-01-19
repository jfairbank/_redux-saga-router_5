/*
 *
 * Dashboard actions
 *
 */

import {
  UPDATE_SERVICES,
} from './constants';

export function updateServices(services) {
  return {
    type: UPDATE_SERVICES,
    payload: services,
  };
}
