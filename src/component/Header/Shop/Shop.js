import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
 const [product ,setProduct] = useState([]);
 useEffect(() =>{
     fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`)
     .then(res => res.json())
     .then(data=> setProduct(data))
 },[])
 const [cart ,setCart] = useState([])

 const handelToCart = product => {
     const newCard =[...cart,product]
     setCart(newCard)
 }



    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   product.map(product =><Product
                     handelToCard ={handelToCart}
                     product= {product}>

                     </Product>)
               } 
            </div>
            <div className="card-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;