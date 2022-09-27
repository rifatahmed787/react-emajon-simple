import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, AddToCart }) => {
    // console.log(props)
    // const { product, AddToCart } = props;  //props er vitore product ache tai nicher line a props dite hbe na
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => AddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;