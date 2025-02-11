import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
// import Footer from './components/important/Footer';
// import Videos from './components/important/Videos';


const About = () => {
  return (
    <div className="flex bg-[#578FCA]  flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1662614683330-dfe095a59d96?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      {/* Mission, Vision, and Offerings */}
      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>To revolutionize the travel business landscape by providing tailored solutions.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>To be the leading platform for travel entrepreneurs and foster innovation.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="text-left list-disc list-inside">
            <li>Comprehensive travel business solutions</li>
            <li>Technology integrations</li>
            <li>Marketing strategies</li>
          </ul>
        </div>
      </div>

      {/* Team & Founders */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold">Team & Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-8">
          {[
            { name: "Sarvesh", image: "/images/Linkdin.jpg", title: "Senior Developer" },
            { name: "Gnn", image: "/images/Gnn.jpg", title: "Junior Developer" },
            { name: "Mansi", image: "/images/Mansi.jpg", title: "Founder & CEO" },
            { name: "Simran", image: "/images/Simran.jpg", title: "Product Manager" },
            { name: "Yousuf", image: "/images/Yousuf.jpg", title: "Marketing Specialist" }
          ].map((teamMember, index) => (
            <div key={index} className="shadow-lg rounded-lg p-6 bg-white">
              <img src={teamMember.image} alt={`${teamMember.name}'s Photo`} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{teamMember.name}</h3>
              <p className="text-gray-600">{teamMember.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto my-12">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {["What services do you offer?", "Can you help with marketing?", "How can I book a consultation?", "Do you work with startups?"].map((faq, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
              <h3 className="text-lg font-semibold">{faq}</h3>
              <p className="text-gray-500 mt-2">We offer tailored travel business solutions, marketing, and strategy planning.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-12 w-full text-center">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto mt-8">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <p className="italic">"Amazing experience! The team made my travel planning effortless. | this our 'Gen Do' Genration"</p>
            <h4 className="mt-4 font-semibold">- Narendra Modi (PM, India)</h4>
          </div>
        </div>
      </div>

      {/* Newsletter & Contact */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold">Stay Updated</h2>
        <p className="text-lg text-gray-600 mt-2">Join our newsletter for the latest updates.</p>
        <input type="email" placeholder="Enter your email" className="mt-4 p-3 border rounded-lg w-1/2" />
        <Button className="ml-4 px-6 py-3">Subscribe</Button>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;