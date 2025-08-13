import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Categories from './Categories';
import Cart from './Cart';
import About from './About';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import Shipping from './Shipping';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'Anekh', email: 'anekh@example.com' }); // Example user
  const [notification, setNotification] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); // For admin to add products
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      setNotification('This product is already in your cart!');
      setTimeout(() => setNotification(''), 3000);
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const addProduct = (product) => {
    setProducts(prev => [...prev, product]);
    console.log('Product added:', product); // You can save to database here
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col relative ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="data-stream" />
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 glass neon-glow-green text-green-400 px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse-notification border border-green-400/30">
          {notification}
        </div>
      )}
      <Router>
        
        <Navbar user={user} onSignOut={handleSignOut} onSearch={handleSearch} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="pt-20 flex-1">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/products" element={<Products addToCart={addToCart} searchTerm={searchTerm} />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin user={user} addProduct={addProduct} />} />
              <Route path="/shipping" element={<Shipping cart={cart} />} />
            </Routes>
          </div>
        </main>
        <footer className={`border-t py-6 text-center text-sm mt-8 glass ${isDarkMode ? 'border-gray-700/30 text-gray-400' : 'border-gray-200/30 text-gray-500'}`}>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
            <div className="font-mono">&copy; {new Date().getFullYear()} EarthMart.exe - All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Privacy.exe</a>
              <a href="#" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Terms.sys</a>
              <a href="#" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact.dll</a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
