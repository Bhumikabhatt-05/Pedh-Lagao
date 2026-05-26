import React,{useContext, useState,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductCard from './ProductCard';
import { products } from '../assets/assets';

const FeaturedData = () => {
     const {product} =useContext(ShopContext);
     const[featured,setfeatured]=useState([]);
     useEffect(()=>{
        setfeatured(products.slice(0,4));
     },[])
     
  return (

    <div className='h-[80vh] flex flex-col tracking-wider justify-center items-center '>
        <h1 className='text-4xl font-bold mb-10'>Featured Products</h1>
        <div className='flex gap-15 flex-wrap justify-center'>
            {
                featured.map((item,index)=>(
            <ProductCard key={index} product={item} />
         ))
            }

        </div>
    </div>

  )
}

export default FeaturedData
