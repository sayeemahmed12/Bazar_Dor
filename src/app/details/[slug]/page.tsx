import type{ MarketType } from '@/app/type';
import React from 'react'
import PriceSummary from './PriceSummary';
import TodayPrice from './TodayPrice';
import DetailsCard from './DetailsCard';

interface Props{
 params: Promise<{ slug: string }>;
}

const getProduct = async(slug:string) =>{
  try{
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${slug}`);
    const product = await res.json();
    return product;

  }catch(error){
    console.log(error);
  }
}

export default async function ProductDetails({ params }: Props) {
  const {slug} = await params;

  const product = await getProduct(slug);

  return (
    <div className='bg-[#F3FBF4]'>
      <div className="md:container md:m-auto md:mt-5 m-5">

        <DetailsCard product={product}/>

        <div className="mt-5 mb-10 bg-base-100 p-5 md:p-10 rounded-2xl">
          {/* দামের সারসংক্ষেপ */}
          <PriceSummary product={product}/>

          {/* বাজারভিত্তিক আজকের দাম */}
          <TodayPrice product={product}/>
        </div>

      </div>
    </div>
  )
}
    