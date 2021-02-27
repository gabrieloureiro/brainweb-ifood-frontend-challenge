import styled from 'styled-components'

interface CardRecProps {
  active?: boolean
}

export const CardRecommend = styled.div<CardRecProps>`
  background: ${({ theme }) => theme.content};
  position: relative;
  width: 350px;
  height: 470px;
  padding: 24px;
  transition: all 100ms ease;
  opacity: ${({ active }) => (active ? '1' : '0.4')};
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  border-right: 8px solid ${({ theme }) => theme.body};
  border-left: 8px solid ${({ theme }) => theme.body};

  span {
    &:nth-of-type(1) {
      font-weight: 500;
      font-size: 18px;
      color: ${({ theme }) => theme.text};
    }
  }
`
