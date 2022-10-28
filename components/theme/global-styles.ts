import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

export const GlobalStyles = createGlobalStyle<Theme>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-weight: 700;
    font-size: 32px !important;
    line-height: 36px;
    letter-spacing: -1px;
    margin: 0 !important;
  }

  h2 {
    font-weight: 700;
    font-size: 20px !important;
    line-height: 22px;
    letter-spacing: -0.63px;
    margin: 0 !important;
  }

  h3 {
    font-weight: 700;
    font-size: 16px !important;
    line-height: 24px;
    letter-spacing: -0.8px;
    margin: 0 !important;
  }

  h4 {
    font-weight: 700;
    font-size: 12px !important;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin: 0 !important;
  }

  p {
    font-weight: 500;
    font-size: 12px !important;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin: 0 !important;
  }

  small {
    font-weight: 500;
    font-size: 11px !important;
    line-height: 18px;
    letter-spacing: -0.23px;
    margin: 0 !important;
  }

  body {
    color: ${props => props.theme.color};
    background: ${props => props.theme.bg};
  }

  p, small {
    color: ${props => props.theme.colorLight};
  }
`
