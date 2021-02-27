import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { ButtonProps } from '.'

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.text};
    :hover {
      background: ${({ theme }) => lighten(0.2, theme.content)};
      color: ${({ theme }) => theme.text};
    }
  `,
  transparent: css`
    background: transparent;
  `
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.content};
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: 5px;
    color: ${color || theme.text};
    transition: 180ms ease-in-out;
    * {
      transition: 180ms ease-in-out;
    }
    ${variant && variants[variant]};
    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`
