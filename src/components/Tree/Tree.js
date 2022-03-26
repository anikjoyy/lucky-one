import React from 'react';
import './Tree.css';
import { FaCartPlus } from 'react-icons/fa';

const Tree = (props) => {
  const { tree, handleAddToCart } = props;
  const { img, name, price, ratings } = tree;
  return (
    <div className='tree-product'>
      <img src={img} alt='' />
      <div className='tree-product-info'>
        <h3 className='tree-product-name'>Name: {name}</h3>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(tree)} className='btn-cart'>
        <p>Add to Cart</p>
        <FaCartPlus></FaCartPlus>
      </button>
    </div>
  );
};

export default Tree;
