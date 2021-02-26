/* eslint-disable prettier/prettier */

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
`
