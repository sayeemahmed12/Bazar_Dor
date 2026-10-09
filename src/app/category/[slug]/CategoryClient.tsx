'use client'

import ProductCard from "@/app/components/homepage/ProductCard"
import{ toBanglaNumber, type ProductType } from "@/app/type"
import { useState } from "react"


interface Props{
  products:ProductType[]
}

export default function CategoryClient({products}:Props) {
  const [Sort, setSort] = useState("default");

  return (
    <div className="bg-[#F3FBF4] min-h-screen">
      <div className="md:container md:m-auto md:my-10 m-5">
        
        <div className="flex items-center gap-4 p-5 bg-base-200 shadow-sm border border-gray-100 rounded-2xl">
          <div className="bg-base-300 p-4 w-fit rounded-xl">
              <p className='text-3xl'>{products[0].categoryIcon}</p>
          </div>

          <div className="">
            <p className='text-2xl font-bold'>{products[0].categoryNameBn}</p>
            <p className='text-gray-500'>{toBanglaNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <p className='text-gray-500'>মোট {toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>
          
          <div className="">
            <span className='text-gray-500'>সাজান</span> 
            <select onChange={(e) => setSort(e.target.value)} name="" id="" className='border-1 border-gray-400 p-1 mx-2 rounded-md'>
              <option value="default">ডিফল্ট</option>
              <option value="increasing">কম থেকে বেশি</option>
              <option value="decreasing">বেশি থেকে কম</option>
            </select>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {(Sort === "default" ? 
              products
            : 
                [...products].sort((a, b) => Sort === "increasing" ? a.today - b.today
              : 
                b.today - a.today
              )
          ).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  )
}
