import {lazy} from 'react'
import PaymentPage from "../pages/PaymentPage";

const LoginPage = lazy(() => import("../pages/Login"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const BestSellingPage = lazy(() => import("../pages/BestSellingPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const OrderSuccessPage = lazy(() => import("../pages/OrderSuccessPage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ShopCreatePage = lazy(() => import("../pages/ShopCreate"));
const ShopLoginPage = lazy(() => import("../pages/ShopLoginPage"));
const OrderDetailsPage = lazy(() => import("../pages/OrderDetailsPage"));
const TrackOrderPage = lazy(() => import("../pages/TrackOrderPage"));
const UserInbox = lazy(() => import("../pages/UserInbox.jsx"));

export { 
    LoginPage,
    SignupPage,
    HomePage,
    ProductsPage,
    BestSellingPage,
    FAQPage,
    CheckoutPage,
    PaymentPage,
    OrderSuccessPage,
    ProductDetailsPage,
    ProfilePage,
    ShopCreatePage,
    ShopLoginPage,
    OrderDetailsPage,
    TrackOrderPage,
    UserInbox
};