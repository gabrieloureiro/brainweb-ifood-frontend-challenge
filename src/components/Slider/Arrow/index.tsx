/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Arrow = ({ arrowColor, left, ...props }: any) => {
  return left ? (
    <FiChevronLeft {...props} color={arrowColor} />
  ) : (
      <FiChevronRight {...props} color={arrowColor} />
    )
}

export default Arrow
