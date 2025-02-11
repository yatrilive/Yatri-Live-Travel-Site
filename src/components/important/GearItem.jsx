import React from 'react';

const GearItem = ({ name, image, description, affiliateLink }) => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg">
      <img src={image} alt={name} className="w-full h-60 object-cover rounded-md" />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-500 hover:text-blue-700"
      >
        Check it out
      </a>
    </div>
  );
};

export default GearItem;
