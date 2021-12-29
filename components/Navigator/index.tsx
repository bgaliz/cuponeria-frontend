import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';

import {
    RoupasSVG, 
    EletronicosSVG, 
    AcessoriosSVG 
} from '../../public/svg-component/svgs-navigation';

import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navigator, MenuContainer, Menu } from './styles';

import { useNavig } from '../../hooks/NavigationProvider';

export const Navigation: NextComponentType = () => {
    const { navSelected, handleNavSelected } = useNavig();

    function handleNavSelectedColor(newNavSelected: string) {
        handleNavSelected(newNavSelected);
    }
    
    return (
        <Navigator>
            <MenuContainer>
                <Menu 
                    selected={navSelected === 'home'}
                    onClick={() => handleNavSelectedColor('home')}
                >
                    <FontAwesomeIcon 
                        icon={faHome} 
                        width={14}
                        height={14}
                    />
                    <h4>Início</h4>
                </Menu>
                <Menu
                    selected={navSelected === 'roupas'}
                    onClick={() => handleNavSelectedColor('roupas')}
                >
                    <RoupasSVG 
                        width={14} 
                        height={14} 
                        selected={navSelected === 'roupas'}
                    />
                    <h4>Roupas</h4>
                </Menu>
                <Menu
                    selected={navSelected === 'eletronicos'}
                    onClick={() => handleNavSelectedColor('eletronicos')}
                >
                    <EletronicosSVG 
                        width={14} 
                        height={14} 
                        selected={navSelected === 'eletronicos'}
                    />
                    <h4>Eletrônicos</h4>
                </Menu>
                <Menu
                    selected={navSelected === 'acessorios'}
                    onClick={() => handleNavSelectedColor('acessorios')}
                >
                    <AcessoriosSVG 
                        width={14} 
                        height={14} 
                        selected={navSelected === 'acessorios'}
                    />
                    <h4>Acessórios</h4>
                </Menu>
                <Menu
                    selected={navSelected === 'carrinho'}
                    onClick={() => handleNavSelectedColor('carrinho')}
                >
                    <FontAwesomeIcon 
                        icon={faShoppingCart} 
                        width={14}
                        height={14}
                    />
                    <h4>Meu Carrinho</h4>
                </Menu>
            </MenuContainer>
        </Navigator>
    )
}