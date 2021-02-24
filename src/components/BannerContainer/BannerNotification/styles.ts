/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

import { animated } from 'react-spring'

import { HolderProps, ButtonProps } from './types'

export const Holder = styled(animated.div) <HolderProps>`
  position: relative;

  width: 489px;
  min-height: 253px;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001a;

  & + div {
    margin-top: 12px;
  }

  @media screen and (max-width: 542px) {
    width: 100%;
  }

  ${props => bannerVariations[props.type || '']}
`
export const Title = styled.span<HolderProps>`
  text-align: left;
  font: normal normal 600 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  padding: 0 12px 0 60px;

  @media screen and (max-width: 319px) {
    padding-left: 35px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 293px) {
    font-size: 14px;
    line-height: 18px;
  }

  ${props => bannerVariations[props.type || '']}
`

export const Description = styled.span<HolderProps>`
  text-align: left;
  padding: 30px 0 30px 60px;
  font: normal normal normal 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;

  @media screen and (max-width: 319px) {
    padding-left: 35px;
  }

  @media screen and (max-width: 293px) {
    padding: 30px 0;
  }
`

export const Button = styled.button<ButtonProps>`
  outline: 0;
  border: 0;
  font-weight: bold;
  width: 158px;
  height: 35px;
  padding: 6px 18px;
  border-radius: 5px;
  margin-left: 60px;

  @media screen and (max-width: 319px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 293px) {
    margin: 0 auto;
  }
`

export const CloseButton = styled.button<ButtonProps>`
  outline: 0;
  border: 0;
  position: absolute;
  right: 30px;
  top: 30px;
  background: transparent;
  color: #fff;
`

const bannerVariations = {
  info: css`
    background: ${props => props.theme.lighterInk};
    color: ${props => props.theme.white};

    button:last-child  {
      background: ${props => props.theme.darkestWhite};
      color: ${props => props.theme.lighterInk};
    }
  `,
  success: css`
    background: ${props => props.theme.green};
    color: ${props => props.theme.white};

    button:last-child  {
      background: ${props => props.theme.mostLightestGreen};
      color: ${props => props.theme.green};
    }
  `,

  error: css`
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};

    button:last-child  {
      background: ${props => props.theme.mostLightestRed};
      color: ${props => props.theme.red};
    }
  `,
  warning: css`
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.white};

    button:last-child {
      background: ${props => props.theme.lighterYellow};
      color: ${props => props.theme.yellow};
    }
  `,
  neutral: css`
    background: ${props => props.theme.white};
    color: ${props => props.theme.ink};

    span {
      padding-left: 0;
    }

    span + span {
      color: ${props => props.theme.lightInk};
    }

    button:nth-child(2){
      color: ${props => props.theme.lightInk};
    }

    button:last-child  {
      background: ${props => props.theme.mostLightestBlue};
      color: ${props => props.theme.blue};
      margin-left: 0;
    }
  `
}
