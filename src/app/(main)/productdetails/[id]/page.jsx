import React from 'react';

// 4. Product Details Page 🔒 (Protected Route)
// Only accessible if logged in
// If not logged in → redirect to login
// After login → redirect back
// Show:
// Full product details in this page nicely

const ProductDetailsPage = ({ params }) => {
    return (
        <div>
            This is product details page
        </div>
    );
};

export default ProductDetailsPage;