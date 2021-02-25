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

export interface RequestsProps {
  id: number
  dough: string
  edge: string
  size: string
  filling: string
  value: number
}
