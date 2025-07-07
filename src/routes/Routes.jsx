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
                path: "/product-detail",
                element: <ProductDetailPage />
            }
        ]
    },
]);