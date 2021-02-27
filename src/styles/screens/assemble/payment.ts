/* eslint-disable prettier/prettier */
import { Card } from '@/components/Card'
import { lighten, shade } from 'polished'
import styled from 'styled-components'

export const CashierWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 24px 0;
`

export const MediumCard = styled(Card)`
  position: relative;
  display: block;
  height: 500px;
  width: calc(50% - 16px);
  padding: 32px;
  background-color: ${({ theme }) => theme.content};
  border-radius: 5px;
  border: 2px solid transparent;
  border-bottom: 2px solid ${({ theme }) => shade(0.05, theme.yellow)};
  transition: all 0.2s ease 0s;

  img {
    width: 250px;
    height: 250px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    opacity: 0.85;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(61, 60, 66);
  }

  &:nth-of-type(1) {
    width: calc(65% - 8px);
    margin-right: 16px;
  }

  &:nth-of-type(2) {
    border: 0;
    width: calc(30% - 8px);
    overflow-y: scroll;
  }

  &:hover {
    border: 2px solid ${({ theme }) => shade(0.05, theme.yellow)};
    transform: none;

    &:nth-of-type(2) {
      border: 0;
      transform: none;
      background-color: ${({ theme }) => theme.content};
      cursor: default;
    }
  }

  @media screen and (max-width: 1130px) {
    &:nth-of-type(1) {
      margin-right: 0;
      margin-bottom: 16px;
    }

    &:nth-of-type(2) {
      height: auto;
      max-height: 100%;
      overflow-y: hidden;
    }
  }

  @media screen and (max-width: 450px) {
    &:nth-of-type(2) {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 280px) {
    &:nth-of-type(1) {
      p {
        font-size: 14px;
      }
    }
  }

`
export const SmallCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  width: 100%;
  background: ${({ theme }) =>
    theme.title !== 'light'
      ? lighten(0.05, theme.content)
      : shade(0.05, theme.content)};
  border-radius: 5px;
  padding: 16px;
  position: relative;

  span {
    cursor: text;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    padding-top: 64px;
    cursor: text;
    font-size: 14px;
    color: ${({ theme }) =>
    theme.title === 'dark'
      ? shade(0.3, theme.text)
      : lighten(0.3, theme.text)};
  }

  &:nth-child(2) {
    margin-top: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (max-width: 450px) {
    height: auto;
    span {
      font-size: 16px;
    }
  }
`
export const IconWp = styled.div`
  margin: 40px auto;
  padding: 16px;
  max-width: 72px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.yellow};
`

export const ActionTitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`

export const TitleOffer = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 500;
`

export const DescriptionOffer = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  max-width: 350px;
  padding-top: 32px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`

export const BenefitPoints = styled.span`
  position: absolute;
  font-size: 18px;
  background-color: ${({ theme }) => shade(0.05, theme.yellow)};
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  right: 0px;
  bottom: 0px;
  border-radius: 5px 5px 0px 0;
  padding: 12px 16px;

  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }

  @media screen and (max-width: 768px) {
    &:hover {
      & > div {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`
export const Tooltip = styled.div`
  text-decoration: none;
  position: absolute;
  bottom: -80px;
  opacity: 0;
  visibility: hidden;
  line-height: 20px;
  width: 300px;
  right: 0;
  background-color: ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: 0.5px solid ${({ theme }) => theme.content};
  padding: 8px;
  transition: 300ms linear;
  z-index: 5;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    right: 15px;
    top: -5px;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.content};
    border-left: 0.5px solid ${({ theme }) => theme.content};
    border-top: 0.5px solid ${({ theme }) => theme.content};

  }
`
export const CashierTitle = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;

  span {
    font-size: 24px;
    font-weight: 500;
    cursor: text;
  }

  @media screen and (max-width: 450px) {
    span {
      font-size: 16px;
    }
  }
`

export const PayButton = styled.button`
  margin-top: 16px;
  outline: 0;
  border: 0;
  width: 100%;
  height: 45px;
  padding: 4px 16px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => shade(0.2, theme.primary)};
  transition: all 0.2s ease-in-out;

  &:hover{
    background-color: ${({ theme }) => shade(0.5, theme.primary)};
  }
`
