export interface DefaultPizzaProps {
  id: string
  type: string
  value: number
}

export interface PizzaProps {
  dough: DefaultPizzaProps[]
  edge: DefaultPizzaProps[]
  size: DefaultPizzaProps[]
  filling: DefaultPizzaProps[]
}
