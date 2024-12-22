import React from 'react';

const Header = ({ userId, cart, onLogout }) => {
  return (
    <header>
      <h1>Shopping Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cart">Cart ({cart.length})</a> {/* Cart count */}
      </nav>

      {userId && (
        <button onClick={onLogout} style={{ marginLeft: '20px', padding: '10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
