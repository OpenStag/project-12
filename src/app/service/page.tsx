
import Image from "next/image"

function page() {
  return (
    <section className='p-20' >
        <div className='flex flex-col items-left justify-center font-extrabold'>
            <h1 className='text-4xl '> Our Services</h1>
            <p className="text-gray-400 text-2xl py-6">We offer a comprehensive suite if IT services designed to help businesses thrive in the digital age.From custome software development to clousde solutions and cyber security.We got you covered.</p>
        </div>
        <div>

            <h1 className="font-bold text-3xl">Software Development</h1>
            

         <div className="flex flex-row  items-center justify-center p-5">
            <div className=" flex flex-col items-center justify-center " >
                <Image src="/sd1.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35  p-6">Devloping native and cross-platform mobile apps for ios and Amdroid optimized for performance and user experience</p>
                

            </div>
            <div className="flex flex-col items-center justify-center p-5">
                <Image src="/sd2.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35 p-6 ">Devloping native and cross-platform mobile apps for ios and Amdroid optimized for performance and user experience</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 ">
                <Image src="/sd3.png" alt="mobile" width={300} height={300} className="rounded-2xl"/>
                <p className="pt-6">Mobile Application Development</p>
                <p className="px-35 pt-6">Devloping native and cross-platform mobile apps for ios and Amdroid optimized for performance and user experience</p>

            </div>

         </div>

        </div>
    </section>
  )
}

export default page