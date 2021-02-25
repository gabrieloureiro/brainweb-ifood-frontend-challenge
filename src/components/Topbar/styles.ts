/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import { IconWrapperProps } from './types'

export const StyledBar = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  justify-content: space-between;
  z-index: 5;
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.content};
`

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
`
export const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  bottom: 14px;
  right: 80px;
  padding: 8px;
  background: transparent;
  cursor: pointer;
  position: absolute;
  transition: transform 0.5s ease;
`

export const Logos = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
`

export const Brand = styled.img`
  border: 0;
  margin: auto 0;
  max-height: 30px;
  height: 30px;
  margin-left: 32px;
  max-width: 90px;
  transition: all 0.5s ease;
  cursor: pointer;

  @media screen and (max-width: 315px) {
    height: 20px;
    &:first-child {
      width: 40px;
    }

    &:last-child {
      width: 20px;
    }
  }
`
export const Avatar = styled.img`
  position: absolute;
  right: 0;
  border: 0;
  margin: auto 0;
  margin-right: 32px;
  max-width: 35px;
  max-height: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.auxText};
  transition: all 0.4s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 250px) {
    margin: 0 30px;
  }
`
