import { useState } from 'react';

export default function Navbar({ isAuthenticated, login, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 px-4 py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          DSA Dojo
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center text-white">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-blue-400 transition">
              {link.label}
            </a>
          ))}
          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 px-4 py-2 rounded transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-2">
          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm rounded transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 px-4 py-2 rounded transition"
            >
              Login
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-start px-8 space-y-6 mt-10 text-white">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className="text-xl hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm rounded transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 px-4 py-2 rounded transition"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Background overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </nav>
  );
}