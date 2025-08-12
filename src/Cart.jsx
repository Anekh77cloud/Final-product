import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart = [], removeFromCart }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 glass rounded-xl border border-green-400/20 neon-glow-green">
      <h2 className="text-3xl font-bold mb-4 holographic-text font-mono">Cart.System.exe</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400 font-mono">// Cart.empty.status = true</p>
      ) : (
        <>
          <div className="space-y-4 w-full">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center glass rounded-lg p-4 w-full border border-blue-400/20 hover:neon-glow-blue transition-all duration-300">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4 border border-green-400/30" />
                <div className="flex-1">
                  <strong className="text-lg text-green-400 font-mono">{item.name}</strong>
                  <div className="text-green-400 font-bold w-full neon-glow-green">{item.price}</div>
                  <div className="text-gray-400 text-sm w-full">{item.description}</div>
                </div>
                {removeFromCart && (
                  <button className="glass text-red-400 px-3 py-1 rounded hover:neon-glow-purple ml-4 font-mono transition-all duration-300 border border-red-400/30" onClick={() => removeFromCart(item.id)}>
                    remove.exe
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="mt-8 glass rounded-lg p-6 w-full border border-purple-400/20 neon-glow-purple">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold holographic-text font-mono">Total.sum: ₹{calculateTotal()}</span>
            </div>
            <button 
              className="w-full cyber-button px-6 py-3 rounded-lg font-semibold text-lg font-mono neon-glow-green transition-all duration-300"
              onClick={() => navigate('/shipping')}
            >
              checkout.exe
            </button>
          </div>
        </>
      )}
    </div>
  );
}