import React from "react";
import { BrowserRouter,Link } from "react-router";

 

const About = () => {
  return (
    <div className="about-us bg-[#f9f9f9] p-6 text-center">
      <h1 className="text-3xl font-bold text-[#86A788] mb-4">About Us</h1>
      <p className="text-gray-600 text-lg mb-4">
        Welcome to <span className="text-[#86A788] font-semibold">Kanu Flower Shop</span>, where nature meets beauty! We are passionate about bringing fresh and vibrant flowers to your life. Whether it’s a special occasion or just a way to brighten your day, we are here to provide you with the best floral arrangements.
      </p>
      <p className="text-gray-600 text-lg mb-4">
        Our journey began with a simple mission: to spread happiness and joy through flowers. From handpicked roses to exotic lilies, we ensure every bloom is of the highest quality.
      </p>
      <p className="text-gray-600 text-lg mb-4">
        Thank you for choosing us as your go-to flower shop. We look forward to creating magical moments with you!
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1723802452384-9ad193cd2447?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flower Shop"
        className="rounded-lg shadow-lg mx-auto max-w-lg mt-4"
      />


      <div>
           
              <Link to="/">Home pe Jana he </Link>
            
           
      </div>
    </div>
  );
};

 

export default About;