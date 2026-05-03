"use client";
// import React from 'react';
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
// 🔝 Navbar
// Logo
// Links: Home, Products, My Profile
// If logged in:
// Show user avatar
// Logout button
// If logged out:
// Login / Register buttons


const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-50/50 shadow-sm">
            <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#003D4C] tracking-tight font-manrope">
                        SereneMarket
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium font-manrope tracking-tight">
                    <Link
                        href="/home"
                        className="text-[#003D4C] border-b-2 border-[#003D4C] pb-1"
                    >
                        Home
                    </Link>
                    <Link
                        href="/home/allproducts"
                        className="text-slate-500 hover:text-[#003D4C] transition-colors"
                    >
                        Products
                    </Link>
                    <Link
                        href="/myprofile"
                        className="text-slate-500 hover:text-[#003D4C] transition-colors"
                    >
                        My Profile
                    </Link>
                </div>

                {/* Trailing Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-teal-50/50 rounded-lg transition-all active:scale-95">
                        <FaShoppingCart size={22} />
                    </button>

                    {/* User Avatar */}
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-teal-100 ring-2 ring-teal-50/50 ring-offset-2 ring-offset-white">
                        {/* use next img here */}
                        {/* <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDNAgokXZEZ28MxnypUHj_aom9pwMCYN-Vi_ro2RYcZ4spXSl5uhR8adLJW-dHJKRokR92VT8tSBs1EPfdMNDqqjagj7UDA7yF2_VGuMbRL94JyWqH-LWSB-ab8QcYAgo3u9oPqVIO2Wlmz6U3HlBqUwhcFHHfT7EfwKy__D0vncqhbq-FFTJV2xT4hir4sVYm2m-QZpAxDb4UZEMQI4CHVTqyZ-GSfJ4SWkec7Xn79dPXlItdykYOnsWU4yFc1DOs4sF02ypLMCS"
                            alt="User profile avatar"
                            className="h-full w-full object-cover"
                        /> */}
                    </div>

                    <button className="bg-[#003D4C] text-white px-4 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-[#002630] transition-all active:scale-95 shadow-sm">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;