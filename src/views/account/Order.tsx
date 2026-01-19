function OrderContent() {
  return (
    <div className="min-h-[191px] w-full flex flex-col gap-10  ">
      <h3 className="text-[20px] font-semibold">Orders History</h3>

      {/* -------- table */}
      <div className="">
        <table className="w-full hidden sm:block">
          {/* --- head */}
          <tr className="h-[30px] text-left text-gray-400 text-capR1 font-normal border-b border-[#e7e7e7]">
            <th className="w-[220px]">Number ID</th>
            <th>Dates</th>
            <th>Status</th>
            <th>Price</th>
          </tr>

          {/* ------- body */}
          {data.map((item, index) => (
            <tr
              key={index}
              className=" h-[70px] text-capR1 font-normal text-gray-700 border-b border-[#e7e7e7]"
            >
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>

        {data.map((item, i) => (
          <div
            key={i}
            className=" h-[168px] w-full flex sm:hidden justify-between py-4 border-b-2 border-gray-300 "
          >
            <div className=" flex flex-col gap-2 text-gray-400">
              <div>Number ID</div>
              <div>Dates</div>
              <div>Status</div>
              <div>Price</div>
            </div>

            <div className=" flex flex-col gap-2 text-gray-600 font-semibold ">
              <div>{item.id}</div>
              <div>{item.date}</div>
              <div>{item.status}</div>
              <div>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderContent;

const data = [
  {
    id: "#3456_768",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$1234.00",
  },
  {
    id: "#3456_980",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$1234.00",
  },
  {
    id: "#3456_120",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$1234.00",
  },
  {
    id: "#3456_030",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$1234.00",
  },
];
