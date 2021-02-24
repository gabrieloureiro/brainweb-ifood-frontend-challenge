/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: block;
  max-width: 100%;
  min-height: 100%;
  padding: 96px 24px 24px;
  background: ${({ theme }) => theme.body};
  transition: padding 0.5s ease;

`
