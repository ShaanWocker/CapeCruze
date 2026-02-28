import Image from "next/image";

const services = [
  {
    img: "/images/pic-1.jpg",
    title: "Cape Town Airport Transfers",
    desc: "Timely pickups and drop-offs to and from Cape Town International Airport — 24/7.",
  },
  {
    img: "/images/pic-2.jpg",
    title: "Custom Tours Around Cape Town",
    desc: "Visit Table Mountain, the V&A Waterfront, or the Cape Winelands in the comfort of our shuttle.",
  },
  {
    img: "/images/pic-3.jpg",
    title: "Hotel Transfers",
    desc: "We provide seamless transfers to your hotel or guesthouse — no stress, no wait.",
  },
  {
    img: "/images/pic-4.jpg",
    title: "Group & Family Trips",
    desc: "Need space for up to 10 passengers? Our mini-bus is ideal for family vacations and tour groups.",
  },
];

export default function Services() {
  return (
    <section id="service" className="w-full py-[70px] bg-[#efefef]">
      <div className="text-center pb-[70px]">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Reliable Transport <br /> Wherever You Go
        </h2>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap justify-around">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative basis-full md:basis-[48%] mb-5 rounded-lg text-white overflow-hidden group"
          >
            <Image
              src={s.img}
              alt={s.title}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/50 to-[#009688] opacity-0 group-hover:opacity-100 transition-opacity duration-700 cursor-pointer" />
            {/* Description */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] opacity-0 group-hover:opacity-100 group-hover:bottom-[40%] transition-all duration-700 text-center">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <hr className="my-4 mx-auto w-[60%] border-0 bg-white h-0.5" />
              <p className="text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
