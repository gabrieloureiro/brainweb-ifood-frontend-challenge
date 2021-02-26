import { RequestProps } from './request'

export interface RecommendProps {
  id?: number
  dayOfWeek?: string
  title: string
  description: string
  value: number
  benefitPoints: number
  request?: RequestProps
}
