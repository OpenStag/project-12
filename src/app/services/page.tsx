
import Image from "next/image"

function page() {
  return (
    <section className='p-20'>
        <div className='flex flex-col items-left justify-center font-bold'>
            <h1 className='text-2xl '> Our Services</h1>
            <p>We offer a comprehensive suite if IT services designed to help businesses thrive in the digital age.From custome software development to clousde solutions and cyber security.We got you covered.</p>
        </div>
        <div>
            <h1>Software Development</h1>
         <div className="flex flex-row ">
            <div className="" >
                <Image src="/sd1.png" alt="mobile" width={190} height={150}/>

            </div>
            <div>
                <Image src="/sd2.png" alt="mobile" width={250} height={250}/>

            </div>
            <div>
                <Image src="/sd3.png" alt="mobile" width={170} height={150}/>

            </div>

         </div>

        </div>
    </section>
  )
}

export default page