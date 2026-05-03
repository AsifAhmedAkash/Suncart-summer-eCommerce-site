import React from 'react';
import { ImShare2 } from "react-icons/im";
// 
import { FaGlobe } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";

// 🔻 Footer
// Contact info
// Social links
// Privacy policy



const Footer = () => {
    return (
        <footer className="bg-[#F9FBFB] w-full border-t border-teal-100">
            <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
                {/* Brand & Tagline */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold text-[#003D4C] font-manrope">
                        SereneMarket
                    </span>
                    <p className="font-manrope text-sm text-slate-600">
                        © 2024 SereneMarket. Purity in every purchase.
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="font-manrope text-sm text-slate-500 hover:underline hover:text-[#003D4C] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Social & Utility Icons */}
                <div className="flex items-center gap-6">
                    <button className="p-2 text-slate-500 hover:text-[#003D4C] transition-all rounded-lg">
                        <ImShare2 size={20} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-[#003D4C] transition-all rounded-lg">
                        <FaGlobe size={20} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-[#003D4C] transition-all rounded-lg">
                        <FaLeaf size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;