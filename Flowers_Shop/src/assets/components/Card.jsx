import React, { useContext } from "react";
import { CardContext } from "../../context/CardContextProvider";
 


const Card = ({image,name,price})=>{

    const {data , setData}  = useContext(CardContext);
   
    const addToCart = ()=>{
        setData((prev)=>[...prev,{name,price}])
        

        console.log("added")

         

    }
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4">
          <img src={image} alt={name} className="h-48 w-full object-cover rounded-md" />
          <h2 className="text-lg font-bold mt-2">{name}</h2>
          <p className="text-gray-600">Price: ${price}</p>
          <button  className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:bg-green-600"
          onClick={()=>{
              addToCart()
          }}>
            Add to Cart
          </button>
        </div>
      );
}

export default Card;