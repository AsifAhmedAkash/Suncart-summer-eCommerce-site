🌞 Suncart — Summer eCommerce Platform
A modern, full-stack summer essentials eCommerce platform built with Next.js 15, Better Auth, and DaisyUI. Suncart offers a clean, responsive shopping experience with secure authentication, real-time product browsing, and user profile management.
🔗 Live Site: suncart-summer-e-commerce-site.vercel.app
🗄️ API: suncare-dataset-server.onrender.com

<img width="1794" height="2123" alt="suncare1" src="https://github.com/user-attachments/assets/771edd2b-7de0-4ed5-9756-adda4e6a3ba2" />
<img width="1794" height="1585" alt="suncare_products" src="https://github.com/user-attachments/assets/356a2aa7-a2c4-461f-a9b6-e01385f5c9af" />
<img width="1794" height="1085" alt="suncare_registration" src="https://github.com/user-attachments/assets/94321259-ab54-45e5-b283-d883293cd54d" />
<img width="1794" height="1023" alt="suncare_login" src="https://github.com/user-attachments/assets/e2bbc260-ef4f-467f-baab-fe6b8e3aa64b" />


✨ Features

🛍️ Product Browsing — Browse a full catalog with filter by category and sort by price or rating
🔍 Product Details — Dedicated detail page for each product
🔐 Authentication — Email/password and Google OAuth via Better Auth
👤 User Profiles — View and update your name and avatar
🔒 Protected Routes — Profile pages redirect unauthenticated users to login
📱 Responsive Design — Mobile-friendly with a floating hamburger menu
🔔 Toast Notifications — Real-time feedback on login, register, and profile updates
🎨 Animations — Smooth entrance animations powered by Animate.css


🛠️ Tech Stack
LayerTechnologyFrameworkNext.js 15 (App Router)StylingTailwind CSS + DaisyUIAuthBetter AuthAnimationsAnimate.cssNotificationsReact Toastify v11FormsReact Hook FormIconsReact IconsFontGeist (via next/font)DataREST API (Render)

📁 Project Structure
src/
├── app/
│   ├── (auth)/
│   │   ├── login/          # Login page
│   │   ├── register/       # Registration page
│   │   └── myprofile/
│   │       ├── page.jsx    # Protected profile page
│   │       └── update/     # Update name & avatar
│   ├── (main)/
│   │   └── home/
│   │       ├── page.jsx            # Home page
│   │       ├── allproducts/        # Full product catalog
│   │       ├── productdetails/[id] # Product detail page
│   │       └── components/
│   │           ├── HeroSection.jsx
│   │           ├── PopularProducts.jsx
│   │           └── ExtraSection.jsx
│   ├── api/auth/[...all]/  # Better Auth API handler
│   ├── layout.js           # Root layout
│   └── page.js             # Redirects to /home
├── components/
│   └── shared/
│       ├── Navbar.jsx      # Responsive navbar with auth state
│       ├── Footer.jsx
│       └── ToastProvider.jsx
└── lib/
    ├── auth.js             # Better Auth server config
    └── auth-client.js      # Better Auth client config

🚀 Getting Started
Prerequisites

Node.js 18+
npm or yarn
A database supported by Better Auth (e.g. PostgreSQL, SQLite)

Installation
bash# Clone the repository
git clone https://github.com/AsifAhmedAkash/Suncart-summer-eCommerce-site.git
cd Suncart-summer-eCommerce-site

# Install dependencies
npm install
Environment Variables
Create a .env file in the root directory:
env# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Better Auth
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
DATABASE_URL=your_database_url
Run the Development Server
bashnpm run dev
Open http://localhost:3000 — it will redirect you to /home automatically.
Build for Production
bashnpm run build
npm start

🔐 Authentication Flow

Register — Email, name, optional avatar URL, password
Login — Email + password or Continue with Google
Protected pages — /myprofile and /myprofile/update redirect to /login if unauthenticated
Session — Managed client-side via useSession() from Better Auth
Sign out — Clears session and redirects to /login


🛍️ Product Catalog
Products are fetched from the hosted REST API on Render:
https://suncare-dataset-server.onrender.com/products
Each product includes: id, name, brand, price, rating, stock, description, image, category
Available categories: Accessories · Outdoor · Fashion · Electronics · Skincare · Others
Sort options: Newest · Price: Low to High · Price: High to Low · Highest Rated

🌐 Deployment
This project is deployed on Vercel.
Make sure to set all environment variables in your Vercel project dashboard under Settings → Environment Variables, especially:
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
BETTER_AUTH_URL=https://your-app.vercel.app
Better Auth requires BETTER_AUTH_URL to match your deployed origin exactly to avoid INVALID_ORIGIN errors.

📸 Pages Overview
RouteDescription/Redirects to /home/homeLanding page with hero, popular products, tips & brands/home/allproductsFull catalog with filter & sort/home/productdetails/[id]Individual product detail/loginLogin with email or Google/registerCreate a new account/myprofileView profile (protected)/myprofile/updateUpdate name & avatar (protected)

🙌 Acknowledgements

Next.js
Better Auth
DaisyUI
Animate.css
React Toastify
React Icons

Special thnx to Jhankar Mahabub bhai and his team Programming hero
