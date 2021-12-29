import styled from 'styled-components'

interface INavigationButton {
    selected?: boolean;
}

export const Navigator = styled.div`
    width: 100%;
    height: 60px;
    
    background: ${props => props.theme.white};
    box-shadow: 0px 3px 6px ${props => props.theme.shadow_shade};

    @media screen and (max-width: 700px) {
        position: fixed;
        bottom: 0;
    }

`

export const MenuContainer = styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    img, svg {
        margin-right: 2px;
        margin-bottom: 1px;
    }
`

export const Menu = styled.button<INavigationButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1rem;
    
    color: ${props => props.theme.medium};

    border: none;
    background: transparent;

    cursor: pointer;

    ${props => props.selected && `
        color: ${props.theme.danger};
    `}

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        
        height: 50px;
        
        font-size: 0.75em;

        svg {
            margin-bottom: 3px;
        }
    }
`