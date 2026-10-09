'use client'
import Image from 'next/image'
import Link from 'next/link'
import googleLogo from '../../../../public/google.png'
import githubLogo from '../../../../public/github.png'
import { toast, ToastContainer } from 'react-toastify';
import { signIn } from '@/lib/auth-client';

export default function SignIn() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const { data: userData, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
      callbackURL:'/'
    });

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  const signInWithGoogle = async() =>{
    await signIn.social({
      provider: "google",
    });
  }

  const signInWithGitHub = async() =>{
    await signIn.social({
      provider: "github",
    });
  }

  return (
    <div className="bg-[#F3FBF4] min-h-screen flex flex-col gap-5 md:gap-10 justify-center items-center p-2 md:p-5">
      <div className="bg-base-100 p-8 rounded-2xl m-2 sm:m-5">

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box mt-5 md:mt-10 p-4 h-fit max-w-[550px]">
            <h1 className="text-center font-bold text-3xl">সাইন ইন</h1>
            <p className='text-center text-lg text-gray-600 mb-4'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

            <div className="">
              <label className="text-lg">ইমেইল</label>
              <input type="email" name="email" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="you@example.com" />

              <label className="text-lg">পাসওয়ার্ড</label>
              <input type="password" name="password" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="কমপক্ষে ৮ অক্ষর" />

              <button type='submit' className="btn bg-[#05893E] mt-4 text-white w-full rounded-xl p-5 text-base">সাইন ইন</button>
            </div>
          </fieldset>
        </form>

        <div className="mt-5">
          <div className="flex items-center w-full">
            <div className="grow h-0.5 bg-gray-300"></div>
      
            <span className="shrink-0 mx-4 text-gray-700 font-medium text-base">
              অথবা
            </span>
            
            <div className="grow h-0.5 bg-gray-300"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <button onClick={() => signInWithGoogle()} className='btn bg-transparent p-5'>
              <Image 
                src={googleLogo}
                alt='Google'
                width={50}
                height={50}
                className='w-6 rounded-full'
              />
              Google দিয়ে চালিয়ে যান
            </button>

            <button onClick={() => signInWithGitHub()} className='btn bg-transparent p-5'>
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

          <p className='text-center mt-5 text-base'>অ্যাকাউন্ট নেই? <Link className='text-[#05893E]' href={'/sign-up'}>সাইন আপ করুন</Link></p>

        </div>
      </div>

      <div className="flex justify-center">
        <Link className='text-gray-600' href={'/'}>← হোম পেজে ফিরে যান</Link>
      </div>
      <ToastContainer />
    </div>
  )
}
