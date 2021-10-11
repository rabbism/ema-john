import React from 'react';
import './Cart.css'

const Cart = (pars) => {
    console.log(pars)
    const {cart}  =pars;
    let total =0 ;
    for(const product of cart){
         total = total+ product.price;

    }
    return (
        <div className='card'>
            <h3>Order Summary</h3>
                <p>Items ordered:{pars.cart.length}</p>
                <p>Price:${total}</p>
                <p>Shipping & Handling:$0</p>
                <p>Estimated Tax:$0</p>
                <h3>Order Total : $0</h3>
                <button>Review your order</button>
        </div>
    );
};

export default Cart;