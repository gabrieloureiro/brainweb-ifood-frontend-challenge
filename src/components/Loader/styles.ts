import styled, { keyframes } from 'styled-components'

import { LoaderInterface } from './types'
const load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const handleSize = (size: string) => {
  switch (size) {
    case 'small': {
      return '35px'
    }
    case 'large': {
      return '130px'
    }
    default: {
      return '70px'
    }
  }
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
`

export const StyledLoader = styled.div`
  border-radius: 50%;
  width: ${(props: LoaderInterface) => handleSize(props.size)};
  height: ${(props: LoaderInterface) => handleSize(props.size)};
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid ${({ theme }) => theme.primary};
  border-right: 5px solid ${({ theme }) => theme.primary};
  border-bottom: 5px solid ${({ theme }) => theme.primary};
  border-left: 5px solid transparent;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load} 1s infinite linear;
  animation: ${load} 1s infinite linear;

  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`
