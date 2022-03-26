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
    </div>
  );
};

export default Cart;
