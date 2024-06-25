import { motion } from "framer-motion";
// import { useCartStore } from "../../features";

export const CartSideBar = () => {
  // const cartList = useCartStore((state) => state.cart);

  return (
    <motion.div
      // whileHover={{scale: [1, 2, 1]}}
      initial={{ x: "100%" }}
      animate={{ x: "1%" }}
      transition={{ type: "spring", stiffness: 50 }}
      className="h-[450px] w-[500px]  bg-gray-400 flex flex-col gap-2 p-6"
    >
      <h4 className="text-h7">CartSideBar</h4>

      <div>
        {/* {cartList.map((product: any) => {
          const { name } = product;

          return <div>{name}</div>;
        })} */}
      </div>
    </motion.div>
  );
};
