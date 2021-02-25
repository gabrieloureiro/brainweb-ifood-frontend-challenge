/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const pizzas = (state = {}, action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_PIZZAS': {
        const pizza = action.payload

        return pizza
      }
      default: {
        return state
      }
    }
  })
}

export default pizzas
