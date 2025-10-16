import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            Smit Shah
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium transition-colors ${
                isActive('/projects') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/projects') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
