import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111',
  gray: '#333',
  green: '#10AC84'
}

export const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}
body{
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}

.container{
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;

  }



}

`
