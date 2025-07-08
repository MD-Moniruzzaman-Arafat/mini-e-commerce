# 🛍️ Mini E-Commerce SPA

This is a responsive and interactive **Single Page Application (SPA)** built using **React.js**. It serves as a mini e-commerce platform where users can view products, explore product details, manage a shopping cart, and simulate a checkout — all without user authentication.

---

## ✨ Features

- 🏠 **Home Page**
  - Grid view of at least 20 dummy products
  - Product cards include image, name, price, and "Add to Cart" button
  - Each card is clickable to navigate to a detailed view

- 📄 **Product Detail Page**
  - Shows full details of the selected product
  - Includes image, title, description, and price
  - "Add to Cart" functionality

- 🛒 **Cart Sidebar**
  - Slide-in sidebar from the side
  - Displays selected items with quantity controls (increase/decrease)
  - Shows subtotal/total and includes a "Checkout" button

- 💳 **Checkout Modal**
  - A popup modal with a form: Name, Email, Address
  - Simulates order submission (no API/backend)

- ⏳ **Loading State**
  - Shows a loader while simulating data fetching with a 2-second delay

- 🎨 **Responsive Design**
  - Fully mobile-friendly and responsive UI using Tailwind CSS + DaisyUI

---

## ⚙️ Tech Stack

- **React.js** (SPA Architecture)
- **React Router** (Page navigation)
- **Context API** (Cart state management)
- **Tailwind CSS** + **DaisyUI** (Modern UI styling)
- **Local JSON file** for product data
- **Hosted on Netlify/Vercel**

---

## 🚀 Live Demo

🔗 [Click here to visit the live site](https://endearing-belekoy-45347c.netlify.app/)

---

## 💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/MD-Moniruzzaman-Arafat/mini-e-commerce

# Navigate to the project directory
cd mini-e-commerce

# Install dependencies
npm install

# Start the development server
npm run dev

