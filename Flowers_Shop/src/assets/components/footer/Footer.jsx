import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-white py-6 w-screen">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Kanu Flower Shop</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Kanu Flower Shop. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="hover:text-gray-400"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
