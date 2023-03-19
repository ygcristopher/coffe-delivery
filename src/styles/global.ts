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
   background: ${(props) => props.theme.background};
   color: ${(props) => props.theme['base-text']};
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
`
