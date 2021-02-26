import { RecommendProps } from '@/models/recommendations'

export const readRecommendations = (recommendations: RecommendProps): any => {
  return {
    type: 'READ_RECOMMENDATIONS',
    payload: recommendations
  }
}
