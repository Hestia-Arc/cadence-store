import heroIcon from "../../assets/products/home-img.png";

export const Hero = () => {
  return (
    <section className="h-[760px] xs:h-fit flex flex-col gap-[32px] bg-white px-[160px] pb-[40px] xs:px-8">
      <div className="h-[536px] xs:h-[304px] w-full bg-gray-100">
        <img
          src={heroIcon}
          alt="icon"
          className="h-[536px] xs:w-full xs:h-[304px]"
        />
      </div>

      {/* content */}
      <header className="min-h-[152px]  w-full flex justify-between items-center xs:gap-4 xs:flex-col">
        <div className="xs:h-[88px] ">
          <h1 className="text-h2 xs:text-h4 xs:text-[47px] font-poppins">
            Simply Unique<span className="text-gray-400">/</span> <br /> Simply
            Better<span className="text-gray-400">.</span>
          </h1>
        </div>

        <div className="w-[450px] xs:w-full">
          <p className="text-body2Reg text-gray-400">
            <span className="text-h7 font-bold text-gray-500">leCadence</span>{" "}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </p>
        </div>
      </header>
    </section>
  );
};
