import { lighten } from 'polished'
import styled, { css } from 'styled-components'

import { FullRowCardProps } from './types'

const indexVariations = {
  1: css`
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  `,
  2: css`
    border-bottom: 2px solid ${({ theme }) => theme.yellow};
  `,

  3: css`
    border-bottom: 2px solid ${({ theme }) => theme.blue};
  `
}

export const FullCard = styled.div<FullRowCardProps>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: 180px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 5px 7px #0000000d;
  background: ${({ theme }) => theme.content};
  transition: all 0.2s ease 0s;

  ${props => indexVariations[props.index]}

  cursor: pointer;

  span {
    font-size: 24px;
    line-height: 34px;
    font-weight: bold;
    padding: 16px 0;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.auxText};
  }

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.content)};
    transform: translateY(-5px);
    box-shadow: 0px 20px 25px #0000001a;
  }

  @media screen and (max-width: 450px) {
    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 350px) {
    span {
      font-size: 14px;
      max-width: 100px;
      line-height: 20px;
    }
  }
`
