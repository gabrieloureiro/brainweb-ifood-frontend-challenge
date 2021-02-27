import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'

import { Card as StyledCard } from '@/components/Card'

interface IconWrapperProps {
  type: string
}

export const backgroundIconVariations = {
  giFullPizza: css`
    background: ${({ theme }) => theme.primary};
  `,
  mdLocalOffer: css`
    background: ${({ theme }) => theme.yellow};
  `,
  ioRocketOutline: css`
    background: ${({ theme }) => theme.blue};
  `
}

export const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  z-index: 2;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`

export const CardListItem = styled(motion.li)`
  z-index: 2;

  &:first-child {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.primary};

      &:hover {
        border-color: ${({ theme }) => theme.primary};
      }
    }
  }

  &:nth-child(2) {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.yellow};

      &:hover {
        border-color: ${({ theme }) => theme.yellow};
      }
    }
  }

  &:last-child {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.blue};

      &:hover {
        border-color: ${({ theme }) => theme.blue};
      }
    }
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 1130px) {
    &:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
`

export const IconWrapper = styled.div<IconWrapperProps>`
  padding: 16px;
  border-radius: 5px;
  border: 0 !important;

  ${props => backgroundIconVariations[props.type]}
`

export const Card = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 5px 5px 0px 0px;

  span {
    font-size: 24px;
    line-height: 34px;
    font-weight: bold;
    padding: 16px 0;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.auxText};
  }
`

export const AnimatedContainer = styled(motion.aside)`
  max-width: 100%;
  height: 6.4rem;
  align-self: flex-start;
  position: absolute;
  z-index: 1;
  top: 80%;
  left: 0;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.primary} 20%, ${theme.yellow} 40%, ${theme.blue} 100%)`};
`
