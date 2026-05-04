"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PRODUCT_API = "https://suncare-dataset-server.onrender.com/products";
const ITEMS_PER_PAGE = 12;

const CATEGORIES = ["All", "Accessories", "Outdoor", "Fashion", "Electronics", "Skincare", "Others"];

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(PRODUCT_API)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const filteredAndSorted = useMemo(() => {
        let result = [...products];

        if (activeCategory !== "All") {
            result = result.filter((p) => p.category === activeCategory);
        }

        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return result;
    }, [products, activeCategory, sortBy]);

    const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);
    const paginated = filteredAndSorted.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors ${activeCategory === cat
                                ? "bg-[#003D4C] text-white"
                                : "border border-slate-300 hover:border-[#396666]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className="bg-transparent border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#002630] focus:ring-0 cursor-pointer font-medium"
                    >
                        <option value="newest">All</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>

            {/* Result count */}
            <p className="text-sm text-slate-400 mb-4">
                Showing {paginated.length} of {filteredAndSorted.length} products
            </p>

            {/* Product Grid */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="rounded-xl bg-slate-100 animate-pulse aspect-[3/4]" />
                    ))}
                </div>
            ) : paginated.length === 0 ? (
                <div className="text-center py-24 text-slate-400">
                    No products found in this category.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {paginated.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col bg-white border border-teal-50 rounded-xl overflow-hidden transition-all hover:shadow-lg"
                        >
                            <div className="relative aspect-square bg-[#E0F2F1] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                {product.stock <= 5 && (
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#003D4C] shadow-sm">
                                            Low Stock
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center gap-1 mb-1">
                                    <FaStar size={12} className="text-yellow-500" />
                                    <span className="text-xs text-slate-500">{product.rating}</span>
                                    <span className="text-xs text-slate-400 ml-1">· {product.category}</span>
                                </div>
                                <h3 className="font-semibold font-manrope text-[#002630] mb-1 text-base">
                                    {product.name}
                                </h3>
                                <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-grow">
                                    {product.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="font-bold text-lg text-[#003D4C]">${product.price}</span>
                                    <Link
                                        href={`/home/productdetails/${product.id}`}
                                        className="bg-[#003D4C] text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-all text-center"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-20 flex justify-center items-center gap-2 flex-wrap">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:border-[#396666] transition-colors text-[#002630] disabled:opacity-30"
                    >
                        <FaChevronLeft size={14} />
                    </button>
                    {pageNumbers.map((n) => (
                        <button
                            key={n}
                            onClick={() => setCurrentPage(n)}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold text-sm transition-colors ${n === currentPage
                                ? "bg-[#003D4C] text-white"
                                : "border border-slate-300 hover:border-[#396666] text-[#002630]"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 hover:border-[#396666] transition-colors text-[#002630] disabled:opacity-30"
                    >
                        <FaChevronRight size={14} />
                    </button>
                </div>
            )}
        </main>
    );
};

export default AllProductsPage;