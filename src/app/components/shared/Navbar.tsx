import Image from 'next/image'
import navLogo from '../../../../public/logo-icon.png'
import Link from 'next/link'
import type { CategoryType } from '@/app/type'
import ProfileOrAuth from './ProfileOrAuth'
import Marquee from './Marquee'

const getCategories = async() => {
  try{
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();
    return data;

  }catch(error){
    console.log(error);
  }
}

export default async function Navbar() {

  const categories = await getCategories();

  const dateTime = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="">

      <div className="mt-5 p-3 shadow-sm">
        <div className='flex gap-4 justify-between container mx-auto'>
          <div className="flex gap-2 items-center">
            <Link href={'/'} className="bg-[#05893E] w-12 h-12 flex items-center rounded-xl justify-center">
              <Image
                src={navLogo}
                alt='বাজার দর'  
                width={20}
                height={20}
              />
            </Link>

            <div className="">
              <h3 className='font-bold text-xl'>বাজার দর</h3>
              <p className='text-sm text-gray-600'>{dateTime}</p>
            </div>
          </div>
          
          <div className="flex gap-2 flex-col md:flex-row w-22 sm:w-fit">
            <ProfileOrAuth />
          </div>
        </div>
      </div>
      
      <div className="flex items-center shadow-sm p-3">
        <div className="container mx-auto flex items-center gap-8 overflow-x-auto px-3 py-2 scrollbar-hide">
          {categories?.map((category:CategoryType) =>(
            <Link className='min-w-fit' href={`/category/${category.slug}`} key={category.id}>{category.icon} {category.nameBn}</Link>
          ))}
        </div>
      </div>
      
      <Marquee />
    </div>
  )
}
