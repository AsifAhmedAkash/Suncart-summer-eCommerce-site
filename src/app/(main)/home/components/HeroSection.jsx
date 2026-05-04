'use client';
import { FaArrowRight } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import Link from "next/link";
import "animate.css";

const HeroSection = () => {
    return (
        <section className="relative mt-8 px-6 md:px-12 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Hero */}
                <div className="lg:col-span-8 relative overflow-hidden rounded-xl h-[400px] bg-[#003D4C] group">
                    <div className="relative z-10 h-full flex flex-col justify-center p-12 text-white">
                        <div className="animate__animated animate__fadeInDown inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full w-fit mb-6">
                            <FaFireFlameCurved size={14} className="fill-white" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                Hot Deals 🔥
                            </span>
                        </div>
                        <h1 className="animate__animated animate__fadeInUp text-4xl md:text-5xl font-bold font-manrope text-white mb-4 leading-tight tracking-tight">
                            Summer Sale 50% OFF
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s text-lg text-teal-50/80 max-w-md mb-8 leading-relaxed">
                            Rejuvenate your routine with our curated seasonal essentials. Pure,
                            organic, and clinically tested for your best summer yet.
                        </p>
                        <Link
                            href="/home/allproducts"
                            className="animate__animated animate__fadeInUp animate__delay-2s btn bg-white text-[#003D4C] border-none hover:bg-teal-50 px-8 py-3 rounded-lg font-manrope font-semibold text-sm w-fit transition-transform active:scale-95 normal-case inline-flex items-center justify-center"
                        >
                            Shop the Collection
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="animate__animated animate__fadeInRight flex-1 bg-[#bcebeb] rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold font-manrope text-[#396666] mb-2">
                                Immune Boost
                            </h3>
                            <p className="text-sm text-[#396666]/70">
                                Bio-available vitamins for daily resilience.
                            </p>
                        </div>
                        <Link
                            href="#"
                            className="relative z-10 text-[#396666] font-semibold text-sm flex items-center gap-2 group w-fit hover:gap-3 transition-all"
                        >
                            Explore Now{" "}
                            <FaArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <span className="absolute -bottom-4 -right-4 text-[120px] opacity-10 text-[#396666] select-none leading-none">
                            💊
                        </span>
                    </div>

                    <div className="animate__animated animate__fadeInRight animate__delay-1s flex-1 bg-white border border-teal-100 rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold font-manrope text-[#003D4C] mb-2">
                                Clarity Rituals
                            </h3>
                            <p className="text-sm text-slate-500">
                                Mindful journaling for a peaceful start.
                            </p>
                        </div>
                        <Link
                            href="#"
                            className="relative z-10 text-[#003D4C] font-semibold text-sm flex items-center gap-2 group w-fit hover:gap-3 transition-all"
                        >
                            View Rituals{" "}
                            <FaArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <span className="absolute -bottom-4 -right-4 text-[120px] opacity-5 text-[#003D4C] select-none leading-none">
                            📖
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;