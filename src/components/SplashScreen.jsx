import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const quote = "Promoting natural, handmade products to reduce plastic dependency, supporting millions of Indian artisans who keep our traditions alive.";

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Show quote after logo appears
    const quoteTimer = setTimeout(() => {
      setShowQuote(true);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(quoteTimer);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (showQuote) {
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= quote.length) {
          setTypedText(quote.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
          // Complete splash screen after typing is done
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 1000);
        }
      }, 30); // Typing speed

      return () => clearInterval(typingTimer);
    }
  }, [showQuote, quote, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${isComplete ? 'opacity-0' : 'opacity-100'} cyber-grid`}>
      {/* Earthy Texture Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Floating Futuristic Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="craft-element element-1">⚡</div>
          <div className="craft-element element-2">🔮</div>
          <div className="craft-element element-3">💎</div>
          <div className="craft-element element-4">🌐</div>
          <div className="craft-element element-5">🚀</div>
          <div className="craft-element element-6">⭐</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Logo and Site Name */}
        <div className={`transition-all duration-1000 transform ${showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img 
                src="/src/assets/logo.png" 
                alt="EarthMart Logo" 
                className="h-24 w-auto object-contain drop-shadow-lg neon-glow-green rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-2 drop-shadow-sm font-mono">
            EarthMart.exe
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-8 neon-glow-green"></div>
        </div>

        {/* Animated Quote */}
        <div className={`transition-all duration-800 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass rounded-2xl p-8 shadow-2xl border border-green-400/30 max-w-3xl mx-auto neon-glow-blue">
            <p className="text-lg md:text-xl text-green-400 leading-relaxed font-medium font-mono">
              "{typedText}"
              <span className="animate-pulse text-green-400 font-bold neon-glow-green">|</span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-green-400 neon-glow-green"></div>
              <div className="text-2xl neon-glow-blue">⚡</div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-green-400 neon-glow-green"></div>
            </div>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className={`mt-12 transition-all duration-500 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce neon-glow-green"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce neon-glow-blue" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce neon-glow-purple" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-green-400 text-sm mt-2 font-medium font-mono">// Loading sustainable.marketplace.exe...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;