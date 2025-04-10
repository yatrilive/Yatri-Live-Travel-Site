import React from 'react'

const courses = [
  { title: "Get Paid to Travel the World", image: "https://d502jbuhuh9wk.cloudfront.net/courses/63ce7647e4b084017a3a8d9e/63ce7647e4b084017a3a8d9e_scaled_cover.jpg?v=9" },
  { title: "Time Management", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgU51Sw5oCgXA3N0Cf6aoNhhhHkL2CHYikt68g-tDilcv1RdfLXdtL7PLcEX072hV4pg&usqp=CAU" },
  { title: "Freelance While Traveling", image: "https://static1.squarespace.com/static/6211222d4471dd49ba84baf2/621122c7dbdda84de9fdc3d6/6211259bb9ab4c6f1335651c/1645290923503/blogbyro.png?format=1500w" },
];

const CoursesSection = () =>{ return (
  <div>
    <div className="bg-[#578FCA] py-12 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">How to Become a Successful Travel Creator</h2>
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

export default CoursesSection
