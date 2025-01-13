import React from "react";
import { BrowserRouter,Link } from "react-router";

 

const About = () => {
  return (
    <div className="about-us bg-[#f9f9f9] p-6 text-center w-screen">
      <h1 className="text-3xl font-bold text-[#3E5879] mb-4">About Us</h1>
      <p className="text-gray-600 text-lg mb-4">
        Welcome to <span className="text-[#3E5879] font-semibold">Kanu Flower Shop</span>,  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident inventore eveniet quaerat accusamus corporis atque, voluptatibus dicta labore quis sit enim. Praesentium, aperiam.
      </p>
      <p className="text-gray-600 text-lg mb-4">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, alias cupiditate ad quisquam tempore magnam. Amet, minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in!

      </p>
      <p className="text-gray-600 text-lg mb-4">
        Thank you for choosing us as your go-to flower shop. We look forward to creating magical moments with you!
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1723802452384-9ad193cd2447?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flower Shop"
        className="rounded-lg shadow-lg mx-auto max-w-lg mt-4"
      />

    </div>
  );
};

 

export default About;