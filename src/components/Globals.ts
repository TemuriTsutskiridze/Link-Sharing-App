import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --purple: #633CFF;
        --purple-hover: #BEADFF;
        --purple-light: #EFEBFF;
        --gray-dark: #333333;
        --gray: #737373;
        --borders: #D9D9D9;
        --gray-light: #FAFAFA;
        --white: #FFFFFF;
        --red: #FF3939;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Instrument Sans', sans-serif;
        min-height: 100vh;
    }
`;

export default Globals;
