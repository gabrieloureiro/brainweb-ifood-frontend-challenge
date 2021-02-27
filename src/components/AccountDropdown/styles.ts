/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Button from '@/components/Button'
import { lighten, shade } from 'polished'

interface AvatarProps {
  active?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.4rem;
  position: relative;

  cursor: pointer;
  > img {
    width: 4.8rem;
    height: 4.8rem;
  }
`

export const Avatar = styled.img<AvatarProps>`
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
  border: 1.5px solid ${({ theme, active }) => active ? theme.primary : theme.auxText};
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 250px) {
    margin: 0 30px;
  }
`

export const AnimatedDropdown = styled(motion.nav)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 65px;
    right: 0;
    min-width: 14.6rem;
    border-radius: 5px;
    background: ${theme.content};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

    ::before {
      content: '';
      position: absolute;
      right: 40px;
      top: -5px;
      height: 8px;
      width: 8px;
      transform: rotate(45deg);
      background-color: ${({ theme }) => theme.content};
    }

    @media screen and (max-width: 1180px){
      right: 24px;

      ::before {
        right: 12px;
      }
    }

  `}
`

export const NavButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
    background: ${theme.content};

    :hover {
      background: ${theme.title === 'dark' ? lighten(0.015, theme.content) : shade(0.015, theme.content)};
    }
    :first-child {
      border-radius: 5px 5px 0 0;
      color: ${({ theme }) => shade(0.1, theme.blue)};
    }
    :nth-child(2) {
      color: ${({ theme }) => shade(0.1, theme.yellow)};
      font-weight: 500;
    }
    :last-child {
      color: ${({ theme }) => shade(0.1, theme.primary)};
      border-radius: 0 0 5px 5px;
    }
  `}
`
