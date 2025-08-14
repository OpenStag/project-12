
import Image from "next/image"

function page() {
  return (
    <section className='p-20 bg-cyan-800' >
        <div className='flex flex-col items-left justify-center font-extrabold'>
            <h1 className='text-4xl '> Our Services</h1>
            <p className="text-gray-400 text-2xl py-6">We offer a comprehensive suite if IT services designed to help businesses thrive in the digital age.From custome software development to clousde solutions and cyber security.We got you covered.</p>
        </div>
        <div>

            <h1 className="font-bold text-3xl">Software Development</h1>
            

         <div className="flex flex-row  items-center justify-center p-5">
            <div className=" flex flex-col items-center justify-center " >
                <Image src="/sd1.png" alt="mobile" width={300} height={300} className="rounded-2xl h-50"/>
                
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35  p-6">Devloping native and cross-platform mobile apps for ios and Amdroid optimized for performance and user experience</p>
                

            </div>
            <div className="flex flex-col items-center justify-center p-5">
                <Image src="/sd2.png" alt="mobile" width={300} height={300} className="rounded-2xl h-50"/>
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35 p-6 ">Crafting responsive and interactive web applications that drive user engagment and business growth.</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 ">
                <Image src="/sd3.png" alt="mobile" width={300} height={300} className="rounded-2xl h-50"/>
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35 pt-6">Building robust and scalable enterprise-level software to stemaline operations and enhance productivity.</p>

            </div>

         </div>
         

        </div>
        <div>
            <h1 className="font-bold text-3xl">Cloude Solutions</h1>

        <div className="flex flex-row  items-center justify-center p-5">
                <div className=" flex flex-col items-center justify-center " >
                 <Image src="/cloud1.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>                
                 <p className="pt-6">Cloud Migration</p>
                 <p className="px-35  p-6">Seamlessly migrate your applications and data to the cloud with minimal disruption to your business operations.</p>
                

            </div>
                <div className="flex flex-col items-center justify-center p-5">
                 <Image src="/cloud2.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Cloud Optimization</p>
                 <p className="px-35 p-6 ">Optimize your cloud resources to reduce costs and improve efficiency, maximizing your return on investment.</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 ">
                 <Image src="/cloud3.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Cloud Management</p>
                 <p className="px-35 pt-6">Comprehensive management of your cloud infrastructure, ensuring security, reliability, and optimal performance.</p>

            </div>

         </div>
         </div>
         <div>
            <h1 className="font-bold text-3xl">AI Applications</h1>

        <div className="flex flex-row  items-center justify-center p-5">
                <div className=" flex flex-col items-center justify-center " >
                 <Image src="/AI1.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>                
                 <p className="pt-6">Machine Learning</p>
                 <p className="px-35  p-6">Develop machine learning  models to predict outcomes, personalize experiences, and automate complex tasks.</p>
                

            </div>
                <div className="flex flex-col items-center justify-center p-5">
                 <Image src="/AI2.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Natural Learning Processing</p>
                 <p className="px-35 p-6 ">Utilize natural language processing to analyze text, understand  sentiment, and create intelligent chatbots.</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 ">
                 <Image src="/AI3.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Computer Vision</p>
                 <p className="px-35 pt-6">Implement computer vision solutions for image recognition, object detection, and visual data analysis.</p>

            </div>

         </div>
         </div>
         <div>
            <h1 className="font-bold text-3xl">Cybersecurity</h1>

        <div className="flex flex-row  items-center justify-center p-5">
                <div className=" flex flex-col items-center justify-center " >
                 <Image src="/cyber1.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>                
                 <p className="pt-6">Security Assessment</p>
                 <p className="px-35  p-6">Identify vulnerabilities in your systems and infrastructure with thorough security assessments and penetration testing.</p>
                

            </div>
                <div className="flex flex-col items-center justify-center p-5">
                 <Image src="/cyber2.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Incident Response</p>
                 <p className="px-35 p-6 ">Rapid and effective response to security incidents, minimizing damage and restoring operations quickly.</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 ">
                 <Image src="/cyber3.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                 <p className="pt-6">Threat Detection</p>
                 <p className="px-35 pt-6">Proactive monitoring and detection of potential threats, ensuring real-time protection against cyberattacks.</p>

            </div>

         </div>
         </div>
    </section>
  )
}

export default page