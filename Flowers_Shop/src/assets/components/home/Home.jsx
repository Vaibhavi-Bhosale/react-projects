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
           <div id="home">
                 
                 <h2>Welcome to the Kanu Flower Shops</h2>
                  
                <button onClick={handleShopClick}>Buy Now</button>

                 
           </div>

        </>
    )
}

export default Home;