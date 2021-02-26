import React from 'react'

import { RowInterface } from './types'

import { StyledRow } from './styles'

export const Row: React.FC<RowInterface> = ({
  wrap,
  justify,
  align,
  children,
  ...rest
}) => {
  return (
    <StyledRow wrap={wrap} justify={justify} align={align} {...rest}>
      {children}
    </StyledRow>
  )
}
