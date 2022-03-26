import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Tree from '../Tree/Tree';
import './Shop.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Shop = () => {
  const [trees, setTrees] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('trees.json')
      .then((res) => res.json())
      .then((data) => setTrees(data));
  }, []);

  const handleAddToCart = (tree) => {
    const newCart = [...cart, tree];
    if (newCart.length <= 4) {
      setCart(newCart);
    } else {
      // alert('cant');
      notify();
    }
  };

  const notify = () => {
    toast.error('Oops! You cant add more than 4', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className='shop-container'>
      <div className='tree-products-container'>
        {trees.map((tree) => (
          <Tree
            key={tree.id}
            tree={tree}
            handleAddToCart={handleAddToCart}
          ></Tree>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
