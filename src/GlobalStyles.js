import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #212127;
        font-family: 'Poppins', sans-serif;
        color: #e6e6e6;
    }
    a{
        text-decoration: none;
        color: #4dc6ff;
        &:hover{
            color: #f7ff5a;
        }
    }
    h1{
        font-size: 2.4rem;
    }
`;

export default GlobalStyles;
