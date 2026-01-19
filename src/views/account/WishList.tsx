import { ButtonPrimary } from "../../components/Elements";
import removeIcon from "../../assets/Icons/close.png";
import Pdt1 from "../../assets/products/product-1.png";
import { useAppSelector } from "../../store";
import { userSelector } from "../user/userSlice";


function WishList() {
  const { wishList } = useAppSelector(userSelector);

  return (
    <div className="min-h-[191px] w-full flex flex-col gap-10  ">
      <h3 className="text-[20px] font-semibold ">Your Wishlist</h3>

      {/* -------- table */}
      <div className="">
        <table className="w-full">
          {/* --- head */}
          <tr className="h-[30px] text-left text-gray-400 text-capR1 font-normal border-b border-[#e7e7e7]">
            <th className="w-[213px]">Product</th>
            <th className="w-[130px]">Price</th>
            <th className="w-[120px]">Action</th>
          </tr>

          {/* ------- body */}
          {wishList?.map((item) => (
            <tr key={item.id} className=" h-[120px] text-capR1 font-normal text-gray-700 border-b border-[#e7e7e7]">
              <td>
                <div className="h-[72px] w-[213px] flex items-center gap-[10px]">
                  <div className="h-full w-[24px] flex items-center">
                    <img src={removeIcon} alt="icon" />
                  </div>

                  {/* --- image */}
                  <div className="h-full w-[60px] bg-gray-200">
                  <img src={Pdt1} alt="icon" />

                  </div>


                  {/* ------ details */}
                  <div className="h-[50px] w-[117px] flex flex-col gap-2">
                    <div className=" text-capS1 text-gray-700">{item.tag}</div>
                    <div className=" text-gray-400 text-capR2">Color: {item.color}</div>

                  </div>

                </div>
              </td>
              <td>{item.price}</td>
              <td><ButtonPrimary text="Add to cart" style="w-[130px] "/></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default WishList


// const data = [
//   {
//     id: "#3456_768",
//     name: "Table",
//     img: "October 17, 2023",
//     color: "Black",
//     price: "$119.00",
//   },
//   {
//     id: "#3456_768",
//     name: "Table",
//     img: "October 17, 2023",
//     color: "Beige",
//     price: "$119.00",
//   },
//   {
//     id: "#3456_768",
//     name: "Table",
//     img: "October 17, 2023",
//     color: "Red",
//     price: "$119.00",
//   },
//   {
//     id: "#3456_768",
//     name: "Table",
//     img: "October 17, 2023",
//     color: "Beige",
//     price: "$119.00",
//   },
// ];