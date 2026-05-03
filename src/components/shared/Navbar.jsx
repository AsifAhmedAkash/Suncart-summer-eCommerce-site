"use client";
// import React from 'react';
import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
// 🔝 Navbar
// Logo
// Links: Home, Products, My Profile
// If logged in:
// Show user avatar
// Logout button
// If logged out:
// Login / Register buttons


const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const handleSignOut = async () => {
        await signOut();
        router.push("/login");
    };

    const getLinkClass = (path) => {
        const baseClass = "transition-colors font-medium";
        const activeClass = "text-[#003D4C] border-b-2 border-[#003D4C] pb-1";
        const inactiveClass = "text-slate-500 hover:text-[#003D4C]";
        
        return pathname?.startsWith(path) ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
    };

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
                        className={pathname === "/home" ? "text-[#003D4C] border-b-2 border-[#003D4C] pb-1 transition-colors font-medium" : "text-slate-500 hover:text-[#003D4C] transition-colors font-medium"}
                    >
                        Home
                    </Link>
                    <Link
                        href="/home/allproducts"
                        className={getLinkClass("/home/allproducts")}
                    >
                        Products
                    </Link>
                    <Link
                        href="/myprofile"
                        className={getLinkClass("/myprofile")}
                    >
                        My Profile
                    </Link>
                </div>

                {/* Trailing Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-teal-50/50 rounded-lg transition-all active:scale-95">
                        <FaShoppingCart size={22} />
                    </button>

                    {isPending ? (
                        <div className="w-20 h-8 flex items-center justify-center">
                            <span className="loading loading-spinner loading-sm text-[#003D4C]"></span>
                        </div>
                    ) : session ? (
                        <>
                            {/* User Avatar */}
                            <Link href="/myprofile" className="h-8 w-8 rounded-full overflow-hidden bg-teal-100 ring-2 ring-teal-50/50 ring-offset-2 ring-offset-white cursor-pointer hover:ring-teal-200 transition-all flex items-center justify-center">
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <FaUser className="text-[#003D4C] opacity-50" />
                                )}
                            </Link>

                            <button onClick={handleSignOut} className="bg-[#003D4C] text-white px-4 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-[#002630] transition-all active:scale-95 shadow-sm">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-[#003D4C] font-semibold text-sm hover:underline">
                                Login
                            </Link>
                            <Link href="/register" className="bg-[#003D4C] text-white px-4 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-[#002630] transition-all active:scale-95 shadow-sm">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;