import { toBanglaNumber, type MarketType, type ProductType } from "@/app/type";

interface Props {
  product: ProductType;
}

export default function TodayPrice({ product }: Props) {
  return (
    <section className="mt-10">
      {/* Header */}
      <div className="mb-4 px-1">
        <h2 className="text-xl font-bold md:text-2xl">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          বিভিন্ন বাজারের আজকের দাম তুলনা করুন
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-base-100 shadow-sm">
        
        <div className="min-w-[700px] ">
          <div className="grid grid-cols-5 bg-base-200 px-5 py-4 text-sm font-bold">
            <p>বাজার</p>
            <p>বিভাগ</p>
            <p>সর্বনিম্ন</p>
            <p>সর্বাধিক</p>
            <p>গড়</p>
          </div>

          {product.markets.map((market: MarketType, indx: number) =>(
            <div
              key={indx}
              className={
                `grid grid-cols-5 items-center px-5 py-5 text-sm 
                ${indx !== product.markets.length - 1? 
                  "border-b border-gray-200" 
                  : ""
                } 
                ${indx % 2 !== 0? "bg-[#F3FBF4]" : "bg-white"}`
              }
            >
              <p>{market.market}</p>
              <p>{market.division}</p>
              <p>{toBanglaNumber(market.min)} টাকা</p>
              <p>{toBanglaNumber(market.max)} টাকা</p>
              <p>{toBanglaNumber((market.min+market.max)/2)} টাকা</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
