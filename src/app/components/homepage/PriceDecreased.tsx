import ProductCard from "./ProductCard";
import type{ ProductType } from "@/app/type";

const getProduct = async() =>{
  try{
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const products = await res.json();
    const priceDecreasedProducts = products
      .filter((product:ProductType) => product.change.dir === 'down')
      .sort((a:ProductType, b:ProductType) => a.change.pct - b.change.pct)
      .slice(0, 6);

    return priceDecreasedProducts;

  }catch(error){
    console.log(error);
  }
}

export default async function PriceDecreased() {
  const products = await getProduct();

  return (
    <div className='container m-auto mt-20'>
      <div className="">
        <p className="flex items-center gap-2 font-bold text-3xl mb-4">
          <span className="text-green-500">▲</span> আজ দাম কমেছে
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product:ProductType) =>(
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>
    </div>
  )
} 