export default function Home() {
  return (
    <main className="bg-[#1f3a3d] text-white font-sans">
      {/* Hero Section */}
      <section
   className="relative flex flex-col items-center justify-center 
             h-[450px] w-[900px] mx-auto rounded-2xl 
             bg-cover bg-center text-center px-6 backdrop-blur-md 
               border border-transparent shadow-[0_0_20px_rgba(0,0,0,1npm )]"
  style={{
    backgroundImage: "url('/background.jpg')",
  }}
>
  <h1 className="text-3xl md:text-4xl font-bold max-w-3xl leading-snug text-white">
    Empowering Businesses Through Innovative Technology.
  </h1>
  <p className="mt-3 text-sm md:text-base max-w-2xl text-white">
    At Code Experts, we are dedicated to transforming businesses with cutting-edge IT
    Solutions. Our mission is to provide exceptional service and support, ensuring our
    clients achieve their strategic goals.
  </p>
  <button className="mt-5 bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-md font-semibold">
    Learn More
  </button>
</section>

      {/* Team Section */}
      <section className="py-10 text-center">
        <h2 className="text-lg font-bold mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-20">
          {[
            { name: "David Perera", role: "CEO", img: "/boy-1.jpg" },
            { name: "Sara Fernando", role: "CTO", img: "/girl-1.jpg" },
            { name: "Wasana Samarasignhe", role: "Head of Operations", img: "/girl-2.jpg" },
            { name: "Ayesh Deshan", role: "Lead Developer", img: "/boy-2.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-white"
              />
              <p className="mt-3 font-semibold">{member.name}</p>
              <p className="text-sm opacity-80">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10 text-center">
        <h2 className="text-lg font-bold mb-6">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {[
            { title: "Client Satisfaction", value: "98%" },
            { title: "Projects completed", value: "250+" },
            { title: "Years in Business", value: "10+" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-teal-400 text-[#1f3a3d] rounded-md px-6 py-4 w-60 font-semibold shadow-lg"
            >
              <p className="text-xl">{item.title}</p>
              <p className="text-2xl mt-1">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm max-w-3xl mx-auto opacity-80">
          We are proud of our track record to success and the positive impact we have made on our
          clients’ businesses. Our commitment to excellence drives us to continuously innovate and
          deliver exceptional results.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center">
        <h2 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <button className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </section>
    </main>
  );
}
