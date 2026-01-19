import { Button } from "@components/Elements";
import { Link } from "react-router-dom";
// import heroIcon from "../../assets/products/home-img.png";

export const Hero = () => {
  const heroSlides = [
    {
      title: "Modern Sanctuary",
      description:
        "Elevate your living space with our new minimalist collection.",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=2000",
      cta: "Shop Living",
      link: "/shop?category=living_room",
    },
    {
      title: "Elegant Dining",
      description: "Create unforgettable memories around the perfect table.",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=2000",
      cta: "Shop Dining",
      link: "/shop?category=dining_room",
    },
    {
      title: "Culinary Excellence",
      description: "A kitchen designed for both beauty and performance.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000",
      cta: "Shop Kitchen",
      link: "/shop?category=kitchen",
    },
    {
      title: "Serene Bathroom",
      description: "Turn your bathroom into a private spa retreat.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2000",
      cta: "Shop Bathroom",
      link: "/shop?category=bathroom",
    },
    {
      title: "Outdoor Living",
      description: "Transform your patio into a luxurious retreat.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2000",
      cta: "Shop Outdoor",
      link: "/shop?category=outdoor",
    },
  ];

  return (
    <section className="h-fit sm:h-[760px] md:h-[760px] lg:h-[760px]  flex flex-col gap-[32px] bg-white px-4 pb-[40px] sm:px-40">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="w-full"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative h-[80vh] min-h-[600px] w-full"
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
                <div className="max-w-2xl space-y-6">
                  <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl font-light text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 mt-4 h-14 px-8 rounded-full text-base animate-in fade-in zoom-in-95 duration-700 delay-500 fill-mode-both"
                    >
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
      {/* <div className="h-[304px] sm:h-[536px] w-full bg-gray-100">
        <img
          src={heroIcon}
          alt="icon"
          className=" xs:w-full h-[304px] sm:h-[536px]"
        />
      </div> */}

      {/* content */}
      <header className="min-h-[152px]  w-full flex flex-col justify-between sm:items-center gap-4 sm:gap-0 sm:flex-row">
        <div className="h-[88px] sm:h-fit ">
          <h1 className="text-[30px] leading-8 font-medium sm:text-h2 font-poppins">
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
