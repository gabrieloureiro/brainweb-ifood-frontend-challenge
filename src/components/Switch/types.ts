import { HtmlHTMLAttributes } from 'react'

export interface SwitchInterface extends HtmlHTMLAttributes<HTMLInputElement> {
  isOn: boolean
  handleToggle: () => void
}
