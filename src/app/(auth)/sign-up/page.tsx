import Image from 'next/image'
import Link from 'next/link'
import googleLogo from '../../../../public/google.png'
import githubLogo from '../../../../public/github.png'


export default function SignUp() {
  return (
    <div className="bg-[#F3FBF4] min-h-screen">
      <div className="flex justify-center container m-auto">

        <fieldset className="fieldset rounded-box mt-5 md:mt-10 p-4 h-fit max-w-[550px]">
          <h1 className="text-center font-bold text-3xl">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className='text-center text-lg text-gray-600 mb-4'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

          <div className="bg-base-100 p-8 rounded-2xl">

            <label className="text-lg">নাম </label>
            <input type="text" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="যেমন: রহিম উদ্দিন" />

            <label className="text-lg">ইমেইল</label>
            <input type="email" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="you@example.com" />

            <label className="text-lg">পাসওয়ার্ড</label>
            <input type="password" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="কমপক্ষে ৮ অক্ষর" />

            <label className="text-lg">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input type="password" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1" placeholder="আবার লিখুন" />

            <button className="btn bg-[#05893E] mt-4 text-white w-full rounded-xl p-5 text-base">অ্যাকাউন্ট তৈরি করুন</button>

            
            <div className="mt-5">
              <div className="flex items-center w-full">
                <div className="grow h-0.5 bg-gray-300"></div>
          
                <span className="shrink-0 mx-4 text-gray-700 font-medium text-base">
                  অথবা
                </span>
                
                <div className="grow h-0.5 bg-gray-300"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-3">
                <button className='btn bg-transparent p-5'>
                  <Image 
                    src={googleLogo}
                    alt='Google'
                    width={50}
                    height={50}
                    className='w-6 rounded-full'
                  />
                  Google দিয়ে চালিয়ে যান
                </button>

                <button className='btn bg-transparent p-5'>
                  <Image 
                    src={githubLogo}
                    alt='Google'
                    width={50}
                    height={50}
                    className='w-6 rounded-full'
                  />
                  GitHub দিয়ে চালিয়ে যান
                </button>
              </div>

              <p className='text-center mt-5 text-base'>অ্যাকাউন্ট আছে? <Link className='text-[#05893E]' href={'/sign-in'}>সাইন ইন করুন</Link></p>

            </div>
          </div>
        </fieldset>

      </div>

      <div className="flex justify-center ">
        <Link className='text-gray-600' href={'/'}>← হোম পেজে ফিরে যান</Link>
      </div>
    </div>
  )
}
