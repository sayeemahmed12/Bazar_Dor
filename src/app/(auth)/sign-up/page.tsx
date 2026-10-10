'use client'

import Image from 'next/image'
import Link from 'next/link'
import googleLogo from '../../../../public/google.png'
import githubLogo from '../../../../public/github.png'
import { signIn, signUp } from '@/lib/auth-client'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'


export default function SignUp() {
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.password1 !== data.password2) {
      toast.error("Passwords don't match.");
      return;
    }

    const { data: userData, error } = await signUp.email({
      name: data.name as string,
      email: data.email as string,
      password: data.password1 as string,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully.");
  };

  const signInWithGoogle = async() =>{
    await signIn.social({
      provider: "google",
    });

    toast.success("Sign up successfully with Google.")
  }

  const signInWithGitHub = async() =>{
    await signIn.social({
      provider: "github",
    });

    toast.success("Sign up successfully with GitHub.")
  }

  return (
    <div className="bg-[#F3FBF4] min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-[550px] bg-base-200 p-5 rounded-2xl shadow-2xs border border-gray-200 m-2 sm:m-5">

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box mt-5 md:mt-10 p-4 h-fit">
            <h1 className="text-center font-bold text-3xl">অ্যাকাউন্ট তৈরি করুন</h1>
            <p className='text-center text-lg text-gray-600 mb-4'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            <div className="">
              <label className="text-lg">নাম </label>
              <input type="text" name="name" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="যেমন: রহিম উদ্দিন" />

              <label className="text-lg">ইমেইল</label>
              <input type="email" name="email" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="you@example.com" />

              <label className="text-lg">পাসওয়ার্ড</label>
              <input type="password" name="password1" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="কমপক্ষে ৮ অক্ষর" />

              <label className="text-lg">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input type="password" name="password2" className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1" placeholder="আবার লিখুন" />

              <button type='submit' className="btn bg-[#05893E] mt-4 text-white w-full rounded-xl p-5 text-base">অ্যাকাউন্ট তৈরি করুন</button>
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

          <p className='text-center mt-5 text-base'>অ্যাকাউন্ট আছে? <Link className='text-[#05893E]' href={'/sign-in'}>সাইন ইন করুন</Link></p>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <Link className='text-gray-600' href={'/'}>← হোম পেজে ফিরে যান</Link>
      </div>
      <ToastContainer />
    </div>
  )
}
