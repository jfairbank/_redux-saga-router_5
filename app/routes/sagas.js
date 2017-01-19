import { router } from 'redux-saga-router';
import { browserHistory } from 'react-router';

const createMainSaga = (routes) => function* mainSaga() {
  yield* router(browserHistory, routes);
};

export default createMainSaga;
