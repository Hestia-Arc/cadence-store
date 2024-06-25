function Title() {
  return (
    <div className="h-[340px] flex flex-col gap-10 ">
      {/* 1 */}
      <div className="h-[24px] w-[147px] flex gap-4">
        <span>Home</span>

        <span>Contact Us</span>
      </div>

      {/* 2 */}
      <h2 className="w-[834px] text-h3">
        We believe in sustainable <br /> decor. We’re passionate about life at
        home.
      </h2>

      {/* 3 */}
      <p className="w-[834px] text-body2Reg">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
    </div>
  );
}

export default Title;
