import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
// import Footer from './components/important/Footer';
// import Videos from './components/important/Videos';


const About = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1662614683330-dfe095a59d96?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Empowering travelers with AI-driven insights and personalized recommendations
          </p>
        </motion.div>
      </motion.div>

      {/* Mission, Vision, and Offerings */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description: "To revolutionize the travel business landscape by providing tailored solutions.",
              icon: "🎯"
            },
            {
              title: "Our Vision",
              description: "To be the leading platform for travel entrepreneurs and foster innovation.",
              icon: "🌟"
            },
            {
              title: "What We Offer",
              description: "Comprehensive travel solutions powered by cutting-edge technology.",
              icon: "💡"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team & Founders */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to transforming your travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Sarvesh", image: "/images/Linkdin.jpg", title: "Senior Developer", role: "Tech Lead" },
              { name: "Gnn", image: "/images/Gnn.jpg", title: "Junior Developer", role: "Frontend Expert" },
              { name: "Mansi", image: "/images/Mansi.jpg", title: "Founder & CEO", role: "Visionary Leader" },
              { name: "Simran", image: "/images/Simran.jpg", title: "Product Manager", role: "Product Strategist" },
              { name: "Yousuf", image: "/images/Yousuf.jpg", title: "Marketing Specialist", role: "Growth Expert" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#f56551] font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
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
              Everything you need to know about our services and platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services do you offer?",
                answer: "We provide comprehensive travel solutions including AI-powered trip planning, personalized recommendations, and travel business consulting."
              },
              {
                question: "Can you help with marketing?",
                answer: "Yes! We offer digital marketing strategies, content creation, and SEO optimization specifically tailored for travel businesses."
              },
              {
                question: "How can I book a consultation?",
                answer: "You can schedule a consultation through our platform. We offer both online and in-person meetings to discuss your travel needs."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! We specialize in helping travel startups grow and scale their operations with our innovative solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from travelers who've experienced our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="text-4xl text-[#f56551] mb-6">❝</div>
            <p className="text-xl text-gray-700 italic mb-6">
              "Amazing experience! The team made my travel planning effortless. This is our 'Gen Do' Generation!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Narendra_Modi_2015.jpg/330px-Narendra_Modi_2015.jpg" 
                  alt="Narendra Modi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Narendra Modi</h4>
                <p className="text-gray-600">Prime Minister, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our newsletter for the latest travel insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#f56551] focus:outline-none transition-colors w-full sm:w-auto"
              />
              <Button className="px-8 py-4 bg-gradient-to-r from-[#f56551] to-[#ff8a75] hover:from-[#d94e3f] hover:to-[#f56551] text-white rounded-xl font-semibold transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;