'use client'

import { authClient, signOut } from '@/lib/auth-client'
import { CornerDownLeft } from 'lucide-react'
import Link from 'next/link'
import profilePic from '../../../../public/Profile.png'
import Image from 'next/image'

export default function ProfileOrAuth() {
  const {data:session} = authClient.useSession();

  return (
    <div className="">

      {session === null ?
        <div className="flex gap-2 flex-col sm:flex-row">
          <Link className='btn text-xs sm:text-base' href={'/sign-in'}>সাইন ইন</Link>
          <Link className='btn text-xs sm:text-base bg-[#05893E] px-3 py-2 text-white rounded-md' href={'/sign-up'}>সাইন আপ</Link>  
        </div>
      :         
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <Image
            src={profilePic}
            alt="profile"
            width={50}
            height={50}
            className='rounded-full'
          />
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-2 shadow">
          <li>
            <p className='font-semibold text-lg'>{session.user.name}</p>
            <p className='text-gray-500 text-base -mt-2'>{session.user.email}</p>
          </li>

          <li className='m-1'>
            <Link className='text-lg' href={'/profile'}>👤 আমার প্রোফাইল</Link>
          </li>
          <li className='m-1'>
            <div className="flex">
              <CornerDownLeft className='text-red-600' size={18}/>
              <p onClick={async() => {const r = await signOut(); console.log(r);}} className='text-red-600 text-lg'>সাইন আউট</p>
            </div>
          </li>
          
        </ul>
      </div>
    }

    </div>
  )
}
