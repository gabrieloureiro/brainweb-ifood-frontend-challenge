/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion'
import { lighten, shade } from 'polished'
import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  vertical-align: middle;
`

export const InfoDeveloper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const LargeText = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`

export const MediumText = styled.h5`

  font-size: 24px;
  font-weight: 500;

  &:nth-of-type(1) {
    font-size: 14px;
    color: ${({ theme }) =>
    theme.title !== 'light'
      ? shade(0.4, theme.text)
      : lighten(0.4, theme.text)};
  }

  &:nth-of-type(2) {
    padding-bottom: 12px;
  }
`
export const SmallText = styled.span`
  text-align: center;
  padding: 8px 0;
  color: ${({ theme }) => theme.text};
`

export const Anchor = styled.a`
  margin: 0;
  padding: 0;
  outline: 0;
`
