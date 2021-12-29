import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 327px;
    height: 348px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 6px 12px ${props => props.theme.shadow_shade};
    border: 1px solid ${props => props.theme.border};
    border-radius: 14px;

    margin-bottom: 30px;
    padding-bottom: 30px;

    overflow: hidden;
    
    h4,
    span,
    button {
        padding: 0 20px;
    }

    h4 {
        font-size: 1em;
        font-weight: 400;
    }

    span {
        font-size: 1.375em;
        font-weight: bold;
    }
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 15px;
`

export const ImageField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    background: ${props => props.theme.medium} 0% 0% no-repeat padding-box;
    
    img {
        background: transparent;
        width: 150px;
        height: 150px;
    }
`