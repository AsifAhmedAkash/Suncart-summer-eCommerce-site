import Link from "next/link";
import Image from "next/image";
import { FaRegStar, FaChevronRight } from "react-icons/fa";
import "animate.css";

const PopularProducts = ({ products }) => {
    const delays = ["", "animate__delay-1s", "animate__delay-2s"];

    return (
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">

            <div className="animate__animated animate__fadeInDown flex justify-between items-end mb-12">
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#78a8b9] mb-2 block">
                        Curated Excellence
                    </span>
                    <h2 className="text-3xl font-semibold font-manrope text-[#003D4C] tracking-tight">
                        Popular Products
                    </h2>
                </div>
                <Link
                    href="/home/allproducts"
                    className="text-[#003D4C] font-semibold text-sm flex items-center gap-1 hover:underline"
                >
                    View All Products <FaChevronRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`group animate__animated animate__fadeInUp ${delays[index] || "animate__delay-2s"}`}
                    >
                        <div className="bg-white rounded-xl overflow-hidden border border-teal-50/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">

                            <div className="aspect-square bg-[#E0F2F1] relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                {product.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#003D4C] shadow-sm">
                                            {product.badge}
                                        </span>
                                    </div>
                                )}
                            </div>


                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    <FaRegStar size={14} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-semibold text-slate-600">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold font-manrope text-[#003D4C] mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-[#003D4C] font-bold text-lg mb-6">
                                    ${product.price}
                                </p>
                                <Link
                                    href={`/home/productdetails/${product.id}`}
                                    className="btn btn-outline w-full border-[#003D4C] text-[#003D4C] hover:bg-[#003D4C] hover:text-white hover:border-[#003D4C] rounded-lg font-manrope font-semibold text-sm normal-case transition-colors flex items-center justify-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;