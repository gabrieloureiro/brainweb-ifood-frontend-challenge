import React from 'react'

import { LoaderInterface } from './types'

import { Wrapper, StyledLoader } from './styles'

const Loader: React.FC<LoaderInterface> = ({ size = 'medium' }) => {
  return (
    <Wrapper>
      <StyledLoader size={size} />
    </Wrapper>
  )
}

export default Loader
