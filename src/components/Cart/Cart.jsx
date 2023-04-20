import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const cart = props.cart;  option 1
    // const {cart} = props;   option 2

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Select Item: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;