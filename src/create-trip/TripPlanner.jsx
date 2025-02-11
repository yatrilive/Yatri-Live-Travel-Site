import React, { useState } from "react";
import DestinationAutocomplete from "./DestinationAutocomplete";
import AIModel from "./AIModel";

const TripPlanner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState("");
  const [tripPlan, setTripPlan] = useState("");

  return (
    <div className="flex flex-col items-center justify-center bg-[#578FCA]  p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full ">
        <h2 className="text-2xl font-semibold text-center mb-4">Plan Your Trip</h2>

        <DestinationAutocomplete onSelectDestination={setDestination} />

        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="border rounded p-3 w-full mb-3 color-black-100"
        />

        <input
          type="number"
          placeholder="Budget (INR)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border rounded p-3 w-full mb-3"
        />

        <input
          type="number"
          placeholder="Number of People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="border rounded p-3 w-full mb-3"
        />

        <AIModel
          destination={destination}
          days={days}
          budget={budget}
          people={people}
          setTripPlan={setTripPlan}
        />

        {tripPlan && (
          <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Your Trip Plan:</h3>
            <p className="whitespace-pre-line">{tripPlan}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;
