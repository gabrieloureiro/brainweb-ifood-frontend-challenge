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


    @media screen and (max-width: 719px) {
      margin-bottom: 24px;
    }
  }

  footer {
    position: absolute;
    bottom: 24px;
    left: 40%;
    right: 0;
    margin: 0 auto;
    display: block;
    max-width: 1180px;
    text-align: center;
    color: ${({ theme }) =>
    theme.title === 'light'
      ? lighten(0.4, theme.text)
      : shade(0.4, theme.text)};
    font-size: 14px;

    @media screen and (max-width: 719px){
      left: 0;
      max-width: 327px;
    }

    @media screen and (max-width: 450px) {
      bottom: 64px;
    }
  }


`
