import type { NextPage } from 'next'

const HomeView: NextPage = () => {
    return <h1>home page</h1>
}

export async function getStaticProps () {
    const products = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))


    return {
        props: {
            products
        }
    }
}

export default HomeView;