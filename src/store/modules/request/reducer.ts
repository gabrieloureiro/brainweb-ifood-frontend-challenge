/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RequestProps } from '@/models/request'
import produce from 'immer'
import { Reducer } from 'redux'

const request: Reducer<RequestProps> = (
  state = {} as RequestProps,
  action: any
): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_REQUEST': {
        const payload = action.payload

        return payload
      }

      case 'CREATE_REQUEST': {
        const { dough, edge, filling, size, payment } = action.payload

        return {
          dough: dough || draft.dough,
          edge: edge || draft.edge,
          filling: filling || draft.filling,
          size: size || draft.size,
          payment: payment || draft.payment
        }
      }
      case 'CLEAR_REQUEST': {
        return {}
      }
      default: {
        return state
      }
    }
  })
}

export default request
