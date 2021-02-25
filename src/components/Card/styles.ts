import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { CardInterface } from './types'

const elevationVariations = {
  1: css`
    box-shadow: 0px 5px 7px #0000000d;
  `,
  2: css`
    box-shadow: 0px 10px 10px #0000000d;
  `,

  3: css`
    box-shadow: 0px 15px 20px #00000012;
  `,
  4: css`
    box-shadow: 0px 20px 25px #0000001a;
  `,
  none: css`
    box-shadow: none;
  `
}

export const StyledCard = styled.div<CardInterface>`
  background: ${({ theme }) => theme.content};
  border: 2px solid ${({ theme }) => theme.content};
  border-radius: 5px;
  width: 350px;
  height: 400px;
  padding: 24px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.content)};
    border: 2px solid ${({ theme }) => theme.primary};
    transform: translateY(-5px);
  }

  ${props => elevationVariations[props.elevation || 'none']}

  @media screen and (max-width: 1130px) {
    min-width: 100%;
    width: 100%;
  }
`
