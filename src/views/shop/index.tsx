import { Header } from "./Header";
import Products from "./products";

function Shop() {
  return (
    <div className=" bg-white text-gray-700">
      <div className=" px-4 sm:px-40">
        <Header />
        <Products />
      </div>
    </div>
  );
}

export default Shop;
