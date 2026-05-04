"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaUser, FaImage, FaSave, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const [form, setForm] = useState({ name: "", image: "" });
    const [initialized, setInitialized] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/login");
        }
    }, [session, isPending, router]);

    useEffect(() => {
        if (session?.user && !initialized) {
            setInitialized(true);
            setForm({
                name: session.user.name || "",
                image: session.user.image || "",
            });
        }
    }, [session, initialized]);

    if (isPending) {
        return (
            <main className="min-h-screen pt-24 flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#003D4C]" />
            </main>
        );
    }

    if (!session) return null;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim()) {
            toast.error("Name cannot be empty.");
            return;
        }
        setLoading(true);
        try {
            await authClient.updateUser({
                name: form.name,
                image: form.image,
            });
            toast.success("Profile updated successfully!");
            setTimeout(() => router.push("/myprofile"), 1500);
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-2xl mx-auto">
            <Link
                href="/myprofile"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#003D4C] mb-8 transition-colors"
            >
                <FaArrowLeft size={12} />
                Back to Profile
            </Link>

            <div className="bg-white border border-teal-50 shadow-sm rounded-2xl p-8 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#396666] block mb-1">
                    Edit Account
                </span>
                <h1 className="text-3xl font-bold font-manrope text-[#002630] mb-8">
                    Update Information
                </h1>

                {/* Live image preview */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#bcebeb] shadow bg-[#E0F2F1]">
                        <img
                            src={form.image || "https://placehold.co/80x80/E0F2F1/003D4C?text=?"}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/80x80/E0F2F1/003D4C?text=?";
                            }}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label pb-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Full Name
                            </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                            <FaUser size={14} className="text-slate-400" />
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="grow"
                                required
                            />
                        </label>
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label pb-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Photo URL
                            </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                            <FaImage size={14} className="text-slate-400" />
                            <input
                                type="url"
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="https://your-image-url.com/photo.jpg"
                                className="grow"
                            />
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl gap-2 disabled:opacity-60"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm" />
                            ) : (
                                <FaSave size={14} />
                            )}
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default UpdateProfilePage;