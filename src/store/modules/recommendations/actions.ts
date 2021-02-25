import { RecommendationProps } from '@/models/recommendations'

export const readRecommendations = (
  recommendations: RecommendationProps
): any => {
  return {
    type: 'READ_RECOMMENDATIONS',
    payload: recommendations
  }
}
