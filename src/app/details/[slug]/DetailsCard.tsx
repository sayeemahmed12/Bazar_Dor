import{ toBanglaNumber, type ProductType } from '@/app/type';
import React from 'react'

interface Props {
  product: ProductType;
}

export default function DetailsCard({ product }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-between p-5 bg-base-100 shadow-2xs border border-gray-100 rounded-2xl">

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="bg-base-300 p-4 w-fit rounded-xl">
            <p className='text-3xl'>{product?.image}</p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className='text-2xl font-bold'>{product?.nameBn}</p>
          <p className='text-gray-500 mb-2'>
              {
                product?.unit === "kg" ? "প্রতি কেজি "
                : product?.unit === "litre" ? "প্রতি লিটার "
                : product?.unit === "dozen" ? "প্রতি ডজন "
                : "প্রতি পিস "
              }
              {product.nameBn}
          </p>

          {product.today-product.yesterday > 0?
            <p className='text-lg text-center sm:text-start'>গতকালের তুলনায় আজ দাম <span className='font-bold'>বেড়েছে</span> · {toBanglaNumber(product.today-product.yesterday)} টাকা</p>
            :
            <p className='text-lg text-center sm:text-start'>গতকালের তুলনায় আজ দাম <span className='font-bold'>কমেছে</span> · {toBanglaNumber(product.yesterday-product.today)} টাকা</p>
          }
        </div>
      </div>

      <div className="text-center bg-[#F3FBF4] p-5 rounded-2xl">
        <p className='text-gray-500 text-lg'>আজকের দাম</p>
        <h1 className='text-3xl font-bold'>{toBanglaNumber(product.today)}</h1>
        <p className='text-gray-500 text-lg'>
          টাকা /
          {
            product?.unit === "kg" ? "প্রতি কেজি "
            : product?.unit === "litre" ? "প্রতি লিটার "
            : product?.unit === "dozen" ? "প্রতি ডজন "
            : "প্রতি পিস "
          }
        </p>

        <div className=''>
          {product.change.dir  === 'up' ? 
              <p className='text-red-600 font-semibold'>▲ {toBanglaNumber(product.change.pct)}%</p>
            :
              <p className='text-green-500'>▼ {toBanglaNumber(product.change.pct)}%</p>
          }
        </div>

      </div>

    </div>
  )
}
