import type{ ProductType } from '@/app/type'
import Link from 'next/link'

interface ProductProps{
  product:ProductType
}

export default function ProductCard({product}:ProductProps) {
  return (
    <Link href={`/details/${product.id}`} className='w-full sm:max-w-[500px] border border-gray-200 bg-base-200 shadow-2xs p-5 rounded-2xl'>
      <div className="flex items-center gap-4">
        <div className="bg-base-300 p-4 w-fit rounded-xl">
            <p className='text-3xl'>{product?.image}</p>
        </div>
        <div className="">
            <p className='font-bold text-xl'>{product?.nameBn}</p>
            <p>
                {
                  product?.unit === "kg" ? "প্রতি কেজি"
                  : product?.unit === "litre" ? "প্রতি লিটার"
                  : product?.unit === "dozen" ? "প্রতি ডজন"
                  : "প্রতি পিস"
                }
            </p>
        </div>
      </div>

      <div className="text-lg flex justify-between items-end mt-5">
        <div className="">
          <p className='text-lg'>আজকের দাম</p>
          <p className=''><span className='font-bold text-xl'>{product?.today}</span> টাকা</p>
        </div>

        <div className='bg-base-300 p-2 rounded-2xl'>
          {product.change.dir  === 'up' ? 
              <p className='text-red-500'>▲ {product.change.pct}%</p>
            :
              <p className='text-green-500'>▼ {product.change.pct}%</p>
          }
        </div>
      </div>

    </Link>
  )
}
