import Image from "next/image";

export default function Footer() {
  return (
    <section id="footer" className="pt-[100px] pb-5 bg-[#efefef] relative">
      {/* Decorative background image */}
      <Image
        src="/images/footer-img.png"
        alt=""
        aria-hidden="true"
        width={370}
        height={280}
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 opacity-10 max-w-[370px]"
      />

      <div className="text-center pb-12">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Speak To Us</h2>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap justify-between">
        {/* Opening Hours */}
        <div className="basis-full md:basis-[45%] p-2.5 mb-5">
          <h3 className="text-2xl font-semibold my-2.5">Opening Hours</h3>
          <p className="leading-[35px]">
            <i className="fa fa-clock-o text-[#009688] text-xl mx-2.5" aria-hidden="true" />
            Monday – Friday: 5 am – 10 pm
          </p>
          <p className="leading-[35px]">
            <i className="fa fa-clock-o text-[#009688] text-xl mx-2.5" aria-hidden="true" />
            Saturday &amp; Sunday: 6 am – 10 pm
          </p>
        </div>

        {/* Get In Touch */}
        <div className="basis-full md:basis-[45%] p-2.5 mb-5 text-right">
          <h3 className="text-2xl font-semibold my-2.5">Get In Touch</h3>
          <p className="leading-[35px]">
            Durbanville, Cape Town
            <i className="fa fa-map-marker text-[#009688] text-xl mx-2.5" aria-hidden="true" />
          </p>
          <p className="leading-[35px]">
            <a
              href="mailto:ShaanWocker@gmail.com"
              className="hover:text-[#009688] transition-colors"
            >
              ShaanWocker@gmail.com
            </a>
            <i className="fa fa-paper-plane text-[#009688] text-xl mx-2.5" aria-hidden="true" />
          </p>
          <p className="leading-[35px]">
            <a
              href="https://calendly.com/shaanwocker/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009688] hover:underline"
            >
              Book via Calendly
            </a>
            <i className="fa fa-calendar text-[#009688] text-xl mx-2.5" aria-hidden="true" />
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center">
        {/* Social links – update URLs once social profiles are created */}
        <span
          aria-label="Cape Cruz on Facebook (coming soon)"
          className="inline-block h-10 w-10 leading-10 border border-[#009688] mx-1 text-[#009688] text-xl hover:bg-[#009688] hover:text-white hover:-translate-y-2 transition-all duration-500 mt-10 cursor-default opacity-60"
          title="Facebook – coming soon"
        >
          <i className="fa fa-facebook" aria-hidden="true" />
        </span>
        <span
          aria-label="Cape Cruz on Instagram (coming soon)"
          className="inline-block h-10 w-10 leading-10 border border-[#009688] mx-1 text-[#009688] text-xl hover:bg-[#009688] hover:text-white hover:-translate-y-2 transition-all duration-500 mt-10 cursor-default opacity-60"
          title="Instagram – coming soon"
        >
          <i className="fa fa-instagram" aria-hidden="true" />
        </span>
        <span
          aria-label="Cape Cruz on Twitter (coming soon)"
          className="inline-block h-10 w-10 leading-10 border border-[#009688] mx-1 text-[#009688] text-xl hover:bg-[#009688] hover:text-white hover:-translate-y-2 transition-all duration-500 mt-10 cursor-default opacity-60"
          title="Twitter – coming soon"
        >
          <i className="fa fa-twitter" aria-hidden="true" />
        </span>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cape Cruz on YouTube"
          className="inline-block h-10 w-10 leading-10 border border-[#009688] mx-1 text-[#009688] text-xl hover:bg-[#009688] hover:text-white hover:-translate-y-2 transition-all duration-500 mt-10"
        >
          <i className="fa fa-youtube-play" aria-hidden="true" />
        </a>
        <p className="text-xs mt-5">
          &copy; {new Date().getFullYear()} Cape Cruz Tours &amp; Transport. All
          rights reserved.
        </p>
      </div>
    </section>
  );
}
