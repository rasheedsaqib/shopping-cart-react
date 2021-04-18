import {useEffect, useState} from 'react';
import Product from './Product/Product';
import css from './Products.module.css';
import axios from 'axios';

const Products = props => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(response=>{
                setProducts(response.data);
            });
    }, [products]);

    const productsList = products.map(product=>{
       return <Product key={product.id} title={product.title} price={product.price} description={product.description} image={product.image} addToCart={()=>props.addToCart(product)} />
    });

    return (
        <div className={css.products}> {productsList} </div>
    )
}

export default Products;