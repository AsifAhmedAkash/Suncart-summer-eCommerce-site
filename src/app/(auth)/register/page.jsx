"use client";

import Link from "next/link";
import { FaArrowRight, FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// 📝 Register Page
// Create a register page with a form , so that the user can register himself in this application. 
// Show a Title for registration and a Form with following fields
// ( Name , Email, Photo-url(link), Password & Register Button ) 

// If the user Register successfully then 
// navigate him to his login page.
// If not, show him an error with toast / error message anywhere in the form.


// There will be some other options like 
// Show the user a Link for Login so that he can go to the Login page. 
// Show users a Social Login Button ( Google only ) . on Clicking it 
// user authenticate with Google
// Navigate the user to the Home page.



const RegisterPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle register logic here
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
                        <p className="text-slate-500 text-sm">
                            Purity in every step of your wellness experience.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label pt-0 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Name
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaUser size={13} className="text-slate-400" />
                                <input type="text" placeholder="Jane Doe" className="grow" required />
                            </label>
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
                                <input type="email" placeholder="jane@example.com" className="grow" required />
                            </label>
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
                                <input type="url" placeholder="https://image-link.com/avatar.jpg" className="grow" />
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
                                <input type="password" placeholder="••••••••" className="grow" required />
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn w-full bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl gap-2"
                            >
                                Register
                                <FaArrowRight size={14} />
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider text-[10px] font-bold uppercase tracking-widest text-slate-400 my-6">
                        or
                    </div>

                    {/* Google */}
                    <button className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:border-slate-300 normal-case font-manrope font-semibold rounded-xl gap-3 text-[#002630]">
                        <FcGoogle size={20} />
                        Continue with Google
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