import { BrowserRouter, Route, Routes, Link } from 'react-router';
import Home from './assets/components/home/Home';
import Cart from './assets/components/cart/Cart';
import Shop from './assets/components/shop/Shop';
import About from './assets/components/about/About';
import Footer from './assets/components/footer/Footer';
import { useState } from 'react';
import CardContextProvider from './context/CardContextProvider';

function App() {
  const [isOpen, setIsOpen] = useState(false);  // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the visibility of the mobile menu
  };

  return (
    <CardContextProvider>
      <BrowserRouter>
        <nav className="bg-[#213555] p-4 w-full">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <h2 className="text-white text-xl font-bold">Kanu Flower Shop</h2>

            {/* Hamburger Button (For small screens) */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white bg-transparent border-[#213555]  text-3xl">
                 +
              </button>
            </div>

            {/* Desktop Menu (visible on large screens) */}
            <div className="hidden lg:flex space-x-6 text-white">
              <Link className="hover:text-gray-200 text-white" to="/">Home</Link>
              <Link className="hover:text-gray-200 text-white" to="/shop">Our Shop</Link>
              <Link className="hover:text-gray-200 text-white" to="/cart">My Cart</Link>
              <Link className="hover:text-gray-200 text-white" to="/about">About us</Link>
            </div>
          </div>

          {/* Mobile Menu (visible on small screens) */}
          <div
            className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-[#213555]  p-4 space-y-4 transition-all duration-300 ease-in-out transform`}
          >
            <Link to="/" className="block text-white hover:text-gray-200 py-2 p-10 hover:bg-[#3E5879]" onClick={toggleMenu}>Home</Link>
            <Link to="/shop" className="block text-white hover:text-gray-200 p-10 py-2 hover:bg-[#3E5879]" onClick={toggleMenu}>Our Shop</Link>
            <Link to="/cart" className="block text-white hover:text-gray-200 p-10 py-2 hover:bg-[#3E5879]" onClick={toggleMenu}>My Cart</Link>
            <Link to="/about" className="block text-white hover:text-gray-200 p-10 py-2 hover:bg-[#3E5879]" onClick={toggleMenu}>About us</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CardContextProvider>
  );
}

export default App;
