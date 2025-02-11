import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="font-sans bg-[#578FCA]">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584535508174-a20c98bc9a91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-5 py-10">
        <h2 className="text-4xl font-bold text-center">We’re Here to Help You in Your Journey</h2>
        <p className="text-center text-gray-600 mt-3">
          Have questions or need assistance? I'm here to help you.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Contact Details */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Reach Out to Us</h3>
            <div className="mt-4 space-y-3">
              <p className="flex items-center gap-3">
                📞 <strong>Call Us:</strong> (+91) 7898194031
              </p>
              <p className="flex items-center gap-3">
                ✉️ <strong>Email:</strong> svpandey398@gmail.com
              </p>
              <p className="flex items-center gap-3">
                📍 <strong>Location:</strong> Phagwara, Punjab, India
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-10">
            <h3 className="text-2xl font-bold">Social Media</h3>
            </div>
            <div className="flex gap-4 mt-10">
              
              <a href="https://www.linkedin.com/in/sarveshkpandey/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://twitter.com/yatrilive" 
                 target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/yatrilive/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Let’s Get in Touch</h3>
            <form className="mt-5 space-y-4">
              <input type="text" placeholder="Your Name *" 
                     className="w-full p-3 border border-gray-300 rounded-lg" required />
              <input type="email" placeholder="Your Email *" 
                     className="w-full p-3 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Your Phone *" 
                     className="w-full p-3 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Destination *" 
                     className="w-full p-3 border border-gray-300 rounded-lg" required />
              <textarea placeholder="Additional Requests" rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
              <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">What services do we offer?</summary>
              <p className="mt-2 text-gray-600">We provide consulting, technology solutions, and marketing strategies for travel businesses.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">Can you help with marketing?</summary>
              <p className="mt-2 text-gray-600">Yes! We offer digital marketing, branding, and SEO services.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">Do you offer technology solutions?</summary>
              <p className="mt-2 text-gray-600">Absolutely! We provide software development and automation solutions for travel businesses.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
