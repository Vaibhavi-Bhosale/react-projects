import React from "react";
import { useNavigate } from "react-router";
import './home.css'
 

const Home= ()=>{

    const navigate = useNavigate();
    const handleShopClick = () => {
        navigate("/shop"); // Navigate to the Shop page
      };

    return(
        <> 
           <div id="home" className="w-screen">
                 
                 <h2 className=" sm:text-7xl text-4xl text-white">Welcome to the Kanu Flower Shops</h2>
                  
                <button className="bg-[#213555] hover:bg-[#3E5879] text-white"
                 onClick={handleShopClick}>Buy Now</button>

                 
           </div>

        </>
    )
}

export default Home;