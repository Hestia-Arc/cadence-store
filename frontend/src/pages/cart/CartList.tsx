import Pdt1 from "../../assets/products/product-1.png";
import removeIcon from "../../assets/Icons/close.png";

export const CartList = () => {
  return (
    <>
      <div className="hidden sm:block w-[610px] h-[482px]">
        {/* -------- table */}
        <div className="">
          <table className="w-full">
            {/* --- head */}
            <tr className="h-[30px] text-left text-gray-400 text-capR1 font-normal border-b-[1px] border-[#e7e7e7]">
              <th className="w-[280px]">Product</th>
              <th>Quality</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>

            {/* ------- body */}
            {data.map((item, index) => (
              <tr
                key={index}
                className=" h-[120px] text-capR1 font-normal text-gray-700 border-b-[1px] border-[#e7e7e7]"
              >
                {/* item */}
                <td>
                  <div className="h-[96px] flex items-center gap-3">
                    <img
                      src={item.img}
                      alt="product"
                      className=" h-20 w-18 object-cover"
                    />

                    <div className="flex flex-col gap-[2px]">
                      <span className=" text-capS1 font-bold">{item.name}</span>
                      <span className=" text-capR2 text-gray-400 font-light">
                        Color: {item.color}
                      </span>
                      <span className=" inline-flex items-center text-capR2 text-gray-400 font-bold">
                        <img
                          src={removeIcon}
                          alt="icon"
                          className="h-[18px] w-[18px]"
                        />
                        <span> Remove</span>
                      </span>
                    </div>
                  </div>
                </td>

                {/* stepper */}
                <td>
                  <div className=" w-[72px] h-7 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
                    <span>-</span>
                    <span>2</span>
                    <span>+</span>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.subtotal}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      {/* ---------------- */}
      {/* mobile */}

      <div className=" h-[530px] bg-gray-300 sm:hidden">welcome</div>
    </>
  );
};

const data = [
  {
    id: "#3456_768",
    img: Pdt1,
    name: "Tray table",
    color: "black",
    price: "$19.00",
    subtotal: "$38.00",
  },
  {
    id: "#3456_768",
    img: Pdt1,
    name: "Tray table",
    color: "black",
    price: "$19.00",
    subtotal: "$38.00",
  },
  {
    id: "#3456_768",
    img: Pdt1,
    name: "Tray table",
    color: "black",
    price: "$19.00",
    subtotal: "$38.00",
  },
  {
    id: "#3456_768",
    img: Pdt1,
    name: "Tray table",
    color: "black",
    price: "$19.00",
    subtotal: "$38.00",
  },
];
