"use client";

import Link from "next/link";
import { FaArrowRight, FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleRegisterFunc = async (data) => {
        console.log("Registration form submitted");
        setLoading(true);
        setError(null);

        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.photoUrl || undefined,
            callbackURL: "/login",
        });

        console.log("Sign-up response:", { data: res, error });
        setLoading(false);

        if (error) {
            setError(error.message || "Something went wrong.");
        } else {
            router.push("/login");
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError(null);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/home",
            });
        } catch (err) {
            setError(err.message || "Failed to sign in with Google.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#f8fafa]">
            <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">

                {/* Left - Image Side */}
                <div className="hidden md:block relative min-h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003D4C]/20 to-[#bcebeb]/10 z-10" />
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv2XUn_Qj22xpV8rVDlYfiIihYrY0Gl_GmNEFiFnXjlSNz1OWkaReLz2aSEw8sdAwY9uKlP0HN1igBm58-hZK3bQuAXJMBr4uU3xC0Lk68__Vtdg8QI9y10aOLw__NOO9fRuBG9TTuzY_mVPgsfiBV1AdLxLaj2dbdYvdfU84q4G3uywL9oP840cofe7BTTs4v-USelFbRbblcYsPudx91sr017dO5lzLGuSw9VfV1xdN3zcMTHJep6kPzsglRm37ei36lRg25uZnl"
                        alt="Wellness studio"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-12 left-10 right-10 z-20">
                        <h2 className="text-2xl font-bold font-manrope text-[#003D4C] mb-3 leading-snug">
                            A breath of fresh air in your health journey.
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Join a community of health-conscious consumers who value
                            transparency and premium clinical efficacy.
                        </p>
                    </div>
                </div>

                {/* Right - Form Side */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold font-manrope text-[#002630] mb-2">
                            Create Account
                        </h1>
                        <p className="text-slate-500 text-sm mb-4">
                            Purity in every step of your wellness experience.
                        </p>
                        {error && (
                            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm font-semibold border border-red-100">
                                {error}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label pt-0 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Name
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaUser size={13} className="text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="grow"
                                    {...register("name", { required: "Name is required" })}
                                />
                            </label>
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label pt-0 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Email Address
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaEnvelope size={13} className="text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="jane@example.com"
                                    className="grow"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </label>
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label pt-0 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Photo URL
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaImage size={13} className="text-slate-400" />
                                <input
                                    type="url"
                                    placeholder="https://image-link.com/avatar.jpg"
                                    className="grow"
                                    {...register("photoUrl")}
                                />
                            </label>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label pt-0 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Password
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaLock size={13} className="text-slate-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="grow"
                                    {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
                                />
                            </label>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn w-full bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl gap-2 disabled:opacity-70"
                            >
                                {loading ? "Registering..." : "Register"}
                                {!loading && <FaArrowRight size={14} />}
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider text-[10px] font-bold uppercase tracking-widest text-slate-400 my-6">
                        or
                    </div>

                    {/* Google */}
                    <button 
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:border-slate-300 normal-case font-manrope font-semibold rounded-xl gap-3 text-[#002630] disabled:opacity-70"
                    >
                        <FcGoogle size={20} />
                        {loading ? "Connecting..." : "Continue with Google"}
                    </button>

                    {/* Login link */}
                    <p className="mt-8 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#003D4C] font-bold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;