import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log('products load before featch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log('products loaded')
            })
    }, [])


    useEffect(()=>{
        // console.log('local storage first line', products)
        const storedCart=getStoredCart();
        const savedCart=[];
        // console.log(storedCart)
        for (const id in storedCart) {
            //  console.log(id)
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                // console.log(addedProduct)
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }              
        }

        setCart(savedCart);
        // console.log('local storage finished')
    },[products])



    
    const AddToCart = (selectedProduct) => {
        const exist= cart.find(product=>product.id===selectedProduct.id)
        let newCart=[];
        if(!exist){
            selectedProduct.quantity=1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest=cart.filter(product=>product.id!==selectedProduct.id)
            exist.quantity=exist.quantity+1;
            newCart=[...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }



    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;