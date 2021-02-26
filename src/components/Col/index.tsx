import React from 'react'

import { ColInterface } from './types'

import { StyledCol } from './styles'

export const Col: React.FC<ColInterface> = ({
  justify,
  align,
  children,
  ...rest
}) => {
  return (
    <StyledCol justify={justify} align={align} {...rest}>
      {children}
    </StyledCol>
  )
}
