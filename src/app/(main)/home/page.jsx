// import React from 'react';
import HeroSection from '@/app/(main)/home/components/HeroSection';
import PopularProducts from '@/app/(main)/home/components/PopularProducts';
// import Extra from './components/extra';
import ExtraSection from '@/app/(main)/home/components/ExtraSection';

const HomePage = async () => {
    const res = await fetch("https://suncare-dataset-server.onrender.com/products");
    const products = await res.json();
    const popularProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    // console.log("Fetched products:", products);
    console.log("Popular products: ", popularProducts);


    return (
        <div>
            <HeroSection />
            <PopularProducts products={popularProducts} />
            <ExtraSection />
        </div>
    );
};

export default HomePage;