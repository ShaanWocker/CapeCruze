import Image from "next/image";

const features = [
  {
    icon: "fa fa-shield",
    title: "Professional Drivers",
    description:
      "Our experienced drivers are fully licensed, local experts, committed to your safety and comfort.",
  },
  {
    icon: "fa fa-check-square-o",
    title: "Easy Online Booking",
    description:
      "Book your trip in just a few clicks. No hidden fees, no hassles — just reliable transport.",
  },
  {
    icon: "fa fa-money",
    title: "Budget-Friendly Rates",
    description:
      "Our competitive rates make it easy to explore Cape Town without breaking the bank.",
  },
];

export default function Features() {
  return (
    <section id="feature" className="w-full py-[70px]">
      <div className="text-center pb-[70px]">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Why Travel With Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Your Comfort <br /> Our Commitment
        </h2>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap items-center text-center">
        {/* Feature list */}
        <div className="basis-full md:basis-1/2">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-left mb-2.5 font-light text-[#009688] text-2xl">
                {f.title}
              </h3>
              <div className="flex items-center mb-10">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg border border-[#009688] text-[#009688] text-3xl shrink-0">
                  <i className={f.icon} aria-hidden="true" />
                </div>
                <p className="px-5 text-left">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature image */}
        <div className="basis-full md:basis-1/2 mx-auto">
          <Image
            src="/images/barber-man.jpg"
            alt="Professional Cape Cruz driver"
            width={600}
            height={450}
            className="w-full md:w-[70%] rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
