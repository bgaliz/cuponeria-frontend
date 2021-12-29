import React from 'react';
import Card from '../../components/Card';
import { getAllProducts } from '../../services/get-all-products';

import { Products } from './styles';

interface IProduct {
    id: number,
    title: string,
    price: string,
    category:string,
    description:string,
    image:string
}

interface HomeViewProps {
    products?: IProduct[];
}

const HomeView: React.FC<HomeViewProps> = ({
    products
}: HomeViewProps) => {
    return (
        <Products>
            {
                products?.map((product, index) => (
                    <Card 
                        key={index} 
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))
            }
        </Products>
    )
}

export async function getStaticProps () {
    const products = await getAllProducts();
    
    if( !products ) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            products
        },
        revalidate: 21600,
    }
}

export default HomeView;