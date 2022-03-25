import React, { useEffect, useState } from 'react';
import Tree from '../Tree/Tree';
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
      <div className='tree-products-container'>
        {trees.map((tree) => (
          <Tree key={tree.id} tree={tree}></Tree>
        ))}
      </div>
      <div className='cart-container'>
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Shop;
