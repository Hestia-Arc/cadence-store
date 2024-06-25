function AddressContent() {
  return (
    <div className="h-[191px] w-full flex flex-col gap-[19px]  ">
      <h3 className="text-[20px] font-semibold ">Address</h3>

      {/* -------- */}
      <div className="h-[140px] flex gap-[23px]">
        <AddressItem />
        <AddressItem />
      </div>
    </div>
  );
}

export default AddressContent;

const AddressItem = () => {
  return (
    <div className=" h-[140px] flex-1 flex flex-col gap-2 rounded-lg border-solid border-2 border-[#e7e7e7]  p-4">
      <div className=" flex justify-between items-center">
        <h5 className=" text-body2Semi">Billing Address</h5>
        <span className=" text-body2Semi font-normal">Edit</span>
      </div>

      <div className=" flex flex-col gap-1 text-[14px]">
        <p className=" text-capR1">Sofia Havertz</p>

        <p>(+1) 234 567 890</p>
        <p>345 Long Island, NewYork, United States</p>
      </div>
    </div>
  );
};
