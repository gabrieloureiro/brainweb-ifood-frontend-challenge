/* eslint-disable prettier/prettier */

import { lighten, shade } from 'polished'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  display: block;
  max-width: 100%;
  min-height: 100%;
  padding: 96px 24px 24px;
  background: ${({ theme }) => theme.body};
  transition: padding 0.5s ease;

  main {
    margin: 0 auto;
    display: block;
    max-width: 1180px;
  }

  footer {
    position: fixed;
    bottom: 24px;
    left: 40%;
    right: 0;
    margin: 0 auto;
    display: block;
    max-width: 1180px;
    color: ${({ theme }) =>
    theme.title === 'light'
      ? lighten(0.4, theme.text)
      : shade(0.4, theme.text)};
    font-size: 14px;
  }
`
