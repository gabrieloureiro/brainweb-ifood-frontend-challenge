import React from 'react'
import { useTransition } from 'react-spring'

import BannerNotification from './BannerNotification'

import { Container } from './styles'

import { BannerContainerProps } from './types'

const BannerContainer: React.FC<BannerContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <BannerNotification key={key} style={props} message={item} />
      ))}
    </Container>
  )
}

export default BannerContainer
