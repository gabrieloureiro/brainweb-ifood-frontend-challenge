import { HtmlHTMLAttributes } from 'react'

export interface RowInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  wrap?: boolean
  justify?: string
  align?: string
}
