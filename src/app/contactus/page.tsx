import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#1a2327] text-white p-8">
      <div className="max-w-4xl mx-auto py-12">
        {/* Contact Us Form */}
        <div className="bg-[#24353c] p-8 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400 mb-6">We're here to help. Reach out to us with any questions or inquiries.</p>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#1e2a30] text-white rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-[#1e2a30] text-white rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <input type="text" placeholder="Subject" className="w-full p-3 bg-[#1e2a30] text-white rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <textarea rows="4" placeholder="Your Message" className="w-full p-3 bg-[#1e2a30] text-white rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1c8a77] text-white font-bold py-3 rounded-md hover:bg-[#156e5f] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Our Location Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          {/* MAP EMBED */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.031713180637!2d79.98561829066422!3d6.8450915117885085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2518e99e2ee8d%3A0xc3eebfdbc86273ee!2sHomagama!5e0!3m2!1sen!2slk!4v1755383062035!5m2!1sen!2slk"
              // Corrected: use camelCase for property names
              allowFullScreen
              // Corrected: use a style object with {{ }}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
