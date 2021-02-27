import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { motion } from 'framer-motion'

import Button from '@/components/Button'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  position: relative;
  flex: 1;
`

export const AnimatedContainer = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
    background: ${theme.body};
    border-radius: 5px;
    box-shadow: box-shadow: 0px 20px 25px #0000001a;

    h1 svg {
      width: 12rem !important;
      height: auto !important;
    }

    h2 {
      font-size: 24px;
      text-align: center;
      font-weight: 500;
    }

    img {
      max-width: 120px;
      max-height: 45px;
    }

  `}
`

export const EnterButton = styled(Button)`
  ${({ theme }) => css`
    padding: 16px 32px;
    width: 350px;
    min-width: 115px;
    margin-top: 1.2rem;
    color: #fff;
    background: ${shade(0.2, theme.primary)};
    transition: all 200ms ease-in-out;

    &:hover {
      background: ${shade(0.4, theme.primary)};
    }

    @media screen and (max-width: 364px) {
      width: 100%;
    }
  `}
`
export const FloatThemeChanger = styled(motion.div)`
  position: absolute;
  top: 64px;
  cursor: pointer;
`
