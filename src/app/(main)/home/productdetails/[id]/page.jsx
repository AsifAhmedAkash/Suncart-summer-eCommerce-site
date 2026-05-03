import Link from "next/link";
import { FaStar, FaArrowLeft, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const PRODUCT_API = "https://suncare-dataset-server.onrender.com/products";

// 4. Product Details Page 🔒 (Protected Route)
// Only accessible if logged in
// If not logged in → redirect to login
// After login → redirect back
// Show:
// Full product details in this page nicely

const ProductDetailsPage = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/login");
    }

    const res = await fetch(PRODUCT_API, { cache: "no-store" });
    const products = await res.json();
    const resolvedParams = await params;
    const product = products.find((p) => p.id === resolvedParams.id);


    return (
        <main className="min-h-screen pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Back */}
            <Link
                href="/home/allproducts"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#003D4C] transition-colors mb-8 group"
            >
                <FaArrowLeft
                    size={12}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                Back to Products
            </Link>

            {/* Card */}
            <div className="card lg:card-side bg-white shadow-lg border border-teal-50 rounded-2xl overflow-hidden">
                {/* Image Side */}
                <div className="lg:w-1/2 bg-[#E0F2F1] relative flex items-center justify-center p-10 min-h-[400px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Details Side */}
                <div className="card-body lg:w-1/2 p-8 md:p-12 flex flex-col gap-6">
                    {/* Badge + Category */}
                    <div className="flex items-center gap-3">
                        <span className="bg-[#bcebeb]/40 text-[#3f6c6c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {product.category}
                        </span>
                        <span className="bg-[#bcebeb]/40 text-[#3f6c6c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {product.brand}
                        </span>
                    </div>

                    {/* Name */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold font-manrope text-[#002630] leading-tight mb-2">
                            {product.name}
                        </h1>
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        size={14}
                                        className={
                                            i < Math.round(product.rating)
                                                ? "text-yellow-500"
                                                : "text-slate-200"
                                        }
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-slate-500 font-medium">
                                {product.rating} / 5.0
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <p className="text-3xl font-bold text-[#003D4C]">
                        ${product.price}
                    </p>

                    {/* Divider */}
                    <div className="divider my-0" />

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Perks */}
                    <ul className="space-y-2">
                        {[
                            "Premium quality materials",
                            "Fast & secure delivery",
                            "30-day return policy",
                        ].map((perk) => (
                            <li key={perk} className="flex items-center gap-3 text-sm text-[#396666]">
                                <FaCheckCircle size={14} />
                                {perk}
                            </li>
                        ))}
                    </ul>

                    {/* Stock */}
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-2 h-2 rounded-full ${product.stock > 5 ? "bg-green-500" : "bg-orange-400"
                                }`}
                        />
                        <span className="text-sm text-slate-500">
                            {product.stock > 5
                                ? `In stock (${product.stock} available)`
                                : `Only ${product.stock} left!`}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="divider my-0" />

                    {/* Actions */}
                    <div className="card-actions flex gap-3">
                        <button className="btn flex-1 bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold gap-2 rounded-xl">
                            <FaShoppingCart size={16} />
                            Add to Cart
                        </button>
                        <button className="btn btn-outline border-[#003D4C] text-[#003D4C] hover:bg-[#003D4C] hover:text-white hover:border-[#003D4C] normal-case font-manrope font-semibold rounded-xl">
                            Wishlist
                        </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
                        Free shipping on orders over $50
                    </p>
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;