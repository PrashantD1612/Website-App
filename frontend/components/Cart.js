import { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ userId}) => {
  const [cart, setCart] = useState({ items: [] }); 


// Function to fetch product from cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userId) return; 
        const token = localStorage.getItem('token');
        console.log("token"+token)
        if (!token) {
          console.error('No token found, unable to fetch cart.');
          return; 
        }
        const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        console.log('Response Data:', response.data);
        setCart({ items: response.data.products || [] });
  
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCart({ items: [] }); 
      }
    };
  
    fetchCart();
  }, [userId]);
  
  
    // Function to remove product from the cart
    const removeFromCart = async (productId) => {
      try {
        console.log("Removing product with ID:", productId);
    
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found, unable to remove product.');
          return; 
        }
        const response = await axios.post('http://localhost:5000/api/cart/remove-from-cart', {
          userId: userId, 
          productId: productId,
        }, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
    
        console.log('Response after removing product:', response.data);
      } catch (error) {
        console.error('Error removing product from cart:', error);
      }
    };
    
    return (
      <div>
        <h2>Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.items.map((item) => (
            <div
              key={item._id}
              style={{
                borderBottom: '1px solid #ddd',
                marginBottom: '20px',
                paddingBottom: '10px',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px', 
              }}
            >
              <img
                src={item['Image Src']}
                alt={item.Title}
                width="100"
                height="100"
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
    
              <div style={{ textAlign: 'center' }}>
                <h3>{item.Title}</h3>
                <p><strong>SKU:</strong> {item['Variant SKU']}</p>
                <p><strong>Price:</strong> ${item['Variant Price']}</p>
              </div>
    
              <div style={{ textAlign: 'center', width: '100%' }}>
                <button
                  onClick={() => removeFromCart(item._id)}
                  style={{
                    backgroundColor: 'red',
                    color: '#fff',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '5%', 
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
    
    
};

export default Cart;
