import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addToCart, onDecrement, } from "../redux/actions/cartActions";
import PropTypes from 'prop-types';

 class Cart extends Component {
  getNameById = id=>{
    return this.props.products.filter(p=> p.id == id)[0]
  }
  onIncrement= e => {
    this.props.addToCart(e.target.id);
  }

  onDecrement= e => {
    this.props.onDecrement(e.target.id);
  }
  // onChangetotal=e=> {
  //   this.props.onChangetotal(e.target.id);
  // }

  getTotal = ()=>{
    return Object.keys(this.props.cart).reduce((total,c)=>{
      console.log(total , this.getNameById(c).price , this.props.cart[c]);
      total= total + (this.getNameById(c).price * this.props.cart[c])
      return total;
    },0)
  }

  /*onChange = (e,title) => {
    console.log(e.target.title);
  }*/
   render() {
    console.log(Object.keys(this.props.cart));
    return (
      <div className='cart'>
        <div >
           {/* {this.props.cart.map(item=> <h1 key={item.id}>{item.title}</h1>)} */}
           {Object.keys(this.props.cart).map(id=> this.getNameById(id)).map(({id, title, price, url},i)=>
           // eslint-disable-next-line react/jsx-key
           <div className='row'> 
           
           
            <h1 key={i}>{<img src={url} width={200}/>}</h1> 
            
            
            
        <div className='col-md-6'>
            <h1 key={i}>{title}</h1>
             <p>Available offers
            Bank Offer5% Cashback on Flipkart Axis Bank Card 
            <br/>
            T&C 
            <br/>
             Get Google Audio @ 6699 
             <br/>
              T&C
              <br/>
             Google Nest hub(2nd gen) at just ₹4999
             <br/>
             T&C 
             <br/>
             Special PriceGet extra ₹1861 off (price inclusive of cashback/coupon)
             <br/>
             T&C
             </p>
             <button id={id} onClick={this.onDecrement}>-</button>{this.props.cart[id]}<button id={id} onClick={this.onIncrement}>+</button> &nbsp;
             {/* {price} &nbsp;
             {this.getTotal()}  */}
             <select id='Qtys'>
  <option value="A">Qty 1</option>
  <option value="B">2</option>
  <option value="C">3</option> 
</select> &nbsp;

  <button className='btn' >Buy Now</button>

  <div>
  
        
        ₹ price &nbsp;
             {price}&nbsp;
            <br/>
        &nbsp;total=&nbsp;
        ₹{this.getTotal()}
      

  </div>




             </div>       
           </div>
           )}  
           </div>
        
        {/* <table border={2}>
          <tr><th>image</th><th>title</th>quantity<th>price</th></tr>
        {Object.keys(this.props.cart).map(id=> this.getNameById(id)).map(({id, title, price, url},i)=> <tr key={i}>
          <td><img src={url} width={200}/></td>
          <td>{title}</td>
          <td><button id={id} onClick={this.onDecrement}>-</button>{this.props.cart[id]}<button id={id} onClick={this.onIncrement}>+</button></td>
          <td>{price}</td>
        </tr>)}
        <tr>
          <td></td>
          <td></td>
          <td>total</td>
          <td>{this.getTotal()}</td>
        </tr>
        </table> */}
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.array,
  addToCart: PropTypes.func,
  onDecrement: PropTypes.func
}
const mapStateToProps= ({products,
  cart}) =>{
  return {
    products,
    cart
  }
}
export default connect(mapStateToProps,{addToCart, onDecrement})(Cart);