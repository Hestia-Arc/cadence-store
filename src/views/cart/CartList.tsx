// import Pdt1 from "../../assets/products/product-1.png";
import removeIcon from "../../assets/Icons/close.png";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartSelector, removeItems } from "./cartSlice";
import { Stepper } from "../../components/Elements";

export const CartList = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(cartSelector);

  return (
    <>
      <div className="hidden sm:block w-[610px] h-[482px]">
        {/* -------- table */}
        <div className="h-full overflow-auto pr-2">
          <table className="w-full relative  ">
            {/* --- head */}
            <thead>
            <tr className="h-[30px] text-left text-gray-400 text-capR1 font-normal border-b-[1px] border-[#e7e7e7]">
              <th className="w-[280px]">Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
            </thead>

            {/* ------- body */}
            {cart?.length !== 0 ? (
              cart?.map((item, index) => (
                <tr
                  key={index}
                  className=" h-[120px] text-capR1 font-normal text-gray-700 border-b-[1px] border-[#e7e7e7]"
                >
                  {/* item */}
                  <td>
                    <div className="h-[96px] flex items-center gap-3">
                      <div className=" h-20 w-[68px] ">
                        {item?.image && (
                          <img
                            src={item.image}
                            alt="product"
                            className=" h-full w-full rounded-[5px] object-cover"
                          />
                        )}

                        {!item?.image && (
                          <div className="h-20 w-18 flex items-center justify-center bg-gray-300  bg-opacity-70 text-gray-400  text-opacity-40 rounded-[5px] text-[12px] font-bold">
                            <div className="flex items-center justify-center text-center h-full w-full ">
                              No <br /> Image
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-[2px]">
                        <span className=" text-capS1 font-bold capitalize">
                          {item.productName?.length > 18
                            ? `${item.productName?.slice(0, 15)}...`
                            : item.productName}
                        </span>
                        <span className=" text-capR2 capitalize text-gray-400 font-light">
                          Color: {item.color}
                        </span>
                        <button className=" inline-flex items-center text-capR2 text-gray-400 font-bold">
                          <img
                            src={removeIcon}
                            alt="icon"
                            className="h-[18px] w-[18px]"
                          />
                          <span
                            className="text-[12px]"
                            onClick={() => dispatch(removeItems(item))}
                          >
                            {" "}
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* stepper */}
                  <td>
                    <div className=" w-[72px] h-7 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
                      <Stepper item={item} />
                    </div>
                  </td>
                  <td>${item.price * item.piece}.00</td>
                  <td>${item.price}.00</td>
                </tr>
              ))
            ) : (
              <div className="absolute top-8 left-0 right-0 h-[300px] w-full italic bg-gray-200 rounded text-gray-400 flex justify-center items-center">
                {" "}
                Cart is empty.{" "}
              </div>
            )}
          </table>
        </div>
      </div>

      {/* ---------------- */}
      {/* mobile */}

      <div className=" max-h-[530px] sm:hidden">
        <div className="flex justify-between items-center border-b-2 pb-2 border-gray-400">
          <h6 className=" text-[16px] font-semibold">Product(s) </h6>
          <div className=" text-h7">({cart?.length})</div>
        </div>

        {/*  */}
        <div
          className={`h-[90%] overflow-y-auto flex flex-col gap-[10px] mt-3 ${
            cart?.length !== 0 && "pr-2"
          } `}
        >
          {/* {Array(2)
                    .fill(9)
                    ?.map((_, i) => ( */}
          {cart?.length !== 0 ? (
            cart?.map((item) => (
              <div
                key={item.id}
                className="w-full h-[144px] flex py-3 border-solid border-b-2 "
              >
                {/* product/remove btn  */}
                <div className=" w-[75%] flex gap-4 ">
                  <img
                    // src={Pdt1}
                    src={item?.image}
                    alt="product"
                    className=" h-24 w-20 object-cover"
                  />

                  <div className="flex flex-col gap-2">
                    <span className=" text-capS1 font-bold capitalize">
                      {item.productName?.length > 18
                        ? `${item.productName?.slice(0, 15)}...`
                        : item.productName}
                    </span>
                    <span className=" text-capR2 text-gray-400 font-light">
                      Color: {item?.color && Array.isArray(item?.color) ? item?.color?.map((itemColor) => itemColor) : ""}
                    </span>
                    <div className=" w-[72px] h-6 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
                      <Stepper item={item} />
                    </div>
                  </div>
                </div>

                {/* price/stepper/subtotal */}
                <div className="w-[25%] flex flex-col items-end gap-2">
                  {/* subtotal */}
                  <span className="  text-body2Semi font-bold">
                    ${item.price}.00
                  </span>
                  <button
                    onClick={() => dispatch(removeItems(item))}
                    className=" inline-flex items-center text-capR2 text-gray-400 font-bold"
                  >
                    <img
                      src={removeIcon}
                      alt="icon"
                      className="h-[18px] w-[18px]"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-[530px] w-full italic bg-gray-200 rounded text-gray-400 flex justify-center items-center">
              {" "}
              Cart is empty.{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// const data = [
//   {
//     id: "#3456_768",
//     img: Pdt1,
//     name: "Tray table",
//     color: "black",
//     price: "$19.00",
//     subtotal: "$38.00",
//   },
//   {
//     id: "#3456_768",
//     img: Pdt1,
//     name: "Tray table",
//     color: "black",
//     price: "$19.00",
//     subtotal: "$38.00",
//   },
//   {
//     id: "#3456_768",
//     img: Pdt1,
//     name: "Tray table",
//     color: "black",
//     price: "$19.00",
//     subtotal: "$38.00",
//   },
//   {
//     id: "#3456_768",
//     img: Pdt1,
//     name: "Tray table",
//     color: "black",
//     price: "$19.00",
//     subtotal: "$38.00",
//   },
// ];
