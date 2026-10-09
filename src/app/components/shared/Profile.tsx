import { CornerDownLeft } from 'lucide-react'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 bg-red-500 rounded-full">

        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-65 p-2 shadow">
        <li>
          <p className='font-semibold text-lg'>Rezwan Ahmed</p>
          <p className='text-gray-500 text-base -mt-2'>rezwanahmed@gmail.com</p>
        </li>

        <li className='m-1'>
          <Link className='text-lg' href={'/profile'}>👤 আমার প্রোফাইল</Link>
        </li>
        <li className='m-1'>
          <div className="flex">
            <CornerDownLeft className='text-red-600' size={18}/>
            <p className='text-red-600 text-lg'>সাইন আউট</p>
          </div>
        </li>
        
      </ul>
    </div>
  )
}
