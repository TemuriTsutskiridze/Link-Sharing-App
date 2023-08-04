import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Instrument Sans', sans-serif;
    }
`;

export default Globals;
