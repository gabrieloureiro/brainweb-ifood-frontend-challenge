import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  overflow: hidden;
  padding: 24px;
  z-index: 999;

  @media screen and (max-width: 542px) {
    padding: 16px;
  }
`
