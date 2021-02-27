/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { CustomSlider, Wrapper } from './styles'
import Arrow from './Arrow'
import { SliderProps } from './types'
import settings from './settings'
import { CARDS_ANIMATION, DEFAULT_TRANSITION } from '@/animations'

const Slider: React.FC<SliderProps> = ({
  arrowColor = '#E7A74E',
  children
}) => {
  const sliderSettings = {
    ...settings,
    prevArrow: <Arrow left arrowColor={arrowColor} />,
    nextArrow: <Arrow arrowColor={arrowColor} />
  }

  return (
    <Wrapper
      variants={CARDS_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
      transition={DEFAULT_TRANSITION}
    >
      <CustomSlider {...sliderSettings} arrowColor={arrowColor}>
        {children}
      </CustomSlider>
    </Wrapper>
  )
}
export default Slider
