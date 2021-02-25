/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const recommendations = (state = {}, action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_RECOMMENDATIONS': {
        const recommendation = action.payload

        return recommendation
      }
      default: {
        return state
      }
    }
  })
}

export default recommendations
