import React, { useState } from 'react';

export default function AccountDetails({ user, onSignOut, isDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative z-50">
      <button
        className={`px-4 py-2 rounded-full font-semibold shadow transition-colors ${isDarkMode ? 'bg-green-800 text-green-200 hover:bg-green-700' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
        onClick={() => setShowMenu((v) => !v)}
      >
        {user.name}
      </button>
      {showMenu && (
        <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-2xl border z-[9999] ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
          <div className={`px-4 py-2 border-b ${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-gray-200 text-gray-700'}`}>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">{user.email}</div>
          </div>
          <button
            className={`w-full text-left px-4 py-2 text-red-600 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-red-50'}`}
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
