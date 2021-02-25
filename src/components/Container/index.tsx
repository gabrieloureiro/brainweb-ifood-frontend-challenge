import React from 'react'

import { ContainerInterface } from './types'

import { StyledContainer } from './styles'

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return (
    <StyledContainer>
      <main>{children}</main>
    </StyledContainer>
  )
}

export default Container
