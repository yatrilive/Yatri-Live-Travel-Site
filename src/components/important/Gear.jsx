import React from 'react';
import GearItem from './GearItem'; // Import the GearItem component

const Gear = () => {
  // Array of gear data
  const gearData = [
    {
      name: 'Best Travel Backpack',
      image: 'https://images.unsplash.com/photo-1528921581519-52b9d779df2b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A durable and spacious backpack for all your travel needs.',
      affiliateLink: 'https://images.unsplash.com/photo-1528921581519-52b9d779df2b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Comfortable Hiking Shoes',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-performance shoes for long hikes and treks.',
      affiliateLink: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'High-Quality Camera',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Capture your travel memories in stunning quality.',
      affiliateLink: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-[#578FCA]">
      {gearData.map((item, index) => (
        <GearItem
          key={index}
          name={item.name}
          image={item.image}
          description={item.description}
          affiliateLink={item.affiliateLink}
        />
      ))}
    </div>
  );
};

export default Gear;
