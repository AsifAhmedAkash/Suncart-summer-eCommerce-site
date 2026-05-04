"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { FaEdit, FaUser, FaEnvelope } from "react-icons/fa";

const MyProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/login");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <main className="min-h-screen pt-24 flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#003D4C]" />
            </main>
        );
    }

    if (!session) return null;

    const user = session.user;

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12">
                <div className="relative">
                    <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-md bg-[#bcebeb]">
                        <img
                            src={user.image || "https://placehold.co/128x128/E0F2F1/003D4C?text=?"}
                            alt={user.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/128x128/E0F2F1/003D4C?text=?";
                            }}
                        />
                    </div>
                    <div className="absolute bottom-2 right-2 p-2 bg-[#003D4C] text-white rounded-lg shadow">
                        <FaEdit size={12} />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#396666] block mb-1">
                        My Profile
                    </span>
                    <h1 className="text-4xl font-bold font-manrope text-[#002630] mb-1">
                        {user.name}
                    </h1>
                    <p className="text-slate-500 flex items-center gap-2 justify-center md:justify-start">
                        <FaEnvelope size={12} />
                        {user.email}
                    </p>
                </div>
            </div>

            {/* Card */}
            <div className="bg-white border border-teal-50 shadow-sm rounded-2xl p-8 md:p-10">
                <h2 className="text-xl font-bold font-manrope text-[#002630] mb-6">
                    Account Details
                </h2>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-600">
                        <FaUser size={14} className="text-[#396666]" />
                        <span className="text-sm font-medium">{user.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <FaEnvelope size={14} className="text-[#396666]" />
                        <span className="text-sm font-medium">{user.email}</span>
                    </div>
                </div>

                <Link
                    href="/myprofile/update"
                    className="btn bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl gap-2 w-full md:w-auto"
                >
                    <FaEdit size={13} />
                    Update Profile
                </Link>
            </div>
        </main>
    );
};

export default MyProfilePage;