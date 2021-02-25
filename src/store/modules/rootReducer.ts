import { combineReducers } from 'redux'

import { PizzaProps } from '@/models/pizza'
import { RecommendationProps } from '@/models/recommendations'

import pizzas from './pizza/reducer'
import recommendations from './recommendations/reducer'

export interface GlobalStateInterface {
  pizzas: PizzaProps
  recommendations: RecommendationProps
}

export default combineReducers({
  pizzas,
  recommendations
})
