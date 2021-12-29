import React from 'react';

import { Button } from 'storybook_cp/dist/components/Button';

import { CardContainer, ImageField, CartContent } from './styles';

interface ICard {
    image: string,
    title: string,
    price: string;
}

const Card: React.FC<ICard> = ({
    image,
    title,
    price
}: ICard) => {
    return (
        <CardContainer>
            <ImageField>
                <img src={image} alt="product.png" />
            </ImageField>
            <h4>{title}</h4>
            <span>R${price}</span>
            <Button text="Ver Produto"/>
        </CardContainer>
    )
}

export default Card