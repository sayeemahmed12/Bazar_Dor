import ProductCard from '@/app/components/homepage/ProductCard';
import { ProductType } from '@/app/type';
import CategoryClient from './CategoryClient';

interface Props{
 params: Promise<{ slug: string }>;
}

const getProduct = async(slug:string) =>{
  try{
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`);
    const products = await res.json();
    return products;

  }catch(error){
    console.log(error);
  }
}

export default async function ProductDetails({ params }: Props) {
  const {slug} = await params;

  const products = await getProduct(slug);

  return (
    <CategoryClient products={products} />
  )
}
