import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    /* border: 1px dashed red; */
 }

 body {
   background: ${({ theme }) => theme.colors['base-background']};
   color: ${({ theme }) => theme.colors['base-text']};
   -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
   font-family: 'Roboto';
   font-weight: 400;
 }

 button {
   cursor: pointer;
   
 }

a {
   text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
`
