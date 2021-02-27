import { motion } from 'framer-motion'
import { shade } from 'polished'
import styled from 'styled-components'

export const Title = styled(motion.h1)`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  padding: 32px 0 64px 0;
  transition: all 0.5s ease;

  @media screen and (max-width: 1130px) {
    padding-bottom: 32px;
  }
`

export const StepperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  left: 48.5%;
  padding: 8px 12px 8px 4px;
  border-radius: 5px;
  background: ${({ theme }) => shade(0.15, theme.yellow)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  span {
    font-size: 14px;
    color: #fff;
  }

  &:hover {
    background: ${({ theme }) => shade(0.3, theme.yellow)};
  }

  @media screen and (max-width: 1024px) {
    padding: 5px;
    left: 50px;
    z-index: 5;

    svg {
      width: 40px;
      height: 40px;
    }

    span {
      display: none;
    }
  }

  @media screen and (max-height: 882px) {
    padding: 5px;
    left: 50px;
    z-index: 5;

    svg {
      width: 40px;
      height: 40px;
    }

    span {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    left: 24px;
    bottom: 12px;
  }
`

export const FloatChat = styled.a`
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.red} 0% 0% no-repeat padding-box;
  border-radius: 5px;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  z-index: 5;

  &:hover {
    background: ${({ theme }) => theme.green} 0% 0% no-repeat padding-box;
    transform: translateY(-3px);
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);

    & > div {
      opacity: 1;
      visibility: visible;
    }
  }

  @media screen and (max-width: 450px) {
    right: 24px;
    bottom: 12px;
  }
`

export const Message = styled.div`
  text-decoration: none;
  position: absolute;
  bottom: 80px;
  opacity: 0;
  visibility: hidden;
  width: 300px;
  right: 0;
  background-color: ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: 0.5px solid ${({ theme }) => theme.content};
  padding: 8px;
  transition: 300ms linear;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    right: 15px;
    bottom: -5px;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.content};
    border-bottom: 0.5px solid ${({ theme }) => theme.content};
    border-right: 0.5px solid ${({ theme }) => theme.content};
  }
`
