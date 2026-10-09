
"use client";

import MarqueeText from "react-marquee-text";
import type { ProductType } from "@/app/type";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";

export default function MarqueeClient({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto flex items-center">

        <div className="min-w-0 flex-1 overflow-hidden">
          <MarqueeText className="py-3" direction="right" duration={20}>

            <div className="flex w-max items-center gap-5">
              {products?.map((product) => (

                <Link href={`/details/${product.id}`} key={product.id} className="flex shrink-0 items-center gap-2">
                  <span>{product.image}</span>
                  <span className="font-semibold">{product.nameBn}</span>

                  <span>
                    {product.today} টাকা
                    {product.unit === "kg" ? "/কেজি"
                    : product.unit === "litre" ? "/লিটার"
                    : product.unit === "dozen" ? "/ডজন"
                    : "/পিস"}
                  </span>

                  {product.change.dir  === 'up' ? 
                      <p className='text-red-500'>▲ {product.change.pct}%</p>
                    :
                      <p className='text-green-500'>▼ {product.change.pct}%</p>
                  }

                  <span className="ml-4 text-white/60">•</span>
                </Link>
              ))}
            </div>

          </MarqueeText>
        </div>
              
      </div>
    </div>
  );
}