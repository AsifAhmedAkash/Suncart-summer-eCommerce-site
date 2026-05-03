import React from 'react';


// ➕ Extra Sections
// “Summer Care Tips” (e.g., skincare, hydration tips)
// “Top Brands” (3–4 static brand cards)

//using tips and brands as static data for now, later from api
const tips = [
    {
        icon: "🌿",
        title: "Skincare Defense",
        description:
            "Prioritize broad-spectrum mineral protection and antioxidant-rich serums to combat environmental stressors.",
    },
    {
        icon: "💧",
        title: "Strategic Hydration",
        description:
            "Incorporate electrolyte-rich infusions and water-dense fruits to maintain cellular balance through peak heat.",
    },
];

const brands = [
    { name: "VITALIA", style: "italic" },
    { name: "ZENITH", style: "tracking-tighter" },
    { name: "PURE", style: "font-extrabold uppercase" },
    { name: "Ethereal", style: "font-light" },
];

const ExtraSection = () => {
    return (
        <section className="bg-[#f2f4f4] py-20">
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Summer Care Tips */}
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#396666] mb-4 block">
                            Seasonal Wellness
                        </span>
                        <h2 className="text-3xl font-semibold font-manrope text-[#003D4C] mb-8 tracking-tight">
                            Summer Care Tips
                        </h2>
                        <div className="space-y-6">
                            {tips.map((tip) => (
                                <div
                                    key={tip.title}
                                    className="flex gap-4 p-6 bg-white rounded-xl border border-teal-50 shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-2xl">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#003D4C] mb-1 font-manrope">
                                            {tip.title}
                                        </h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {tip.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Brands */}
                    <div className="bg-white p-12 rounded-2xl border border-teal-100/50">
                        <h3 className="text-center font-manrope font-bold text-slate-400 uppercase tracking-[0.2em] text-xs mb-12">
                            Top Brands
                        </h3>
                        <div className="grid grid-cols-2 gap-y-12 gap-x-8 opacity-60">
                            {brands.map((brand) => (
                                <div key={brand.name} className="flex items-center justify-center">
                                    <span
                                        className={`text-2xl font-semibold font-manrope text-slate-600 ${brand.style}`}
                                    >
                                        {brand.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraSection;