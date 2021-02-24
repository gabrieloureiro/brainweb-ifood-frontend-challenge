/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from 'react'
import { useBanner } from '@/hooks/useBanner'

import { BannerProps } from './types'

import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiX
} from 'react-icons/fi'

import { Holder, Title, Description, Button, CloseButton } from './styles'

const BannerNotification: React.FC<BannerProps> = ({ message, style }) => {
  const { removeBanner } = useBanner()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeBanner(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeBanner])

  const icons = {
    error: <FiAlertCircle size={24} />,
    warning: <FiAlertTriangle size={24} />,
    success: <FiCheckCircle size={24} />,
    info: <FiInfo size={24} />
  }

  return (
    <Holder key={message.id} type={message.type} style={style}>
      {icons[message.type || 'neutral']}
      <Title>{message.title}</Title>
      <CloseButton
        messageType={message.type}
        onClick={() => removeBanner(message.id)}
      >
        <FiX size={24} />
      </CloseButton>
      <Description>{message.description}</Description>
      <Button
        messageType={message.type}
        onClick={() => removeBanner(message.id)}
      >
        OK
      </Button>
    </Holder>
  )
}

export default BannerNotification
