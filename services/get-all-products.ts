/** Return all products from FakeAPI */
export async function getAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return products;
}