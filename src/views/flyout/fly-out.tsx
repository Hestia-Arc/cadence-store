import FlyMenu from '@components/FlyMenu';
import { motion } from "framer-motion";
import { useFlyMenu } from '@contexts/FlyMenuContext';

function FlyOut() {
      const { isFlyMenu } = useFlyMenu();

  return (
    <div> {isFlyMenu && (
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
      )}</div>
  )
}

export default FlyOut