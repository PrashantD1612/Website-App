// pages/cart.js
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) setUserId(storedUserId);
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart userId={userId} />
    </div>
  );
};

export default CartPage;
