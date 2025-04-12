import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogs = [
  { 
    title: "Top 10 Destinations for Remote Work in 2024", 
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Discover the best places around the world for digital nomads and remote workers in 2024.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Digital Nomad"
  },
  { 
    title: "How to Balance Work and Travel: A Complete Guide", 
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Learn practical tips and strategies to maintain productivity while exploring the world.",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Lifestyle"
  },
  { 
    title: "Best Budget Travel Hacks for 2024", 
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    excerpt: "Save money on your travels with these proven budget travel tips and tricks.",
    author: "Emma Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Budget Travel"
  },
];

const PopularBlogs = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles and guides to help you plan your next adventure
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f56551] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{blog.author}</span>
                  </div>
                  <button className="px-4 py-2 text-[#f56551] font-semibold hover:text-[#d94e3f] transition-colors flex items-center gap-1">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/important/resources/blogs">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300">
              View All Articles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PopularBlogs
