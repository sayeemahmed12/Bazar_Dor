import{toBanglaNumber, type ProductType } from '@/app/type'
import React from 'react'

interface Props{
	product:ProductType
}

export default function PriceSummary({product}:Props) {
	const mn = Math.min(product.today, product.yesterday, product.lastWeek, product.lastMonth)
	const mx = Math.max(product.today, product.yesterday, product.lastWeek, product.lastMonth)
  const avg = (mn+mx)/2;
  return (
		<div className="mt-2 md:mt-10">  
			<h2 className='font-bold text-2xl'>দামের সারসংক্ষেপ</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
				<div className="border border-gray-200 shadow-2xs p-5 rounded-2xl">
					<p>সর্বনিম্ন দাম</p>
					<h1 className='text-green-500 text-xl'><span className='font-bold text-green-600 text-3xl'>{toBanglaNumber(mn)}</span> টাকা</h1>
					<p>সবচেয়ে কম দামের বাজার</p>
				</div>

				<div className="border border-gray-200 shadow-2xs p-5 rounded-2xl">
					<p>সর্বাধিক দাম</p>
					<h1 className='text-red-500 text-xl'><span className='font-bold text-red-600 text-3xl'>{toBanglaNumber(mx)}</span> টাকা</h1>
					<p>সবচেয়ে বেশি দামের বাজার</p>
				</div>

				<div className="border border-gray-200 shadow-2xs p-5 rounded-2xl">
					<p>গড় দাম</p>
					<h1 className='text-green-500 text-xl'><span className='font-bold text-green-600 text-3xl'>{toBanglaNumber(avg)}</span> টাকা</h1>
					<p>প্রতি কেজি-এর হিসাবে</p>
				</div>
			</div>
		</div>
  )
}
