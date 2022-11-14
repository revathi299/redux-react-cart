import React from 'react';
import PropTypes from 'prop-types';

export default function Product({product,onAddToCart}) {
    const {id,title, price, url } = product;
    const onAddToCartClick = e => onAddToCart(e.target.id);
  return (
      <div className='addcart'>
         <img src={url}  alt='' width={200}/>  
        <div><span>{title}</span><span> ₹{price}</span></div>
        <div >
          <div >
          <button id={id} className='onadd' onClick={onAddToCartClick}>Add to Cart</button>
          </div>
          </div>
      </div> 
    
  )
}

Product.propTypes = {
  product:PropTypes.object,
  onAddToCart: PropTypes.func
}
