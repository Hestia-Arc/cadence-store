import Home from "./pages/home";
import Product from "./pages/product/Index";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import BlogPage from "./pages/blog";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";

function App() {
  return (
    <div className="mx-auto xs:min-w-[374px] xs:max-w-[375px] lg:min-w-[1300px] lg:max-w-[1440px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cart" element={<CartPage />} />

        {/* <Route path="/" element={ <Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
