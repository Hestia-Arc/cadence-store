function OrderBox() {
  return (
    <div className="h-[730px] w-[738px] flex flex-col items-center gap-10 shadow-xl rounded-xl px-24 py-20">
      <div className=" text-center">
        <div className=" text-h6 text-gray-400">Thank you!</div>

        <div className=" mt-1 text-h4 text-[#23262F]">
          Your order has been <br /> received
        </div>
      </div>

      {/* order images */}
      <div className="h-[112px] w-full flex justify-center gap-10 bg-gray-300"> 
        <div className="h-full w-[96px] bg-gray-500"></div>
        <div className="h-full w-[96px] bg-gray-500"></div>
        <div className="h-full w-[96px] bg-gray-500"></div>

      </div>

      {/* order info */}
      <div className="h-[148px] w-full flex">
        {/* ====== label */}
        <div className=" flex-1 flex justify-end">
          <div className="h-full w-[120px] text-capS1 flex flex-col gap-5 text-gray-400">
            <div>Order code:</div>
            <div>Date:</div>
            <div>Total:</div>
            <div>Payment method:</div>
          </div>
        </div>

        {/* ====== data */}
        <div className=" flex-1">
          <div className="h-full w-fit text-capS1 text-gray-700 font-bold pl-8 flex flex-col gap-5">
            <div>#0123_45678</div>
            <div>October 19, 2023</div>
            <div>$1,345.00</div>
            <div>Credit Card</div>
          </div>
        </div>
      </div>

      {/* btn */}
      <div>
        <button className="h-[52px] w-[203px] text-btnSm bg-gray-700 rounded-3xl text-[#fff]">
          Purchase history
        </button>
      </div>
    </div>
  );
}

export default OrderBox;
