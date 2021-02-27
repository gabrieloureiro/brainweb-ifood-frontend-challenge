import { combineReducers } from 'redux'

import { PizzaProps } from '@/models/pizza'
import { RecommendProps } from '@/models/recommendations'
import { RequestProps } from '@/models/request'

import pizzas from './pizza/reducer'
import recommendations from './recommendations/reducer'
import request from './request/reducer'
import requestRecommendation from './requestRecommendation/reducer'
export interface GlobalStateInterface {
  pizzas: PizzaProps
  recommendations: RecommendProps[]
  request: RequestProps
  requestRecommendation: RecommendProps
}

export default combineReducers({
  pizzas,
  recommendations,
  request,
  requestRecommendation
})
