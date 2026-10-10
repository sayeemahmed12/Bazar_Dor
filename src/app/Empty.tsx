
import Link from "next/link";
import { Home } from "lucide-react";

export default function Empty() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <div className="max-w-6xl w-full border border-dashed rounded-3xl border-gray-400 p-10">
        <p className="font-semibold text-2xl">এখানে কিছুই নেই!</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
        >
          <Home size={18} />
          ← হোম পেজে ফিরে যান
        </Link>
      </div>

    </div>
  );
}
