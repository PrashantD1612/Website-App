import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Link from "next/link";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Hook to Check login status on initial load and fetch products after successful login
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const storedUserId = localStorage.getItem('userId');
      console.log("storedUserId"+storedUserId)
      setUserId(storedUserId);
      setIsLoggedIn(false);
    }
    setLoading(false);
  }, []);


  // Hook to Fetch products after login
  useEffect(() => {
    if (isLoggedIn && userId) {
      const fetchProducts = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/login'); 
            return;
          }

          const response = await axios.get('http://localhost:5000/api/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
          if (error.response && error.response.status === 401) {
            router.push('/login'); 
          }
        }
      };

      fetchProducts();
    }
  }, [isLoggedIn, userId, router]);

 // Function to Search by query
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/search?query=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  //Function to add product to Cart
  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem('token'); 
      if (!token) {
        console.error('No token found, please log in first');
        return; 
      }
      const response = await axios.post(
        'http://localhost:5000/api/cart/add-to-cart', 
        {
          userId,
          productId: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      setCart(response.data.cart);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  
  // Function to login user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/apis/login', {
        email,
        password,
      });
  
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user._id);
      setIsLoggedIn(true);
      setUserId(user._id);
      router.push('/');
    } catch (error) {
      console.log("error login", error.response ? JSON.stringify(error.response.data.message) : error.message);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred. Please try again later."); 
      }
      router.push('/register');
      console.error('Error logging in:', error);
    }
  };
  
  //Function to Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUserId(null);
    router.push('/');
  };

  // this is for Render a loading state while checking login and fetching data
  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="home-page">
      {!isLoggedIn ? (
        <div>
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link href="/register">
                Register here
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Header userId={userId} cart={cart} onLogout={handleLogout} />
          <h1>Product List</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by SKU or Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <ProductList
            products={products}
            cart={cart}
            addToCart={addToCart}
          />
        </div>
      )}
    </div>
  );
};


export default HomePage;
