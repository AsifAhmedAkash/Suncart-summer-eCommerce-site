"use client";

import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLoginFunc = async (data) => {
        setLoading(true);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/home",
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "Invalid credentials.");
        } else {
            toast.success("Welcome back!");
            router.push("/home");
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await authClient.signIn.social({ provider: "google" });
        } catch (err) {
            toast.error("Google sign-in failed. Try again.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#f8fafa] relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#bcebeb]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#baeafd]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center z-10">

                <div className="hidden md:block rounded-2xl overflow-hidden aspect-[4/5] relative shadow-xl">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWQFrkRyAleDpIYBEHC8DB8Et3rCcBiDiPBbRAxpyl743DKts0mMMY-bMR4L_EW1bIxcqAyQESbV_eDvF-74cIjCHJ84ZQPCeQWGoQ-ifzMPkBmUiMVYgLZtYgz-2_2gWdxKW1j1jFxQrXYF_LinmB90kYl4eOCDjiNV0Ca4OY489Z8MtQHc9KSULUyZIikmbvmDtmAD94jkLKAd2DKkZA1Yfs6IVW3d1fZ_RzbTNyWRlmSKepTdbvO7vyUxiQrYwYbwc0sukk-xeA"
                        alt="Wellness mood"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002630]/60 to-transparent flex flex-col justify-end p-10 text-white">
                        <h2 className="text-2xl font-bold font-manrope mb-3 leading-snug">
                            Purity in every purchase.
                        </h2>
                        <p className="text-sm text-white/80 leading-relaxed">
                            Experience the intersection of clinical efficacy and holistic
                            tranquility with our curated wellness marketplace.
                        </p>
                    </div>
                </div>


                <div className="card bg-white border border-teal-50 shadow-sm rounded-2xl">
                    <div className="card-body p-8 md:p-10">
                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-4xl font-bold font-manrope text-[#003D4C] mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-sm text-slate-500">
                                Please enter your details to access your account.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">

                            <div className="form-control">
                                <label className="label pt-0 pb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                        Email
                                    </span>
                                </label>
                                <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                    <FaEnvelope size={13} className="text-slate-400" />
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="grow"
                                        {...register("email", { required: "Email is required" })}
                                    />
                                </label>
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label pt-0 pb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                        Password
                                    </span>
                                    <a className="text-[10px] font-bold text-[#396666] hover:underline uppercase tracking-wider label-text-alt">
                                        Forgot?
                                    </a>
                                </label>
                                <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                    <FaLock size={13} className="text-slate-400" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="grow"
                                        {...register("password", { required: "Password is required" })}
                                    />
                                </label>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn w-full bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl shadow-md disabled:opacity-70"
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </div>
                        </form>

                        <div className="divider text-[10px] font-bold uppercase tracking-widest text-slate-400 my-6">
                            Or continue with
                        </div>

                        <button
                            onClick={handleGoogleSignin}
                            className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:border-slate-300 normal-case font-manrope font-semibold rounded-xl gap-3 text-[#002630] w-full"
                        >
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>

                        <p className="mt-8 text-center text-sm text-slate-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-[#396666] font-bold hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;