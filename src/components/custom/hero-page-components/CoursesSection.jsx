import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const courses = [
  {
    title: "Get Paid to Travel the World",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    description: "Learn how to monetize your travel experiences and build a sustainable travel career",
    duration: "8 weeks",
    level: "Beginner",
    price: "$199",
    rating: 4.8,
    students: 1200
  },
  {
    title: "Digital Nomad Lifestyle",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    description: "Master the art of working remotely while exploring the world",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$149",
    rating: 4.9,
    students: 850
  },
  {
    title: "Travel Photography Masterclass",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    description: "Capture stunning travel photos that tell your story",
    duration: "4 weeks",
    level: "All Levels",
    price: "$129",
    rating: 4.7,
    students: 1500
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn to Travel Like a Pro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the skills you need to become a successful travel creator and build your dream lifestyle
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {course.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{course.students} students</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-[#f56551] to-[#ff8a75] text-white py-3 rounded-xl font-semibold hover:from-[#d94e3f] hover:to-[#f56551] transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/important/resources/courses">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300">
              View All Courses
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection
