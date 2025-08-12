import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-8 px-4 max-w-screen-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700">About Us</h2>
      <p className="text-gray-600 mb-10">
        We promote eco-friendly handicrafts made from natural fibers, supporting artisans and sustainability.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-green-700">For Enquiry</h2>
      
      <div className="flex flex-col space-y-4 text-gray-700">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-700" size={20} />
          <span>+91 1234567810</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-green-700" size={20} />
          <span>lokaheartmart@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-green-700" size={20} />
          <span>Chemperi, Kannur, India</span>
        </div>
      </div>
    </div>
  );
}
