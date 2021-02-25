import { DefaultPizzaProps } from './pizza'

export interface RequestProps {
  dough?: DefaultPizzaProps
  edge?: DefaultPizzaProps
  size?: DefaultPizzaProps
  filling?: DefaultPizzaProps
  value?: number
}
