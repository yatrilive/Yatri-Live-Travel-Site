import React from "react";

const TripPopup = ({ tripPlan, onClose }) => {
  if (!tripPlan) return null; // Hide popup if there's no trip plan

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-2 scrollbar-hide">
      <div className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
        >
          ✖
        </button>

        {/* Popup Content - Scrollable */}
        <div className="overflow-y-auto max-h-[60vh] p-2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Your AI-Generated Trip Plan
          </h2>
          <p className="text-sm whitespace-pre-line">{tripPlan}</p>
        </div>
      </div>
    </div>
  );
};

export default TripPopup;
