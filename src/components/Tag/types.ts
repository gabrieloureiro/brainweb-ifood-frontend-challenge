import { HtmlHTMLAttributes } from 'react'

export interface TagInterface extends HtmlHTMLAttributes<HTMLSpanElement> {
  backgroundColor: string
  textColor: string
}
