import styled from 'styled-components'

export const FullCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: 180px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px #0000000d;
  background: ${({ theme }) => theme.content} 0% 0% no-repeat padding-box;
  border: 2px solid ${({ theme }) => theme.content};
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  span {
    font-size: 24px;
    line-height: 34px;
    font-weight: bold;
    padding: 16px 0;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.auxText};
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0px 20px 25px #0000001a;

    &:nth-child(2) {
      border-color: ${({ theme }) => theme.primary};
    }

    &:nth-child(3) {
      border-color: ${({ theme }) => theme.yellow};
    }

    &:last-child {
      border-color: ${({ theme }) => theme.blue};
    }
  }

  @media screen and (max-width: 374px) {
    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 270px) {
    span {
      font-size: 14px;
    }
  }
`
