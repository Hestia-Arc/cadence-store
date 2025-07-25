import DashboardLayout from "@layouts/dashboard-layout";
import Layout from "@layouts/layout";
import MainPageNotFound from "@layouts/PageNotFound";
import Auth from "@views/auth/Auth";
import ContactPage from "@views/contact";
import Home from "@views/home";
import Product from "@views/product/Index";
import Shop from "@views/shop";
import AccountPage from "@views/account/account-screen";
import BlogPage from "@views/blog";
import SinglePost from "@views/blog/SinglePost";
import CartPage from "@views/cart";
import Orders from "@views/dashboard/orders/orders";
import Overview from "@views/dashboard/overview/overview";
import PageNotFound from "@views/dashboard/page-not-found";
import Products from "@views/dashboard/products/products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product/:productId",
        Component: Product,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/blog",
        Component: BlogPage,
      },
      {
        path: "/blog/:post",
        Component: SinglePost,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/account",
        Component: AccountPage,
      },
    ],
  },
  {
    path: "*",
    Component: MainPageNotFound,
  },
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "/dashboard/products",
        Component: Products,
      },
      {
        path: "/dashboard/orders",
        Component: Orders,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
