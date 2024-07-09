function OrderContent() {
  return (
    <div className="min-h-[191px] w-full flex flex-col gap-10  ">
      <h3 className="text-[20px] font-semibold ">Orders History</h3>

      {/* -------- table */}
      <div className="">
        <table className="w-full">
          {/* --- head */}
          <tr className="h-[30px] text-left text-gray-400 text-capR1 font-normal border-b-[1px] border-[#e7e7e7]">
            <th className="w-[220px]">Number ID</th>
            <th>Dates</th>
            <th>Status</th>
            <th>Price</th>
          </tr>

          {/* ------- body */}
          {data.map((item, index) => (
            <tr key={index} className=" h-[70px] text-capR1 font-normal text-gray-700 border-b-[1px] border-[#e7e7e7]">
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
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
