import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export default function Login({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (loginData.email && loginData.password) {
        const user = {
          name: loginData.email.split('@')[0],
          email: loginData.email
        };
        
        if (onLogin) {
          onLogin(user);
        }
        
        navigate('/');
      } else {
        alert('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      alert('Account created successfully! Please sign in.');
      setIsSignUp(false);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-page cyber-grid">
      {/* Futuristic Background Elements */}
      <div className="floating-particles">
        {[...Array(30)].map((_, i) => (
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
      
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container glass">
          <form onSubmit={handleSignupSubmit}>
            <h1 className="holographic-text font-mono">Create.Account.exe</h1>
            <div className="social-container flex gap-4">
              <a href="#" className="social text-blue-600"><FaFacebookF size={24} /></a>
              <a href="#" className="social text-red-500"><FaGooglePlusG size={24} /></a>
              <a href="#" className="social text-pink-500"><FaInstagram size={24} /></a>
            </div>
            <span className="font-mono text-gray-400">// or use email.registration.dll</span>
            <input
              type="text"
              name="name"
              placeholder="user.name"
              value={signupData.name}
              onChange={handleSignupChange}
              className="glass font-mono"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="user.email"
              value={signupData.email}
              onChange={handleSignupChange}
              className="glass font-mono"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="user.password"
              value={signupData.password}
              onChange={handleSignupChange}
              className="glass font-mono"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm.password"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              className="glass font-mono"
              required
            />
            <button type="submit" disabled={isLoading} className="cyber-button font-mono">
              {isLoading ? 'creating.user...' : 'signup.exe'}
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container glass">
          <form onSubmit={handleLoginSubmit}>
            <h1 className="holographic-text font-mono">Login.System.exe</h1>
            <div className="social-container flex gap-4">
              <a href="#" className="social text-blue-600"><FaFacebookF size={24} /></a>
              <a href="#" className="social text-red-500"><FaGooglePlusG size={24} /></a>
              <a href="#" className="social text-pink-500"><FaInstagram size={24} /></a>
            </div>
            <span className="font-mono text-gray-400">// or use account.credentials</span>
            <input
              type="email"
              name="email"
              placeholder="user.email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="glass font-mono"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="user.password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="glass font-mono"
              required
            />
            <div className="remember-forgot">
              <label className="font-mono text-gray-400">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />
                remember.user
              </label>
              <a href="#" className="font-mono text-green-400 hover:neon-glow-green">forgot.password?</a>
            </div>
            <button type="submit" disabled={isLoading} className="cyber-button font-mono">
              {isLoading ? 'authenticating...' : 'login.exe'}
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container glass">
          <div className="overlay cyber-grid">
            <div className="overlay-panel overlay-left">
              <h1 className="holographic-text font-mono">Welcome.Back.exe</h1>
              <p className="font-mono">// Login with credentials.dll</p>
              <button className="ghost cyber-button font-mono" onClick={() => setIsSignUp(false)}>
                login.exe
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="holographic-text font-mono">Hello.User.exe</h1>
              <p className="font-mono">// Initialize new.user.account</p>
              <button className="ghost cyber-button font-mono" onClick={() => setIsSignUp(true)}>
                signup.exe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}