import { call, put } from 'redux-saga/effects';
import { updateServices } from './actions';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getServices() {
  return delay(2000).then(() => ({ foo: 'bar' }));
}

export default function* servicesSaga() {
  const services = yield call(getServices);
  yield put(updateServices(services));
}
