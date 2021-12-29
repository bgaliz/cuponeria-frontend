import styled from 'styled-components';

import { Container } from '../../styles/global.style';

export const FooterWrapper = styled(Container)`
    width: 100%;
    height: 125px;

    display: flex;
    align-items: center;
    
    background: ${props => props.theme.background.header};

    @media screen and (max-width: 700px) {
        margin-bottom: 60px;
    }
`

export const Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    
`
export const BackgroundCircle = styled.a`
    width: 39px;
    height: 39px;

    margin: 0 15px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.white};
    color: ${props => props.theme.danger};
`