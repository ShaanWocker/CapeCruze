import Image from "next/image";

const testimonials = [
  {
    img: "/images/img-1.jpg",
    name: "Ken Norman",
    handle: "@kennorman",
    quote:
      '"We booked a custom day tour to the Cape of Good Hope — amazing experience!"',
  },
  {
    img: "/images/img-2.jpg",
    name: "Liara Karian",
    handle: "@liarakarian",
    quote:
      '"Our driver was waiting with a sign at the airport — super easy and stress-free."',
  },
  {
    img: "/images/img-3.jpg",
    name: "Ricky Danial",
    handle: "@rickydanial",
    quote:
      '"Clean vehicle, friendly driver, and affordable prices. Highly recommended."',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="w-full py-[70px]">
      <div className="text-center pb-[70px]">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          What Our Clients Say
        </h2>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap justify-between">
        {testimonials.map((t) => (
          <div
            key={t.handle}
            className="basis-full md:basis-[28%] p-2.5 mb-8 rounded-lg shadow-[0_10px_20px_3px_rgba(0,150,136,0.08)] cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center my-5">
              <Image
                src={t.img}
                alt={`${t.name} profile photo`}
                width={40}
                height={40}
                className="rounded-[3px] mr-5"
              />
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  {t.name}{" "}
                  <i className="fa fa-twitter text-[#27c0ff] text-xl" aria-hidden="true" />
                </h4>
                <small className="text-[#009688]">{t.handle}</small>
              </div>
            </div>
            <p className="text-sm">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
