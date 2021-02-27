import { CARDS_ANIMATION, DEFAULT_TRANSITION } from '@/animations'
import React from 'react'

import { FullCard } from './styles'
import { FullRowCardProps } from './types'

const FullRowCard: React.FC<FullRowCardProps> = ({ children, index }) => {
  return (
    <FullCard
      variants={CARDS_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
      transition={DEFAULT_TRANSITION}
      index={index}
    >
      {children}
    </FullCard>
  )
}

export default FullRowCard
