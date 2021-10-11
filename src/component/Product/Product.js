import React from 'react';
import './Product.css'

const Product = (pars) => {
    console.log(pars)
    const{name ,seller,img,price,stock} = pars.product
    return (
        <div className='product-cart'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>By:{seller}</p>
               <h2>$:{price}</h2>
               <p><small>only {stock} left in stock - order soon</small></p>
               <button onClick={()=>pars.handelToCard(pars.product)}>add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;