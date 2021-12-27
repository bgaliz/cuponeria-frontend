import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 109px;
    
    background: ${props => props.theme.background.header};
`

export const Content = styled.div`
    width: 80%;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`