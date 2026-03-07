import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeDetails from './pages/RecipeDetails';
import Favourites from './pages/Favourites';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-amber-50'>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;