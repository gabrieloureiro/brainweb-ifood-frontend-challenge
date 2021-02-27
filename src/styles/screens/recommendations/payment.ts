/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { shade, lighten } from 'polished'
import { Col } from '@/components/Col'

export const FullCardRec = styled.div`
  background: ${({ theme }) => theme.content};
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  transition: all 0.5s ease;
  box-shadow: 0px 15px 20px #00000012;
`

export const Description = styled.p`
  cursor: text;
  font-size: 14px;
  color: ${({ theme }) =>
    theme.title === 'dark' ? shade(0.3, theme.text) : lighten(0.3, theme.text)};

  @media screen and (max-width: 450px) {
    max-width: 120px;
  }
`
export const CardRowRec = styled(Col)`
  height: 125px;
  width: 100%;
  background: ${({ theme }) =>
    theme.title !== 'light'
      ? lighten(0.05, theme.content)
      : shade(0.05, theme.content)};
  border-radius: 5px;
  padding: 16px;
  position: relative;
  margin: 16px 0;

  p {
    padding-top: 24px;
  }

  p + p {
    cursor: text;
    font-size: 14px;
    color: ${({ theme }) =>
    theme.title === 'dark'
      ? shade(0.3, theme.text)
      : lighten(0.3, theme.text)};
    margin-top: auto;
  }

  @media screen and (max-width: 450px) {
    height: auto;

    span {
      margin-right: auto;
    }
  }
`
