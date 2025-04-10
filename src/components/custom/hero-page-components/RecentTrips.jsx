import React from "react";

const destinations = [
  { name: "Delhi", image: "https://images.unsplash.com/photo-1513014576558-921f00d80b77?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sri Lanka", image: "https://plus.unsplash.com/premium_photo-1712366459284-2b564cc93a16?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Bangkok", image: "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const RecentTrips = () => {
  return (
    <section className="py-10 px-5 bg-[#578FCA] text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">My Recent Trips</h1>
        <button className="px-4 py-2 bg-[#A6C8E9] text-[#1E3A5F] font-semibold rounded-md shadow-md hover:bg-[#8FB7E3] transition-all">
          See All Trips
        </button>
      </div>

      {/* Destinations Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((place, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-white text-black">
            <img src={place.image} alt={place.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold">{place.name}</p>
              <button className="mt-4 px-4 py-2 bg-[#578FCA] text-white rounded-md shadow-md hover:bg-[#457AA7] transition-all">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentTrips;1