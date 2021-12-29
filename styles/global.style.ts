import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

export const Container = styled.div`
    padding: 20px 70px;

    @media screen and (max-width: 700px){
        padding: 20px 5px;
    }
`