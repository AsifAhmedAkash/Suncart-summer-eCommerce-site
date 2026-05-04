"use client";

import Link from "next/link";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await signOut();
        router.push("/login");
    };

    const getLinkClass = (path) => {
        const base = "transition-colors font-medium";
        const active = "text-[#003D4C] border-b-2 border-[#003D4C] pb-1";
        const inactive = "text-slate-500 hover:text-[#003D4C]";
        return pathname?.startsWith(path) ? `${base} ${active}` : `${base} ${inactive}`;
    };

    const mobileLinkClass = (path) => {
        const active = "text-[#003D4C] font-bold bg-teal-50 rounded-lg";
        const inactive = "text-slate-600 hover:text-[#003D4C] hover:bg-teal-50/50 rounded-lg";
        const exact = pathname === path;
        const starts = pathname?.startsWith(path) && path !== "/home";
        return `block px-4 py-3 text-sm font-manrope font-medium transition-colors ${exact || starts ? active : inactive}`;
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-50/50 shadow-sm">
                <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto w-full">

                    <button
                        className="md:hidden p-2 text-slate-500 hover:bg-teal-50 rounded-lg transition-all"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>


                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#003D4C] tracking-tight font-manrope">
                            SereneMarket
                        </span>
                    </div>


                    <div className="hidden md:flex items-center gap-8 text-sm font-medium font-manrope tracking-tight">
                        <Link
                            href="/home"
                            className={pathname === "/home"
                                ? "text-[#003D4C] border-b-2 border-[#003D4C] pb-1 transition-colors font-medium"
                                : "text-slate-500 hover:text-[#003D4C] transition-colors font-medium"}
                        >
                            Home
                        </Link>
                        <Link href="/home/allproducts" className={getLinkClass("/home/allproducts")}>
                            Products
                        </Link>
                        <Link href="/myprofile" className={getLinkClass("/myprofile")}>
                            My Profile
                        </Link>
                    </div>


                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-500 hover:bg-teal-50/50 rounded-lg transition-all active:scale-95">
                            <FaShoppingCart size={22} />
                        </button>

                        {isPending ? (
                            <div className="w-20 h-8 flex items-center justify-center">
                                <span className="loading loading-spinner loading-sm text-[#003D4C]" />
                            </div>
                        ) : session ? (
                            <>
                                <Link
                                    href="/myprofile"
                                    className="h-8 w-8 rounded-full overflow-hidden bg-teal-100 ring-2 ring-teal-50/50 ring-offset-2 ring-offset-white cursor-pointer hover:ring-teal-200 transition-all flex items-center justify-center"
                                >
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
                                <button
                                    onClick={handleSignOut}
                                    className="bg-[#003D4C] text-white px-4 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-[#002630] transition-all active:scale-95 shadow-sm"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-[#003D4C] font-semibold text-sm hover:underline">
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-[#003D4C] text-white px-4 py-2 rounded-lg font-manrope text-sm font-medium hover:bg-[#002630] transition-all active:scale-95 shadow-sm"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>


            {menuOpen && (
                <div className="fixed top-16 left-4 z-40 md:hidden w-56 bg-white/95 backdrop-blur-md border border-teal-50 rounded-2xl shadow-xl py-2 animate__animated animate__fadeInDown animate__faster">
                    <Link
                        href="/home"
                        className={mobileLinkClass("/home")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/home/allproducts"
                        className={mobileLinkClass("/home/allproducts")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        href="/myprofile"
                        className={mobileLinkClass("/myprofile")}
                        onClick={() => setMenuOpen(false)}
                    >
                        My Profile
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;