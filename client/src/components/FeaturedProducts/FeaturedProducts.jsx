import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card'
const FeaturedProducts = (props) => {

   const data = [
      {
         id: 1,
         img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
         img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
         title: "Long Sleeve Graphic T-Shirt",
         isNew: true,
         oldPrice: 19,
         price: 12
      },
      {
         id: 2,
         img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
         img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
         title: "Coat",
         isNew: true,
         oldPrice: 22,
         price: 17
      },
      {
         id: 3,
         img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
         img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
         title: "Pants",
         isNew: false,
         oldPrice: 12,
         price: 9
      },
      {
         id: 4,
         img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
         img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
         title: "Skirts",
         isNew: false,
         oldPrice: 28,
         price: 19
      },
   ]
   return (
      <div className="featuredProducts">
         <div className="top">
            <h1>{props.type} Products</h1>
            <p>
               Check out the latest in fashion at Wolfwear Sheep Clothing. Stay hip and trending with our {props.type} line of products.
               Check out the latest in fashion at Wolfwear Sheep Clothing. Stay hip and trending with our {props.type} line of products.
            </p>
         </div>
         <div className="bottom">
            {data.map(item => (
               <Card item={item} key={item.id} />
            ))}
         </div>
      </div>
   )
}

export default FeaturedProducts
