import React from 'react';
import './Cart.css';
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      {cart.map((item) => (
        <div className='cart-info'>
          <img className='cart-img' src={item.img} alt='' />
          <h5>{item.name}</h5>
          <button className='cart-btn'>
            <AiOutlineDelete></AiOutlineDelete>
          </button>
        </div>
      ))}

      <button className='choose-btn'>
        <p className='choose-btn-text'>Choose One Tree</p>
      </button>

      <button className='choose-btn1'>
        <p className='choose-btn-text'>Choose Again</p>
      </button>
    </div>
  );
};

export default Cart;
