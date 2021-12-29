import styled from 'styled-components';

import { Container } from '../../styles/global.style';

export const HeaderWrapper = styled(Container)`
    display: flex;
    align-items: center;
    
    height: 109px;
    
    background: ${props => props.theme.background.header};

    @media screen and (max-width: 700px) {
        & {
            height: 55px;
        }
    }
`

export const Content = styled.div`
    width: 100%;

    display: flex;

    @media screen and (max-width: 700px) {
        img {
            margin-top: 8px;
            width: 160px;
        }
    }
`