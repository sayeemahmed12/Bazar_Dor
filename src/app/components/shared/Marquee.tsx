
import type { ProductType } from "@/app/type";
import MarqueeClient from "./MarqueeClient";

export default async function Marquee() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return null;
  }

  const data: ProductType[] = await res.json();

  return <MarqueeClient products={data} />;
}