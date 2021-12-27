import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`