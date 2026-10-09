import { CornerDownLeft } from "lucide-react";

export default function Profile() {
  return (
    <div className='bg-[#F3FBF4] min-h-screen'>
      <div className="max-w-3xl m-auto lg:mt-20 md:mt-10 mt-5">
        
        <div className="m-5">
          <h1 className='text-3xl font-bold'>আমার প্রোফাইল</h1>
          <p className='text-gray-500'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 bg-base-200 p-5 shadow-2xs border border-gray-200 rounded-2xl">
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500">
                {/* image */}
              </div>

              <div className="">
                <p className='font-semibold'>Rezwan Ahmed</p>
                <p className='text-gray-600'>rezwanahmed@gmail.com</p>
              </div>
            </div>

            <button className='btn border border-red-600 text-red-600'><CornerDownLeft size={18} /> সাইন আউট</button>
          </div>

          <div className="mt-5 bg-base-200 border border-gray-200 shadow-2xs p-5 rounded-2xl">
            <p className="font-semibold mb-10">তথ্য</p> 

            <div className="m-5">
              <label className="lable">নাম</label> 
              <input type="text" name="name" className="w-full p-2 rounded-md border border-gray-400"/>
              <button className="btn w-full bg-green-700 text-white rounded-md font-semibold  mt-5 p-3">আপডেট</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
