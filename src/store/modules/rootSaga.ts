/* eslint-disable generator-star-spacing */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects'

import request from './request/sagas'

export default function* rootSaga() {
  return yield all([request])
}
