import { PizzaProps } from '@/models/pizza'

export const readPizzas = (pizza: PizzaProps): any => {
  return {
    type: 'READ_PIZZAS',
    payload: pizza
  }
}
