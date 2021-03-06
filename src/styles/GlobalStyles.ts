import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { MainFont } from './Fonts';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * { 
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html { 
        font-size: 16px; 
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, *:before, *:after { 
        box-sizing: inherit;
    }
    body { 
        font-family: ${MainFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #F6F7F8;
      
    }
`;
