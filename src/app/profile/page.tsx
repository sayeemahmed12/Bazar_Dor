'use client'
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import profilePic from '../../../public/Profile.png';

export default function Profile() {
  const {data:session} = useSession();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    const {data, error}= await authClient.updateUser({
      name:name as string,
    })

    if(error){
      toast.error(error?.message);
      return;
    }

    toast.success("Name has been change successfully.")
  };

  return (
    <div className='bg-[#F3FBF4] min-h-screen'>
      <div className="max-w-3xl m-auto lg:mt-20 md:mt-10 mt-5">
        
        <div className="m-5">
          <h1 className='text-3xl font-bold'>আমার প্রোফাইল</h1>
          <p className='text-gray-500'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 bg-base-200 p-5 shadow-2xs border border-gray-200 rounded-2xl">
            
            <div className="flex items-center gap-4">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <Image
                  src={profilePic}
                  alt="profile"
                  width={50}
                  height={50}
                  className='rounded-full'
                />
              </div>
              <div className="">
                <p className='font-semibold'>{session?.user.name}</p>
                <p className='text-gray-600'>{session?.user.email}</p>
              </div>
            </div>

            <button onClick={() => signOut()} className='btn border border-red-600 text-red-600'><CornerDownLeft size={18} /> সাইন আউট</button>
          </div>

          <div className="mt-5 bg-base-200 border border-gray-200 shadow-2xs p-5 rounded-2xl">
            <p className="font-semibold mb-10">তথ্য</p> 

            <form onSubmit={onSubmit}>
              <fieldset className="fieldset">

                <div className="">
                  <label className="text-lg">নাম</label>
                  <input type="text" name='name' className="w-full rounded-xl text-[16px] p-3 border-2 border-gray-200 mt-1 mb-4" placeholder="" />
                  <button type='submit' className="btn bg-[#05893E] mt-4 text-white w-full rounded-xl p-5 text-base">আপডেট</button>
                </div>

              </fieldset>
            </form>

          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}
