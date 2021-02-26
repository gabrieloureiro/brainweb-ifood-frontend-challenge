import React from 'react'

import { TagInterface } from './types'

import { TagWrapper } from './styles'

const Tag: React.FC<TagInterface> = ({
  backgroundColor,
  textColor,
  children,
  ...rest
}) => {
  return (
    <TagWrapper
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </TagWrapper>
  )
}

export default Tag
