import Image from "next/image";
import Link from "next/link";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PRODUCT_API = "https://suncare-dataset-server.onrender.com/products";

const AllProductsPage = async () => {
    const res = await fetch(PRODUCT_API, { cache: "no-store" });
    const products = await res.json();

    return (
        <main className="pb-20 px-6 md:px-12 max-w-7xl mx-auto pt-20">
            {/* Header */}
            <header className="mb-12 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#3f6c6c] bg-[#bcebeb]/30 px-3 py-1 rounded-full">
                    Curated Collection
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-manrope text-[#002630] tracking-tight">
                    All Products
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                    Discover our complete range of summer care essentials, designed
                    to keep you protected and refreshed all season long.
                </p>
            </header>

            {/* Filter & Sort */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200 pb-6">
                <div className="flex gap-2 flex-wrap">
                    <button className="px-4 py-2 bg-[#003D4C] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest">
                        All
                    </button>
                    {["Skincare", "Accessories", "Supplements"].map((cat) => (
                        <button
                            key={cat}
                            className="px-4 py-2 border border-slate-300 hover:border-[#396666] rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Sort by:</span>
                    <select className="bg-transparent border-none text-sm text-[#002630] focus:ring-0 cursor-pointer font-medium">
                        <option>Newest Arrivals</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group flex flex-col bg-white border border-teal-50 rounded-xl overflow-hidden transition-all hover:shadow-lg"
                    >
                        {/* Image */}
                        <div className="relative aspect-square bg-[#E0F2F1] overflow-hidden">

                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                            />
                            {product.stock <= 5 && (
                                <div className="absolute top-3 right-3">
                                    <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#003D4C] shadow-sm">
                                        Low Stock
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex items-center gap-1 mb-1">
                                <FaStar size={12} className="text-yellow-500" />
                                <span className="text-xs text-slate-500">
                                    {product.rating}
                                </span>
                                <span className="text-xs text-slate-400 ml-1">
                                    · {product.category}
                                </span>
                            </div>
                            <h3 className="font-semibold font-manrope text-[#002630] mb-1 text-base">
                                {product.name}
                            </h3>
                            <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-grow">
                                {product.description}
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-bold text-lg text-[#003D4C]">
                                    ${product.price}
                                </span>
                                <Link href={`/home/productdetails/${product.id}`}>
                                    <button className="bg-[#003D4C] text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-all">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:border-[#396666] transition-colors text-[#002630]">
                    <FaChevronLeft size={14} />
                </button>
                {[1, 2, 3].map((n) => (
                    <button
                        key={n}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold text-sm transition-colors ${n === 1
                            ? "bg-[#003D4C] text-white"
                            : "border border-slate-300 hover:border-[#396666] text-[#002630]"
                            }`}
                    >
                        {n}
                    </button>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:border-[#396666] transition-colors text-[#002630]">
                    <FaChevronRight size={14} />
                </button>
            </div>
        </main>
    );
};

export default AllProductsPage;