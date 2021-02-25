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
        const { dough, edge, filling, size } = action.payload

        const doughValue = dough?.value ?? 0
        const edgeValue = edge?.value ?? 0
        const fillingValue = filling?.value ?? 0
        const sizeValue = size?.value ?? 0

        const totalValue = doughValue + edgeValue + fillingValue + sizeValue

        return {
          dough: dough || draft.dough,
          edge: edge || draft.edge,
          filling: filling || draft.filling,
          size: size || draft.size,
          value: totalValue || draft.value
        }
      }
      default: {
        return state
      }
    }
  })
}

export default request
