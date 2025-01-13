import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../../../context/CardContextProvider";

const Cart = () => {
  const { data , setData} = useContext(CardContext);
  const [total, setTotal] = useState(0);

  // Calculate total price
  useEffect(() => {
    const calculatedTotal = data.reduce((acc, item) => acc + item.price, 0);
    setTotal(calculatedTotal);
  }, [data]);

  const removeItem = (index,cprice)=>{
    const updatedData =  data.filter((_,i)=> i !==index)
    setData(updatedData);

    setTotal((prev)=>prev - cprice);
    console.log("ohh flower removed")
  }

  if (data.length === 0) {
    // Show a message or alternative content if cartItems is empty
    return (
      <div className=" p-4  bg-[#F5EFE7] w-screen min-h-screen">
        <p className="mt-4 text-gray-500 text-3xl  text-center py-4">
          Oops! Your cart is empty. Add some Flowers.
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen mt-8 p-4 border border-[#F5EFE7] rounded-lg">
      <h2 className="text-xl text-[#3E5879] font-bold text-center ">Your Flower Basket</h2>

      <div className="mt-4">
        <ul>
          {data.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b ml-10 mr-10">
              <span>{item.name}</span>
              <span>Rs. {item.price}</span>

              <button onClick={()=>{
                       const cprice=  item.price ;
                       removeItem(index,cprice);
              }}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-center">
        <p className="text-2xl font-bold">Total: Rs. {total}</p>
        <p className="text-xl text-gray-600">
          Your Flower Basket is Ready in a Few Minutes! Please Wait 😀
        </p>
      </div>
    </div>
  );
};

export default Cart;
