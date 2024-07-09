import Home from "./pages/home";
import Product from "./pages/product/Index";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import BlogPage from "./pages/blog";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import AccountPage from "./pages/account";
import SinglePost from "./pages/blog/SinglePost";
import { CartSideBar } from "./components/cards";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto xs:min-w-[374px] xs:max-w-[375px] lg:min-w-[1300px] lg:max-w-[1440px] overflow-x-hidden relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:post" element={<SinglePost />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />

        {/* <Route path="/" element={ <Home/>}/> */}
      </Routes>

      {/* ----------------------------- */}
      {/* cart sidebar */}
      {/* ----------------------------- */}
      <div className="flex h-[100vh] fixed top-0 right-0 items-center">
        {isOpen ? (
          ""
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="h-fit left-0 flex sm:flex-col items-center gap-1 text-h7 bg-green px-5 py-2 rounded-3xl sm:rounded-none sm:p-4"
          >
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
          animate={{ opacity: 1, x: 0}}
          transition={{
            type: "spring",
            stiffness: 43,
            damping: 12,
            delay: 0.4,
            duration: 0.8
          }}
          onClick={() => setIsOpen(false)}
          className="hidden sm:flex absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] items-center z-[800] "
        >
          <div className="flex h-[100vh] fixed top-0 right-0 items-center">
            <CartSideBar open={isOpen} close={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;

{
  /* <div className="hidden sm:flex h-[450px] absolute top-[24rem] sm:top-0 right-[35%] sm:right-0 items-center z-[800]"> */
}
