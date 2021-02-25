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
  border: 0 !important;
  position: absolute;
  right: 24px;
  transition: all 0.2s ease-in-out;

  ${props => backgroundIconVariations[props.type]}

  @media screen and (max-width: 374px) {
    padding: 12px;
  }
`

export const FullRowCardListItem = styled.li`
  position: relative;
  z-index: 2;

  &:first-child {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.primary};

      &:hover {
        border-color: ${({ theme }) => theme.primary};
      }
    }
  }

  &:nth-child(2) {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.yellow};

      &:hover {
        border-color: ${({ theme }) => theme.yellow};
      }
    }
  }

  &:last-child {
    div {
      border-bottom: 2px solid ${({ theme }) => theme.blue};

      &:hover {
        border-color: ${({ theme }) => theme.blue};
      }
    }
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 1130px) {
    &:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
`
