import { NextComponentType } from 'next';

import { HeaderWrapper, Content } from './styles';

export const Header: NextComponentType = () => {
    return (
        <HeaderWrapper>
            <Content>
                <img
                    src='/svg/cuponeria-logo.svg'
                    alt="Cuponeria.svg"
                />
            </Content>
        </HeaderWrapper>
    )
}