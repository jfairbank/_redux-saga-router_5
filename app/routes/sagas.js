import { router } from 'redux-saga-router';
import { browserHistory } from 'react-router';
import { call, put } from 'redux-saga/effects';
import { updateServices } from '../containers/Dashboard/actions';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getServices() {
  return delay(2000).then(() => ({ foo: 'bar' }));
}

const routes = {
  '/dashboard': function* dashboard() {
    const services = yield call(getServices);
    yield put(updateServices(services));
  },
};

export default function* mainSaga() {
  yield* router(browserHistory, routes);
}
