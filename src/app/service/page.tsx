import Image from "next/image";

function page() {
  return (
    <section className=" bg-emerald-950 px-4 sm:px-8 lg:px-20 py-10">
      <div className="ml-15 py-10">
        <div className="flex flex-col items-left justify-center font-extrabold">
          <h1 className="text-4xl "> Our Services</h1>
          <p className="text-gray-400 text-lg py-8 mr-20">
            We offer a comprehensive suite if IT services designed to help
            businesses thrive in the digital age.From custome software
            development to clousde solutions and cyber security.We got you
            covered.
          </p>
        </div>
        <div className="py-8">
          <h1 className="font-bold text-3xl">Software Development</h1>

          <div className="flex lg:flex-row  sm:flex-col mt-5">
            <div className="flex flex-col py-5">
              <Image
                src="/sd1.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl h-50"
              />
              <p className="pt-8 font-bold text-lg">
                Mobile Application Development
              </p>
              <p className="mt-5 pr-40 text-gray-400">
                Developing native and cross-platform mobile apps for iOS and
                Android optimized for performance and user experience.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/sd2.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl h-50"
              />
              <p className="pt-8 font-bold text-lg">
                Web Application Development
              </p>
              <p className="mt-5 pr-40 text-gray-400">
                Crafting responsive and interactive web applications that drive
                user engagement and business growth.
              </p>
            </div>
            <div className="flex flex-col  py-5">
              <Image
                src="/sd3.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl h-50"
              />
              <p className="pt-8 font-bold text-lg">
                Enterprise Software Solutions
              </p>
              <p className="mt-5 pr-40 text-gray-400">
                Building robust and scalable enterprise-level software to
                streamline operations and enhanced productivity.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Cloude Solutions</h1>

          <div className="flex lg:flex-row sm:flex-col">
            <div className=" flex flex-col  py-5">
              <Image
                src="/cloud1.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Cloud Migration</p>
              <p className="mt-5 pr-40 text-gray-400">
                Seamlessly migrate your applications and data to the cloud with
                minimal disruption to your business operations.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/cloud2.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Cloud Optimization</p>
              <p className="mt-5 pr-40 text-gray-400">
                Optimize your cloud resources to reduce costs and improve
                efficiency, maximizing your return on investment.
              </p>
            </div>
            <div className="flex flex-col  py-5">
              <Image
                src="/cloud3.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Cloud Management</p>
              <p className="mt-5 pr-40 text-gray-400">
                Comprehensive management of your cloud infrastructure, ensuring
                security, reliability, and optimal performance.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl">AI Applications</h1>

          <div className="flex lg:flex-row sm:flex-col ">
            <div className=" flex flex-col py-5 ">
              <Image
                src="/AI1.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Machine Learning</p>
              <p className="mt-5 pr-40 text-gray-400">
                Develop machine learning models to predict outcomes, personalize
                experiences, and automate complex tasks.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/AI2.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">
                Natural Learning Processing
              </p>
              <p className="mt-5 pr-40 text-gray-400">
                Utilize natural language processing to analyze text, understand
                sentiment, and create intelligent chatbots.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/AI3.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Computer Vision</p>
              <p className="mt-5 pr-40 text-gray-400">
                Implement computer vision solutions for image recognition,
                object detection, and visual data analysis.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Cybersecurity</h1>

          <div className="flex lg:flex-row sm:flex-col">
            <div className=" flex flex-col py-5 ">
              <Image
                src="/cyber1.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Security Assessment</p>
              <p className="mt-5 pr-40 text-gray-400">
                Identify vulnerabilities in your systems and infrastructure with
                thorough security assessments and penetration testing.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/cyber2.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Incident Response</p>
              <p className="mt-5 pr-40 text-gray-400">
                Rapid and effective response to security incidents, minimizing
                damage and restoring operations quickly.
              </p>
            </div>
            <div className="flex flex-col py-5">
              <Image
                src="/cyber3.png"
                alt="mobile"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <p className="pt-8 font-bold text-lg">Threat Detection</p>
              <p className="mt-5 pr-40  text-gray-400">
                Proactive monitoring and detection of potential threats,
                ensuring real-time protection against cyberattacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
