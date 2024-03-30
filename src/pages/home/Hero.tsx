import heroIcon from "../../assets/products/home-img.png";

export const Hero = () => {
  return (
    <section className="h-fit sm:h-[760px] md:h-[760px] lg:h-[760px]  flex flex-col gap-[32px] bg-white px-8 pb-[40px] sm:px-40">
      <div className="h-[304px] sm:h-[536px] w-full bg-gray-100">
        <img
          src={heroIcon}
          alt="icon"
          className=" xs:w-full h-[304px] sm:h-[536px]"
        />
      </div>

      {/* content */}
      <header className="min-h-[152px]  w-full flex flex-col justify-between sm:items-center gap-4 sm:gap-0 sm:flex-row">
        <div className="h-[88px] sm:h-fit ">
          <h1 className="text-h4 text-[36px] sm:text-h2 font-poppins">
            Simply Unique<span className="text-gray-400">/</span> <br /> Simply
            Better<span className="text-gray-400">.</span>
          </h1>
        </div>

        <div className=" w-full sm:w-[450px]">
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
