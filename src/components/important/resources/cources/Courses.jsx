import React from 'react'

const courses = [
    { title: "Get Paid to Travel the World", image: "https://source.unsplash.com/600x400/?travel" },
    { title: "Time Management", image: "https://source.unsplash.com/600x400/?clock" },
    { title: "Freelance While Traveling", image: "https://source.unsplash.com/600x400/?freelance" },
  ];

const Courses = () => {
  return (
    <div>
      <div className="bg-[#578FCA] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Courses</h2>
          <button className="bg-white text-[#578FCA] px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100">See All Courses</button>
        </div>

        {/* Courses Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <p className="text-lg font-semibold p-4">{course.title}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>

  )
}

export default Courses
