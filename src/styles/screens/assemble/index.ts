import styled, { css } from 'styled-components'

interface IconWrapperProps {
  type: string
}

export const backgroundIconVariations = {
  1: css`
    background: ${({ theme }) => theme.primary};
  `,
  2: css`
    background: ${({ theme }) => theme.yellow};
  `,
  3: css`
    background: ${({ theme }) => theme.blue};
  `
}

export const FullRowCardList = styled.ul`
  z-index: 2;
`

export const IconWrapper = styled.div<IconWrapperProps>`
  padding: 16px;
  border-radius: 5px;
  position: absolute;
  right: 24px;
  transition: all 0.5s ease-in-out;

  ${props => backgroundIconVariations[props.type]}

  @media screen and (max-width: 450px) {
    padding: 12px;
  }
`

export const FullRowCardListItem = styled.li`
  position: relative;
  z-index: 2;
`
