"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEdit, FaUser, FaEnvelope, FaImage, FaLock, FaSave } from "react-icons/fa";

const MyProfilePage = () => {
    const [form, setForm] = useState({
        name: "Alex Johnson",
        email: "alex.j@example.com",
        photoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXp1znLY7T62e9mY6fmJtfp7WSpOw0899i8KIGIcSudKYcvtNVMK1ZrFNrDVmpW843gT8pV48FWUBsaWIk-K0vinJMXRsIv-0Kdgwt99lLdGe-SiR7HBQY3dM6nu201uPYuaV4mAddvarrKfvu7d68hZHkMysmjfk9op440z0TAiCBDc6yhyb1EoMu4zueHfVw3uUz_zzMnQFLAN7zVSwgjlVlZImWFd1n1dtmRRRXrjubK_VFDK5jzr0aGEn5aLy_9gOH9WL-w8Qn",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle update logic here
        alert("Profile updated!");
    };

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12">
                {/* Avatar */}
                <div className="relative">
                    <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-md bg-[#bcebeb]">
                        <img
                            src={form.photoUrl || "https://placehold.co/128x128/E0F2F1/003D4C?text=?"}
                            alt={form.name}
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

                {/* Name & Email */}
                <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#396666] block mb-1">
                        My Profile
                    </span>
                    <h1 className="text-4xl font-bold font-manrope text-[#002630] mb-1">
                        {form.name}
                    </h1>
                    <p className="text-slate-500">{form.email}</p>
                </div>
            </div>

            {/* Form Card */}
            <div className="card bg-white border border-teal-50 shadow-sm rounded-2xl">
                <div className="card-body p-8 md:p-10">
                    <h2 className="text-xl font-bold font-manrope text-[#002630] mb-6">
                        Edit Profile
                    </h2>

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
                                    placeholder="Jane Doe"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    Email Address
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaEnvelope size={14} className="text-slate-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Photo URL */}
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
                                    name="photoUrl"
                                    value={form.photoUrl}
                                    onChange={handleChange}
                                    placeholder="https://image-link.com/avatar.jpg"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    New Password
                                </span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-xl border-slate-200 focus-within:border-[#396666] focus-within:ring-1 focus-within:ring-[#396666]">
                                <FaLock size={14} className="text-slate-400" />
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Leave blank to keep current"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn w-full bg-[#003D4C] text-white border-none hover:bg-[#002630] normal-case font-manrope font-semibold rounded-xl gap-2"
                            >
                                <FaSave size={14} />
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default MyProfilePage;