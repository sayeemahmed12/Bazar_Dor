import Image from 'next/image'
import bannerImage from '../../../../public/bazar-hero.png'

export default function Hero() {

  const dateTime = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });


  return (
    <div className="bg-base-100 shadow-sm lg:container lg:m-auto lg:mt-10 rounded-3xl">
      <div className="flex p-10 justify-between items-centers flex-col lg:flex-row-reverse">

        <div className="w-full flex justify-center items-end lg:max-w-78">
          <Image 
            src={bannerImage}
            alt={"বাজার দর"}
            width={400}
            height={400}
            className='max-w-78'
          />
        </div>

        <div className='flex justify-center'>
          <div className="text-center lg:text-start max-w-150 lg:w-full">
            <p className='bg-[#05893e2b] p-2 rounded-xl text-[#05893E] lg:w-fit'>{dateTime}</p>
            <h1 className="text-2xl lg:text-5xl font-bold mt-5">আজকের বাজারের দাম এক নজরে</h1>
            <p className="py-6 lg:max-w-130 text-base lg:text-[19px] text-gray-600">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, 
              গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <button className="btn bg-[#05893E] p-6 rounded-xl text-white text-base lg:text-xl">সব পণ্য দেখুন</button>
          </div>
        </div>

      </div>
    </div>
  )
}
