/* eslint-disable @typescript-eslint/ban-types */
import { BannerMessages } from '@/hooks/useBanner'

export interface BannerProps {
  message: BannerMessages
  style: object
}

export interface HolderProps {
  type?: 'success' | 'error' | 'info' | 'warning' | 'neutral'
}

export interface ButtonProps {
  messageType?: 'success' | 'error' | 'info' | 'warning' | 'neutral'
}
