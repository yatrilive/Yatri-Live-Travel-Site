import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  { 
    title: "Get Paid to Travel the World", 
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    description: "Learn how to monetize your travel experiences and build a sustainable income while exploring the world.",
    duration: "6 weeks",
    level: "Beginner",
    price: "$199",
    students: 1234,
    rating: 4.8
  },
  { 
    title: "Time Management for Digital Nomads", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    description: "Master the art of balancing work, travel, and personal life as a digital nomad.",
    duration: "4 weeks",
    level: "Intermediate",
    price: "$149",
    students: 856,
    rating: 4.9
  },
  { 
    title: "Freelance While Traveling", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    description: "Build a successful freelance career that allows you to work from anywhere in the world.",
    duration: "8 weeks",
    level: "Advanced",
    price: "$249",
    students: 567,
    rating: 4.7
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from experienced travelers and build the skills you need for your next adventure
          </p>
        </motion.div>

        {/* Featured Course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={courses[0].image} 
              alt={courses[0].title} 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f56551] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {courses[0].level}
                </span>
                <span className="text-white/80 text-sm">
                  {courses[0].duration}
                </span>
                <span className="text-white/80 text-sm">
                  {courses[0].students} students
                </span>
                <div className="flex items-center gap-1 text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <span>{courses[0].rating}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {courses[0].title}
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                {courses[0].description}
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#f56551] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94e3f] transition-colors">
                  Enroll Now - {courses[0].price}
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.slice(1).map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f56551] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {course.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.students} students</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f56551] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-[#f56551] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#d94e3f] transition-colors">
                    Enroll Now
                  </button>
                  <button className="text-[#f56551] font-semibold hover:text-[#d94e3f] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-[#f56551] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d94e3f] transition-colors">
            View All Courses
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
