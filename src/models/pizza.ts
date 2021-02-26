export interface DefaultProps {
  id: string
  type: string
  value: number
}

export interface PizzaProps {
  dough: DefaultProps[]
  edge: DefaultProps[]
  size: DefaultProps[]
  filling: DefaultProps[]
}
