import React from 'react'

import { FullCard } from './styles'
import { FullRowCardProps } from './types'

const FullRowCard: React.FC<FullRowCardProps> = ({ children, index }) => {
  return <FullCard index={index}>{children}</FullCard>
}

export default FullRowCard
