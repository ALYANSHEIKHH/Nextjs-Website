import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img:"/n3.jpg",
        title: "New Arrivals",
        desc:"Pure Garment Dyed Cotton",
        rating: 4,
        price: "45.00"
        
    },
    {
        img:"/item-13.png",
        title: "Sports",
        desc:"Tracking & Runnig Shoes",
        rating: 4,
        price: "65.00"
    },
    {
        img:"/f5.jpg",
        title: "Shirt",
        desc:"Printed Shirt",
        rating: 6,
        price: "35.00"
    },
    {
        img:"/f6.jpg",
        title: "Full Sleeve",
        desc:"For men and women",
        rating: 7,
        price: "55.00"
    },
    {
        img:"/f2.jpg",
        title: "T-Shirt",
        desc:"Cotton Shirt",
        rating: 5,
        price: "45.00"
        
    },
    {
        img:"/n7.jpg",
        title: "Nike",
        desc:" Garment Dyed ",
        rating: 4,
        price: "45.00"
        
    },
    {
        img:"/item-15.png",
        title: "Summer Arrivals",
        desc:"Pure Garment",
        rating: 5,
        price: "45.00"
        
    },
    {
        img:"/n8.jpg",
        title: "Adidas",
        desc:"Cartoon Astronaut T-Shirt",
        rating: 6,
        price: "45.00"
        
    }
]

const NewProducts = () => {


  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

                {productsData.map((item, index) =>(
                    <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    
                    />
                ))}

                </div>
        </div>
      
    </div>
  )
}

export default NewProducts
