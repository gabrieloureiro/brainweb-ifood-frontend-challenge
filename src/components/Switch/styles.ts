import { shade } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 24px;

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 65px;
    height: 35px;
    background: ${({ theme }) => shade(0.3, theme.content)};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  label > span {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  input:checked + label > span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  label:active > span {
    width: 35px;
  }
`

export const Message = styled.span`
  margin-left: 10px;
  font-size: 14px;
`
