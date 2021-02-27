import { RecommendProps } from '@/models/recommendations'

export const readRequestRecommend = (request: RecommendProps): any => {
  return {
    type: 'READ_RECOMMENDATION_REQUEST',
    payload: request
  }
}

export const createRequestRecommend = ({
  id,
  title,
  description,
  benefitPoints,
  value
}: RecommendProps): any => {
  return {
    type: 'CREATE_RECOMMENDATION_REQUEST',
    payload: {
      id,
      title,
      description,
      benefitPoints,
      value
    }
  }
}

export const clearRequest = (request: RecommendProps): any => {
  return {
    type: 'CLEAR_RECOMMENDATION',
    payload: request
  }
}
