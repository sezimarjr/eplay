import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84'
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
  background-color: ${cores.preto};
  color: ${cores.branca};
  padding-top: 40px;
}

.container{
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

}

`
