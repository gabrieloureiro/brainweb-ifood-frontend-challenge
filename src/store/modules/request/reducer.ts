/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RequestProps } from '@/models/request'
import produce from 'immer'
import { Reducer } from 'redux'

const CREATE_REQUEST = 'CREATE_REQUEST'
const READ_REQUEST = 'READ_REQUEST'

interface ReadRequestActionTypes {
  type: typeof READ_REQUEST
  payload: RequestProps
}

export interface CreateRequestActionTypes {
  type: typeof CREATE_REQUEST
  payload: RequestProps
}

const request: Reducer<RequestProps> = (
  state = {} as RequestProps,
  action: ReadRequestActionTypes | CreateRequestActionTypes
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
      default: {
        return state
      }
    }
  })
}

export default request
