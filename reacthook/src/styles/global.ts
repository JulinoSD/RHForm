
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font: 400 16px 'Ubuntu', sans-serif;
        background: #100a0e;
    }
    a {
        color: inherit;
        text-decoration: none;
      }
    fieldset {
        border: none;
      }
`;