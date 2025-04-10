import React from "react";

const popularVideos = [
  { id: "c0ST5fY0UZE?si", title: "India-Bangladesh Border Crossing" },
  { id: "zkxqZIwblg0?si", title: "Agartala to Dhaka - Solo Backpacking" },
  { id: "Fb_PlU1rFsY?si", title: "Foreign Exchange & SIM in Dhaka" }
];

const PopularVideos = () => {
  return (
    <section className="py-10 px-5 bg-[#578FCA] text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Popular Videos</h1>
        <button className="px-4 py-2 bg-[#A6C8E9] text-[#1E3A5F] font-semibold rounded-md shadow-md hover:bg-[#8FB7E3] transition-all">
          See All Videos
        </button>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {popularVideos.map((video, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-white text-black">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
            <div className="p-4">
              <p className="text-lg font-semibold">{video.title}</p>
              <button className="mt-4 px-4 py-2 bg-[#578FCA] text-white rounded-md shadow-md hover:bg-[#457AA7] transition-all">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularVideos;
