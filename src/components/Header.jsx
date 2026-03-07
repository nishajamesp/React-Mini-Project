import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-orange-600 text-white shadow-md">
         <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <span>RecipeHub</span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-orange-200 transition">Home</Link>
            <Link to="/favorites" className="flex items-center gap-1 hover:text-orange-200 transition">
                Favorites
            </Link>
        </nav>
         </div>
    </header>
  )
}

export default Header;