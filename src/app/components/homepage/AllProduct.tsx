import ProductCard from "./ProductCard";
import type{ ProductType } from "@/app/type";

const getProduct = async() =>{
  try{
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const products = await res.json();
    return products;

  }catch(error){
    console.log(error);

  }
}

export default async function AllProduct() {
  const products = await getProduct();

  return (
    <div id="allProducts" className='scroll-mt-20 container m-auto my-20'>
      <div className="">
        <p className="font-bold text-3xl">সব পণ্য</p>
        <p className="text-gray-600 mb-4 text-base">মোট {products?.length}টি পণ্য দেখানো হচ্ছে</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product:ProductType) =>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
} 