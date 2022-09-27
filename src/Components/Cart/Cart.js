import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Order summary</h4>
            <h2>Select Items: {cart.length}</h2>
        </div>
    );
};

export default Cart;