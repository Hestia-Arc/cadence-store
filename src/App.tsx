import Home from "./pages/home";
import Product from "./pages/product/Index";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="/" element={ <Home/>}/> */}
      </Routes>
    </>
  );
}

export default App;
