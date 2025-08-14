import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-8 flex justify-center relative">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-xl border border-green-400/20 neon-glow-green p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-700 font-mono holographic-text">About Us</h2>
      <p className="text-gray-600 mb-10">
        We promote eco-friendly handicrafts made from natural fibers, supporting artisans and sustainability.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-green-700 font-mono holographic-text">For Enquiry</h2>
      
      <div className="flex flex-col space-y-4 text-gray-700 holographic-text">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-500" size={20} />
          <span>+91 1234567810</span>
        </div>
        <div className="flex items-center space-x-3 holographic-text">
          <FaEnvelope className="text-green-500 holographic-text" size={20} />
          <span>lokaheartmart@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3 holographic-text ">
          <FaMapMarkerAlt className="text-green-500 holographic-text" size={20} />
          <span>Chemperi, Kannur, India</span>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
