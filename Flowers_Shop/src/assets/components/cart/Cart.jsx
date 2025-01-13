import React, { useContext, useState } from "react";
import { CardContext } from "../../../context/CardContextProvider";

const Cart = () => {

    const {data} = useContext(CardContext);
    const [total, setTotal] = useState(0)

    if (data.length === 0) {
        // Show a message or alternative content if cartItems is empty
        return (
          <div className="mt-8 p-4 border border-gray-300 rounded-lg height-full">
             
            <p className="mt-4 text-gray-500 text-3xl">Oops ! Your cart is empty. Add some Flowers </p>
          </div>
        );
      }

        return (
            <div className="mt-8 p-4 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-bold">Your Flower Basket</h2>
    
                <div>
                    <ul className="mt-4">
    
                        {
                         
          
                         data.map((item , index)=>(
                            <li key={index} className="flex justify-between py-2 border-b">  
                                 <span> ${item.name} </span>
                                 <span> ${item.price} </span>

                            </li>

                             
                         ))
                        }
    
                             
                     
    
                    </ul>
                </div>

                <p className="text-3xl center">Your Flower Basket Ready in Few Minuts Pleaser Wait 😀</p>
    
            </div>
        )
     

}

export default Cart;

