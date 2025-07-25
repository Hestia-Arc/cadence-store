import { Header } from "./Header";
import Products from "./products";

function Shop() {
  // const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  // const toggleCartBar = () => {
  //   setIsCartBarOpen(!isCartBarOpen);
  // };

  return (
    <div className=" bg-white text-gray-700">
      {/* <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} /> */}
      <div className=" px-4 sm:px-40">
        <Header />
        <Products />
      </div>
    </div>
  );
}

export default Shop;
