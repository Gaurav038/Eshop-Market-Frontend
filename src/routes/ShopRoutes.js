import {lazy} from 'react'

const ShopDashboardPage = lazy(() => import("../pages/Shop/ShopDashboardPage"));
const ShopCreateProduct = lazy(() => import("../pages/Shop/ShopCreateProduct"));
const ShopAllProducts = lazy(() => import("../pages/Shop/ShopAllProducts"));
const ShopAllCoupouns = lazy(() => import("../pages/Shop/ShopAllCoupouns"));
const ShopPreviewPage = lazy(() => import("../pages/Shop/ShopPreviewPage"));
const ShopAllOrders = lazy(() => import("../pages/Shop/ShopAllOrders"));
const ShopOrderDetails = lazy(() => import("../pages/Shop/ShopOrderDetails"));
const ShopSettingsPage = lazy(() => import("../pages/Shop/ShopSettingsPage"));
const ShopInboxPage = lazy(() => import("../pages/Shop/ShopInboxPage"));

export {
    ShopDashboardPage,
    ShopCreateProduct,
    ShopAllProducts,
    ShopAllCoupouns,
    ShopPreviewPage,
    ShopAllOrders,
    ShopOrderDetails,
    ShopSettingsPage,
    ShopInboxPage
}