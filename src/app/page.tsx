import Image from "next/image";
import { Marko_One } from "next/font/google";
const markoOne = Marko_One({ subsets: ["latin"], weight: "400", variable: "--font-marko-one" });

export default function Home() {
  return (
      <div className=" text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Home.jpg')" }}>
        <div className={`${markoOne.variable} font-sans`}>
          <h1 className="text-4xl md:text-5xl size-64px font-marko-one mb-4">
            Empowering Businesses with <br /> Cutting-Edge IT Solutions.
          </h1>

          {/* Bottom-Left Button */}
          <div className="absolute bottom-6 left-6 z-10 "></div>
          <button className="absolute bottom-6 left-6 z-50 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Our Key Services */}
      <section className="px-8 py-12 bg-gray-800">
       <h2 className="text-xl font-bold mb-6">Our Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
         { url: "/cloud.png", title: "Cloud Computing", desc: "Scalable and secure cloud solutions." },
         { url: "/data.png", title: "Data Management", desc: "Efficient data storage and analysis." },
         { url: "/cyber.png", title: "CyberSecurity", desc: "Robust protection against cyber threats." },
         { url: "/consulting.png", title: "IT Consulting", desc: "Expert guidance for your IT strategy." }
         ].map((service, i) => (
        <div
        key={i}
        className="bg-teal-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
      >
        {/* Service Icon */}
        <img
          src={service.url}
          alt={service.title}
          className="w-8 h-8 mb-4"
        />

        {/* Title & Description */}
        <h3 className="font-semibold text-lg">{service.title}</h3>
        <p className="text-sm mt-2">{service.desc}</p>
         </div>
         ))}
         </div>
       </section>


      {/* Unique Selling Points */}
      <section className="px-8 py-12 bg-gray-800">
        <h2 className="text-xl font-bold mb-6">Our Unique Selling Points</h2>
        <p className="mb-8">
          We stand out in the industry with our commitment to agility, Client Satisfaction, and a proven history of success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { url: "/agile.png", title: "Agile Methodology", desc: "We adapt quickly to changing needs, ensuring timely delivery and optimal results." },
            { url: "/client.png", title: "Client-Centric Approach", desc: "Your success is our priority, we work closely with you to understand and meet your goals." },
            { url: "/record.png", title: "Proven Track Record", desc: "We have a history of delivering successful IT solutions that drive business growth." }
          ].map((point, i) => (
            <div key={i} className="bg-teal-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              
              {/* point Icon */}
              <img
                src={point.url}
                alt={point.title}
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-semibold text-lg">{point.title}</h3>
              <p className="text-sm mt-2">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
