import React from 'react'

const blogs = [
    { title: "Top 10 Destinations for Remote Work", image: "https://source.unsplash.com/600x400/?laptop" },
    { title: "How to Balance Work and Travel", image: "https://source.unsplash.com/600x400/?work" },
    { title: "Best Budget Travel Hacks", image: "https://source.unsplash.com/600x400/?budget" },
  ];

  const Blogs = () => {
    return (
      <div className="bg-[#578FCA] py-12 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Blogs Section */}
          <div className="flex justify-between items-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Blogs</h2>
            <button className="bg-white text-[#578FCA] px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100">See All Blogs</button>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <p className="text-lg font-semibold p-4">{blog.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;