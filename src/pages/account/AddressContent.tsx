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
    <div className=" h-[140px] w-[340px] flex flex-col gap-2 rounded-lg border p-4">
      <h5>Billing Address</h5>

      <div className="text-[14px]">
        <p>Sofia Havertz</p>

        <p>(+1) 234 567 890</p>
        <p>345 Long Island, NewYork, United States</p>
      </div>
    </div>
  );
};
