/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RecommendProps } from '@/models/recommendations'
import produce from 'immer'
import { Reducer } from 'redux'

const request: Reducer<RecommendProps> = (
  state = {} as RecommendProps,
  action: any
): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_RECOMMENDATION_REQUEST': {
        const payload = action.payload

        return payload
      }

      case 'CREATE_RECOMMENDATION_REQUEST': {
        const { title, description, benefitPoints, value } = action.payload

        return {
          title: title || draft.title,
          description: description || draft.description,
          benefitPoints: benefitPoints || draft.benefitPoints,
          value: value || draft.value
        }
      }
      case 'CLEAR_RECOMMENDATION_REQUEST': {
        return {}
      }
      default: {
        return state
      }
    }
  })
}

export default request
