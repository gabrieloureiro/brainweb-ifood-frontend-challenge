/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline:none;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth !important;
    transition: color, background-color 0.5s ease-out;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.body};
    font: normal normal normal 20px/26px Source Sans Pro;
    font-size: 20/26px;
    letter-spacing: 0.4px;
    transition: font-size 1s ease;

    @media screen and (max-width: 767px) {
      font-size: 18px/24px;
      letter-spacing: 0.36px;
    }

    @media screen and (max-width: 375px) {
      font-size: 16px/22px;
      letter-spacing: 0.32px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  body {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font: normal normal 600 42px/50px Source Sans Pro;
    letter-spacing: 0.84px;
  }

  h2 {
    font: normal normal 600 36px/40px Source Sans Pro;
    letter-spacing: 0.72px;
  }

  h3 {
    font: normal normal 600 30px/36px Source Sans Pro;
    letter-spacing: 0.6px;
  }

  h4 {
    font: normal normal 600 26px/32px Source Sans Pro;
    letter-spacing: 0.52px;
  }

  h5 {
    font: normal normal 600 24px/30px Source Sans Pro;
    letter-spacing: 0.48px;
  }

  body,
  html,
  #__next {
    height: 100%;
		min-height: -webkit-fill-available;
    transition: color, background-color 0.5s ease-out;

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
      background-color: ${({ theme }) => theme.red};
    }

  }
`
