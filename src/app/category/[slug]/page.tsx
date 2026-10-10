import CategoryClient from './CategoryClient';
import { notFound } from 'next/navigation';

interface Props{
 params: Promise<{ slug: string }>;
}

const getProduct = async(slug:string) =>{
  try{
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`);

    if(!res.ok){
      return null;
    }

    const products = await res.json();
    return products;

  }catch(error){
    console.log(error);
    return null;
  }
}

export default async function ProductDetails({ params }: Props) {
  const {slug} = await params;

  const products = await getProduct(slug);


  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <CategoryClient products={products} />
  )
}
