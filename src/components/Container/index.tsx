import React from 'react'

import { StyledContainer } from './styles'

import { ContainerInterface } from './types'

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return (
    <StyledContainer>
      <main>{children}</main>
    </StyledContainer>
  )
}

export default Container
