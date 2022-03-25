import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetch('trees.json')
      .then((res) => res.json())
      .then((data) => setTrees(data));
  }, []);
  return (
    <div className='shop-container'>
      <div className='products-container'>
        <h3>This is Tree: {trees.length}</h3>
      </div>
      <div className='cart-container'>
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Shop;