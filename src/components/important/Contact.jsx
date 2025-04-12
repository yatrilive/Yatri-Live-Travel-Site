import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1584535508174-a20c98bc9a91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            We're here to help you plan your next adventure
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Info Section */}
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We're Here to Help You in Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is ready to help you plan your perfect trip.
        </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reach Out to Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#f56551]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <a href="tel:+917898194031" className="text-gray-600 hover:text-[#f56551] transition-colors">
                      (+91) 7898194031
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#f56551]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a href="mailto:svpandey398@gmail.com" className="text-gray-600 hover:text-[#f56551] transition-colors">
                      svpandey398@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#f56551]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.365-.24.547-.433.418-.394.787-.93.787-1.855V6.75a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6.75v9.129c0 .925.37 1.461.787 1.855.182.193.361.337.547.433.088.046.173.09.28.14.012.005.016.006.018.008l.006.003zM7.5 6.75a.75.75 0 00-.75.75v9.129c0 .115.046.155.08.178.03.015.068.03.102.044.033.015.066.03.102.044.037.015.07.03.113.044.043.015.09.03.148.044.058.015.12.03.19.044.07.015.145.03.225.03h.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Visit Us</p>
                    <p className="text-gray-600">Phagwara, Punjab, India</p>
                  </div>
                </div>
            </div>

            {/* Social Media Icons */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/sarveshkpandey/" 
                 target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-white border border-gray-200 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://twitter.com/yatrilive" 
                 target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-white border border-gray-200 text-[#1da1f2] rounded-full hover:bg-[#1da1f2] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/yatrilive/" 
                 target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-white border border-gray-200 text-[#e4405f] rounded-full hover:bg-[#e4405f] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/" 
                 target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-white border border-gray-200 text-[#1877f2] rounded-full hover:bg-[#1877f2] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
            </motion.div>

          {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Get in Touch</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#f56551] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#f56551] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+1 (555) 123-4567" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#f56551] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <input 
                    type="text" 
                    id="destination"
                    placeholder="Where do you want to go?" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#f56551] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Requests</label>
                  <textarea 
                    id="message"
                    placeholder="Tell us more about your travel plans..." 
                    rows="4"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#f56551] focus:outline-none transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-[#f56551] to-[#ff8a75] hover:from-[#d94e3f] hover:to-[#f56551] text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
              </button>
            </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What services do we offer?",
                answer: "We provide consulting, technology solutions, and marketing strategies for travel businesses. Our AI-powered platform helps you plan personalized trips and discover new destinations."
              },
              {
                question: "Can you help with marketing?",
                answer: "Yes! We offer digital marketing, branding, and SEO services tailored specifically for travel businesses. Our team can help you reach your target audience and grow your brand."
              },
              {
                question: "Do you offer technology solutions?",
                answer: "Absolutely! We provide software development and automation solutions for travel businesses. Our platform includes features for trip planning, booking, and customer management."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-[#f56551] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[#f56551] text-xl transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
            </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
