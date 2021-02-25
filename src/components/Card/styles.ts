import styled, { css } from 'styled-components'

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
  background: ${({ theme }) => theme.content} 0% 0% no-repeat padding-box;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  padding: 16px;
  transition: all 0.5s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    transform: translateY(-5px);
  }

  ${props => elevationVariations[props.elevation || 'none']}
`
