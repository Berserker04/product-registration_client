import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)] px-6">
      <Link
        href="/products"
        className="w-full sm:w-[300px] md:w-[500px] text-center text-white bg-[#273480] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-lg px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Ir a productos
      </Link>
    </div>
  );
}
