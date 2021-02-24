import { HtmlHTMLAttributes, ReactNode } from 'react'

export interface LayoutInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  children: ReactNode
  highlightTitle: string
}
