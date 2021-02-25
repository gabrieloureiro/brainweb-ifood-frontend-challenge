/* eslint-disable generator-star-spacing */
import { all, takeLatest, select, put } from 'redux-saga/effects'
import { GlobalStateInterface } from '../rootReducer'
import { createRequest } from './actions'
import { CreateRequestActionTypes } from './reducer'

function* sumWithPrevValue({ payload }: CreateRequestActionTypes) {
  const totalValue: number = yield select((state: GlobalStateInterface) => {
    const doughValue = state.request.dough?.value ?? 0
    const edgeValue = state.request.edge?.value ?? 0
    const fillingValue = state.request.filling?.value ?? 0
    const sizeValue = state.request.size?.value ?? 0

    const total = doughValue + edgeValue + fillingValue + sizeValue

    return total
  })

  console.log(totalValue)
}

export default all([takeLatest('CREATE_REQUEST', sumWithPrevValue)])
