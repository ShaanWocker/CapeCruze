"use client";

import Image from "next/image";

export default function Hero() {
  const openCalendly = () => {
    window.open("https://calendly.com/shaanwocker/30min", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="banner"
      className="relative flex h-screen items-center justify-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.55), #009688), url('/images/banner.jpg') center/cover no-repeat",
      }}
    >
      {/* Logo */}
      <div className="absolute top-[4%] left-[10%]">
        <Image
          src="/images/logo.png"
          alt="Cape Cruz Tours & Transport logo"
          width={140}
          height={70}
          priority
        />
      </div>

      {/* Hero Text */}
      <div className="text-center px-4">
        <h1
          className="text-6xl md:text-[90px] font-bold leading-tight"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          Cape Cruz
        </h1>
        <p className="text-xl md:text-2xl italic mt-2 mb-10">
          Tours &amp; Transport — Cape Town&apos;s Trusted Travel Partner
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
          {/* Book Now — Calendly */}
          <button
            onClick={openCalendly}
            className="relative inline-block w-[180px] py-3 text-white border border-white overflow-hidden transition-colors duration-500 hover:text-black group cursor-pointer"
            aria-label="Book Now – opens Calendly scheduling page"
          >
            <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 group-hover:w-full -z-0" />
            <span className="relative z-10 font-semibold">Book Now</span>
          </button>

          {/* Get a Quote */}
          <a
            href="#contact"
            className="relative inline-block w-[180px] py-3 text-white border border-white overflow-hidden transition-colors duration-500 hover:text-black group"
          >
            <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 group-hover:w-full -z-0" />
            <span className="relative z-10 font-semibold">Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
