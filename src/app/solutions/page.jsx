
import React from 'react'
import Image from 'next/image'


function page() {
  return (
    <div className="bg-[#163d3d] text-white min-h-screen px-6 py-12">
        <h2 className='text-3xl font-bold'>Our Success Stories</h2>
        <p className='mt-2 text-gray-300 '>Explore how we’ve helped businesses achieve their goals through innovative IT solutions.</p>
        <h3 className='mt-10 font-semibold'>Featured Projects</h3>

        <div className='grid md:grid-cols2 gap-6 mt-6'>

            <div className='bg-[#1d4d4f]  rounded-lg flex gap-4 border'>
              <div className='flex flex-row'>
                <Image
                src="/web page 1.png"
                width={200}
                height={150}
                />
                <div className='inline-block p-4'>
                  <h4 className='font-bold text-lg inline-block'>E commerce Platform Optimization</h4>
                  <p className='font-light text-amber-50'>Revamped an online retail platform, resulting in a significant boost in user engagement and a decrease in bounce rate. Increased user engagement by 40%. and reduced bounce rate by 25%                </p>
                </div>
              </div>

            </div>
            <div className='bg-[#1d4d4f]  rounded-lg flex gap-4 border'>
              <div className='flex flex-row'>
                <Image
                src="/cloud migration 1.png"
                width={200}
                height={150}
                />
                <div className='inline-block p-4'>
                  <h4 className='font-bold text-lg'>Cloud Migration for Financial Services</h4>
                  <p className='font-light text-amber-50'>Successfully migrated a financial institution’s infrastructure to the cloud, enhancing efficiency and cutting costs. Improved system efficiency by 30% and reduced operational costs by 15%.</p>
                </div>
              </div> 
            </div>
            <div className='bg-[#1d4d4f]  rounded-lg flex gap-4 border'>
              <div className='flex flex-row'>
                <Image
                src="/cybersecurity 1.png"
                width={200}
                height={150}
                />
                <div className='p-4'>
                  <h4 className='font-bold text-lg'>Cybersecurity Enhancement for Healthcare Provider</h4>
                  <p className='font-light text-amber-50'>Implemented robust cybersecurity measures for a healthcare provider, ensuring data protection and systemreliability.Achieved a 99.9% uptime and improved data security by 50%.               </p>
                </div>
              </div>

            </div>

            
        </div>

        <h3 className='mt-10 font-semibold'>Client Testimonials</h3>
        <div className='mb-12'>
        <div className='mt-6 space-y-6'>
            <div className='flex flex-row mb-0'>
              <Image 
                src="/Ellipse 9.png"
                width={50}
                height={50}
              />
              <div className='px-5'>
                <h4 className="font-semibold">Nadun Perera
                <p className="text-400 text-sm ">2025-02-13</p>
                </h4>   
              </div>
            </div>
              <p className="text-green-400 mt-1 text-4xl mb-1">★★★★★</p>
              <p>Code Experts transformed our online store. The new platform is user-friendly and has significantly boosted our sales. Their team was professional and responsive throughout the entire process.</p>
          </div>
        </div>
        <div className='mb-12'></div>
          <div className='mt-6 space-y-6'>
            <div className='flex flex-row mb-0'>
              <Image 
                src="/Ellipse 10.png"
                width={50}
                height={50}
              />
              <div className='px-5'>
                <h4 className="font-semibold">Sahan Ratnayake
                <p className="text-400 text-sm ">2025-01-05</p>
                </h4>   
              </div>
            </div>
              <p className="text-green-400 mt-1 text-4xl mb-1">★★★★★</p>
              <p>The cloud migration was seamless, and we’ve seen a remarkable improvement in our system’s performance. Code
                  Experts expertise in cloud solutions is unmatched.</p>
          </div>
          <div className='mt-6 ml-5 text-2xl'>
            <p>See More</p>
          </div>
        

    </div>
    
  )
}

export default page