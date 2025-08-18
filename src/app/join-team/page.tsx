import React from "react";

const Page: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/*Title*/}
      <h2 className="text-3xl font-bold mb-2">Join Our Team</h2>
      <p className="text-gray-300 mb-8">
       Explore exciting career opportunities at Code Experts and become part of
        a dynamic and innovative team.
      </p>

      {/*Open Positions*/}
      <section>
        <h3 className="text-xl font-semibold mb-4">Open Position</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-[#134040] text-gray-200">
              <tr>
                <th className="p-3 text-left">Job Title</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Apply</th>
              </tr>
            </thead>
            <tbody className="bg-[#0F3534]">
              {[
                ["Software Engineer", "Engineering", "Remote"],
                ["Product Manager", "Product", "Remote"],
                ["UI/UX Designer", "Design", "Remote"],
                ["Data Scientist", "Data", "Remote"],
                ["DevOps Engineer", "Engineering", "Remote"],
                ["Marketing Specialist", "Marketing", "Remote"],
                ["Sales Executive", "Sales", "Remote"],
                
              ].map(([title, dept, location], index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="p-3">{title}</td>
                  <td className="p-3">{dept}</td>
                  <td className="p-3">{location}</td>
                  <td className="p-3">
                    <a
                      href="#"
                      className="text-green-500 hover:underline"
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

     
    </div>
  );
} 
export default Page;