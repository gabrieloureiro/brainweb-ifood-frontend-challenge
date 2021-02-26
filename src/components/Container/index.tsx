import React from 'react'

import { ContainerInterface } from './types'

import { StyledContainer } from './styles'

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return (
    <StyledContainer>
      <main>{children}</main>
      <footer>
        iFood + Brainweb Frontend Challenge - Gabriel Loureiro - 2021
      </footer>
    </StyledContainer>
  )
}

export default Container
