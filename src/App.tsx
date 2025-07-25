import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "./store";
import { motion } from "framer-motion";
import classes from "./App.module.css";
import Layout from "@layouts/layout";
import AccountPage from "@views/account/account-screen";
import { CartSideBar } from "@components/cards";
import FlyMenu from "@components/FlyMenu";
import { useFlyMenu } from "@contexts/FlyMenuContext";
import Auth from "@pages/auths/Auth";
import ContactPage from "@pages/contact";
import Home from "@pages/home";
import Product from "@pages/product/Index";
import Shop from "@pages/shop";
import BlogPage from "@views/blog";
import SinglePost from "@views/blog/SinglePost";
import CartPage from "@views/cart";
import { cartSelector } from "@views/cart/cartSlice";

const router = createBrowserRouter([
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
    path: "/auth",
    Component: Auth,
  },
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { isFlyMenu } = useFlyMenu();
  const { cart } = useAppSelector(cartSelector);

  return (
    <div
      className={`mx-auto xs:min-w-[374px] xs:max-w-[375px] lg:min-w-[1300px] lg:max-w-[1440px] overflow-x-hidden relative ${classes}`}
    >
      <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:post" element={<SinglePost />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/auth" element={<Auth />} />

      </Routes> */}

      {/* ----------------------------- */}
      {/* scroll to top */}
      {/* ----------------------------- */}
      {/* <ScrollToTop /> */}

      {/* ----------------------------- */}
      {/* cart sidebar */}
      {/* ----------------------------- */}
      <div className="flex h-[100vh] fixed top-0 right-0 items-center">
        {isOpen ? (
          ""
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="h-fit left-0 flex flex-col items-center gap-1 text-[10px] sm:text-[14px] font-semibold bg-green px-1 py-2 rounded-3xl sm:rounded-none sm:p-3"
          >
            <div className="h-5 w-5 sm:h-8 sm:w-8 flex items-center justify-center bg-white  rounded-full">
              {cart?.length}
            </div>

            {/* <Badge /> */}
            <span>C</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
          </button>
        )}
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-0.5%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 43,
            damping: 12,
            delay: 0.4,
            duration: 0.8,
          }}
          // onClick={() => setIsOpen(false)}
          className="flex fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] items-center z-[800] "
        >
          {/* <div className="flex h-[100vh] fixed top-0 right-0 items-center"> */}
          <CartSideBar open={isOpen} close={() => setIsOpen(false)} />
          {/* </div> */}
        </motion.div>
      )}

      {/* ----------------------------- */}
      {/* fly menu */}
      {/* ----------------------------- */}
      {isFlyMenu && (
        <motion.div
          initial={{ opacity: 0, x: "-0.5%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 43,
            damping: 12,
            delay: 0.4,
            duration: 0.8,
          }}
          className=" flex sm:hidden fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] items-center z-[800] "
        >
          <FlyMenu />
        </motion.div>
      )}
    </div>
  );
}

export default App;

{
  /* <div className="hidden sm:flex h-[450px] absolute top-[24rem] sm:top-0 right-[35%] sm:right-0 items-center z-[800]"> */
}
