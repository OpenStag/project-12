import {HeartPulse, Wallet, GraduationCap, BriefcaseBusiness,FileText, Users, Handshake } from "lucide-react";

import React from "react";

const Page: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      {/*Title*/}
      <h2 className="text-3xl font-bold mb-2">Join Our Team</h2>
      <p className="text-gray-300 mb-10 max-w-3xl">
       Explore exciting career opportunities at Code Experts and become part of a dynamic and innovative team.
      </p>

      {/*Open Positions*/}
      <section>
        <h3 className="text-xl font-semibold mb-4">Open Position</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-[#2C4A48] text-gray-200">
              <tr>
                <th className="p-3 text-left font-semibold">Job Title</th>
                <th className="p-3 text-left font-semibold">Department</th>
                <th className="p-3 text-left font-semibold">Location</th>
                <th className="p-3 text-left font-semibold">Apply</th>
              </tr>
            </thead>
            <tbody className="bg-[#0F3534]">
              {[
                ["Software Engineer", "Engineering", "Remote"],
                ["Data Analyst", "Analytics", "Colombo"],
                ["Project Manager", "Management", "Colombo"],
                ["UI/UX Designer", "Design", "Remote"],
                ["Sales Representative", "Sales", "Colombo"],
                
              ].map(([title, dept, location], index) => (
                <tr key={index} className="border-t border-gray-700 hover:bg-[#134040]/40 transition">
                  <td className="p-4 font-medium">{title}</td>
                  <td className="p-4">{dept}</td>
                  <td className="p-4">{location}</td>
                  <td className="p-4">
                    <a
                      href="#applynowLink"
                      className="text-green-400 font-semibold hover:underline"
                    >
                      Apply Now
                    </a>
                  </td>
                </tr>
              ))}

             </tbody>
           </table>
         </div>
      </section>


      {/* Benefits */}
<section className="mt-16">
  <h3 className="text-xl font-semibold mb-6">Benefits</h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {([
      [BriefcaseBusiness, "Competitive Salary"],
      [HeartPulse, "Health & Wellness"],
      [Wallet, "Financial Benefits"],
      [GraduationCap, "Professional Development"],
    ] as [React.ElementType, string][]).map(([Icon, text], index) => (
      <div
        key={index}
        className="flex items-center gap-3 bg-[#43817C] px-4 py-3 rounded-xl border border-white-700 shadow-sm"
      >
        <Icon size={24} className="text-white" />
        <span className="font-medium">{text}</span>
      </div>
    ))}
  </div>
</section>



                {/* Application Process */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold mb-8">Application Process</h3>
          <div className="space-y-8">
            {[
              [
                <FileText key="file" className="w-8 h-8 text-white-500 mt-1" />,
                "Submit your Application",
                "Our team will review your application and qualifications.",
              ],
              [
                <Users key="users" className="w-8 h-8 text-white-500 mt-1" />,
                "Interview Process",
                "If your application is selected, you'll be invited for interviews.",
              ],
              [
                <Handshake key="check" className="w-8 h-8 text-white-500 mt-1" />,
                "Offer & Onboarding",
                "Successful candidates will receive an offer and begin onboarding.",
              ],
            ].map(([icon, title, desc], index) => (
              <div key={index} className="flex items-start gap-4">
                {icon}
                <div>
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

         
          <div className="flex justify-center mt-6">
            <a
              href="/open-positions"
              className="bg-gradient-to-r from-[#43817C] to-[#71B4AA] text-black font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition rounded-lg"
            >
              View Open Positions
            </a>
          </div>

        </section>
      </div>
  );
} 
export default Page;