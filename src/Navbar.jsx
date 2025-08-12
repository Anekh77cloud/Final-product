import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountDetails from './AccountDetails';

export default function Navbar({ user, onSignOut, onSearch, isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
      navigate('/products');
    }
  };

  return (
    <header className={`sticky top-0 w-full z-50 shadow-md px-6 py-3 flex items-center flex-wrap gap-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
      <div className="flex items-center justify-between w-full">
        {/* Logo/Site Name (left) */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Earth Mart Logo" className="h-12 w-auto object-contain" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>EarthMart</span>
        </div>
        

        {/* Navigation Links (center) */}
        <nav className="flex items-center gap-6 text-base font-medium flex-shrink-0">
          <Link to="/" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</Link>
          <Link to="/categories" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Categories</Link>
          <Link to="/products" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Products</Link>
          <Link to="/cart" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cart</Link>
          <Link to="/about" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</Link>
          {user && user.email === 'admin@earthmart.com' && (
            <Link to="/admin" className={`hover:text-green-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Admin</Link>
          )}
        </nav>

        {/* Search Bar (right) */}
        <form onSubmit={handleSearch} className="flex items-center flex-shrink-0">
          <input 
            type="text" 
            name="search"
            placeholder="Search products..." 
            className={`w-32 sm:w-40 md:w-56 lg:w-72 max-w-md rounded-l-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-700'}`}
          />
          <button type="submit" className="px-4 py-2 rounded-r-full bg-green-600 text-white font-semibold hover:bg-green-700 transition border border-green-600">
            Search
          </button>
        </form>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        {/* Account Details (top right) */}
        <div className="ml-4">
          <AccountDetails user={user} onSignOut={() => { onSignOut(); navigate('/login'); }} isDarkMode={isDarkMode} />
        </div>
      </div>
    </header>
  );
}
