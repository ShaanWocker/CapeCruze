"use client";

export default function CalendlyEmbed() {
  return (
    <section id="booking" className="py-20 bg-white text-center">
      <div className="text-center pb-12">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Book Now
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Reserve Your Ride
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto px-4">
          Choose a time that suits you. Our team will confirm your booking and
          share all the details.
        </p>
      </div>

      <div
        className="w-[90%] max-w-[900px] mx-auto border border-gray-200 rounded-xl overflow-hidden"
        style={{ height: "700px" }}
      >
        <iframe
          src="https://calendly.com/shaanwocker/30min"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book a ride with Cape Cruz Tours & Transport"
          allow="payment"
        />
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Prefer to book via link?{" "}
        <a
          href="https://calendly.com/shaanwocker/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#009688] underline hover:text-[#00766c]"
        >
          Open Calendly
        </a>
      </p>
    </section>
  );
}
