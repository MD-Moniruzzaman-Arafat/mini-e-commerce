import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import MainLayout from "../layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/product-detail/:id",
                loader: async ({ params }) => {
                    const res = await fetch('/products.json');
                    const products = await res.json();
                    const product = products.find(p => p.id === parseInt(params.id));
                    if (!product) throw new Response("Not Found", { status: 404 });
                    return product;
                },
                element: <ProductDetailPage />
            }
        ]
    },
]);