import React from "react";
import Card from "../Card";

const Shop= ()=>{

    const flowers = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1518831696273-f1886ea5f920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Rose",
          price: 10,
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1486608766848-9b9fe0c37b9d?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Tulip",
          price: 15,
        },
        {
          id: 3,
          image: "https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Lily",
          price: 12,
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Sunflower",
          price: 8,
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Daisy",
            price: 6,
          },
          {
            id: 6,
            image: "https://images.unsplash.com/photo-1562133558-4a3906179c67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Orchid",
            price: 20,
          },
          {
            id: 7,
            image: "https://images.unsplash.com/photo-1575178114667-c8a832c61f45?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Peony",
            price: 18,
          },
          {
            id: 8,
            image: "https://images.unsplash.com/photo-1536126080396-d775c5296e7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Chrysanthemum",
            price: 14,
          },
          {
            id: 9,
            image: "https://plus.unsplash.com/premium_photo-1678836292777-4209ce30c4c5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Carnation",
            price: 9,
          },
          {
            id: 10,
            image: "https://media.istockphoto.com/id/842983638/photo/lavender-plant-flowers-in-pot.jpg?s=1024x1024&w=is&k=20&c=3NMw4jU9Lajszt9oTM4FslKx9h2ERFcigq1FMIWCWu8=",
            name: "Lavender",
            price: 13,
          },
      ];
  
       

      return (
        <div className="w-full min-h-screen   bg-[#F5EFE7] p-10">
          <h1 className="text-3xl font-bold text-center mb-6">Our Flower Collection</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {flowers.map((flower) => (
              <Card
                key={flower.id}
                image={flower.image}
                name={flower.name}
                price={flower.price}
              />
            ))}
          </div>
        </div>
      );
      
}

export default Shop;