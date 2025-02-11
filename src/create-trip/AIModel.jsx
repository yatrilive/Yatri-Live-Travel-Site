import React, { useState } from "react";
import TripPopup from "./TripPopup";

const AIModel = ({ destination, days, budget, people }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState("");
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const generateTripPlan = async () => {
    if (!destination || !days || !budget || !people) {
      alert("Please fill all the fields!");
      return;
    }

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `Plan a detailed itinerary for:
              - Destination: ${destination}
              - Duration: ${days} days
              - Budget: ₹${budget}
              - Number of people: ${people}
              Provide activities, food recommendations, travel tips, and estimated costs.`,
            },
          ],
        },
      ],
    };

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Couldn't generate a trip plan.";

      setTripPlan(aiResponse);
    } catch (error) {
      console.error("Error generating trip plan:", error);
      setTripPlan("Error generating trip plan. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={generateTripPlan}
        disabled={isLoading}
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition flex items-center justify-center"
      >
        {isLoading ? "Generating..." : "Generate Trip Plan"}
      </button>

      {/* Show the Popup when a trip plan is available */}
      {tripPlan && <TripPopup tripPlan={tripPlan} onClose={() => setTripPlan("")} />}
    </div>
  );
};

export default AIModel;
