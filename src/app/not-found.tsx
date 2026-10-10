import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function Empty() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <SearchX size={40} className="text-green-700" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
        এখানে কিছুই নেই!
      </h2>

      <p className="mt-3 max-w-sm text-gray-500">
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা খুঁজে পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
      >
        <Home size={18} />
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
