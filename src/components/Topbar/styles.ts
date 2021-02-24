import styled from 'styled-components'

export const StyledBar = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  justify-content: space-between;
  z-index: 5;
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.content};
  border-bottom: 0.5px solid ${({ theme }) => theme.primary};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1180px;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  font-style: bold;
  color: ${({ theme }) => theme.primary};
  opacity: 1;
  visibility: visible;
  transition: all 0.2s ease;

  @media screen and (max-width: 540px) {
    opacity: 0;
    visibility: hidden;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Brand = styled.img`
  border: 0;
  margin: auto 0;
  max-height: 48px;
  height: 48px;
  margin-left: 32px;
  max-width: 90px;
  transition: all 0.5s ease;

  @media screen and (max-width: 315px) {
    height: 30px;
    &:first-child {
      width: 50px;
    }

    &:last-child {
      width: 30px;
    }
  }
`
export const Avatar = styled.img`
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

  @media screen and (max-width: 250px) {
    margin: 0 30px;
  }
`
