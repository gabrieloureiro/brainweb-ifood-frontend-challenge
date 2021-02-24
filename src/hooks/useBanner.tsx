import React, { createContext, useContext, useCallback, useState } from 'react'

import { v4 as uuid } from 'uuid'

import BannerContainer from '@/components/BannerContainer'
export interface BannerMessages {
  id: string
  type?: 'success' | 'error' | 'info' | 'warning' | 'neutral'
  title: string
  description: string
}
interface BannerContextData {
  addBanner(message: Omit<BannerMessages, 'id'>): void
  removeBanner(id: string): void
}

const BannerContext = createContext<BannerContextData>({} as BannerContextData)

const BannerProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<BannerMessages[]>([])

  const addBanner = ({
    type,
    title,
    description
  }: Omit<BannerMessages, 'id'>) => {
    const id = uuid()

    const banner = {
      id,
      type,
      title,
      description
    }

    setMessages(state => [...state, banner])
  }

  const removeBanner = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <BannerContext.Provider value={{ addBanner, removeBanner }}>
      {children}
      <BannerContainer messages={messages} />
    </BannerContext.Provider>
  )
}

function useBanner(): BannerContextData {
  const context = useContext(BannerContext)

  if (!context) {
    throw new Error('useBanner must be used within a BannerProvider')
  }

  return context
}

export { BannerProvider, useBanner }
