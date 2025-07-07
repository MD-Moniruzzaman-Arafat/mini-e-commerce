import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: '/product-detail',
        element: <ProductDetailPage />
    }
]);