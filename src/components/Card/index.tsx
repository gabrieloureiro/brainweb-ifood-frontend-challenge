import React from 'react'

import { CardInterface } from './types'

import { StyledCard } from './styles'

export const Card: React.FC<CardInterface> = ({
  children,
  elevation,
  ...rest
}) => {
  return (
    <StyledCard elevation={elevation} {...rest}>
      {children}
    </StyledCard>
  )
}
