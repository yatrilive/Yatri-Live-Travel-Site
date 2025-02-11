import React from 'react';

function Videos() {
  const videoData = [
    { id: 'c0ST5fY0UZE?si', title: 'How to cross India-Bangladesh border from Akhaura / Agartala' },
    { id: 'zkxqZIwblg0?si', title: 'How I travelled from Agartala to Dhaka (Solo backpacking Bangladesh)' },
    { id: 'Fb_PlU1rFsY?si', title: 'How to get foreign exchange and Tourist sim in Dhaka, Bangladesh' },
    // Add more videos here
  ];

  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">My YouTube Vlogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-lg">
            <iframe 
              width="100%" 
              height="315" 
              src={`https://www.youtube.com/embed/${video.id}`} 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">{video.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a 
          href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:text-blue-700"
        >
          Visit my YouTube Channel
        </a>
      </div>
    </div>
  );
}

export default Videos;
