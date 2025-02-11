import React, { useState } from "react";

const DestinationAutocomplete = ({ onSelectDestination }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchPlaces = async (input) => {
    setQuery(input);
    if (!input) {
      setSuggestions([]);
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${input}`;
    const response = await fetch(url);
    const data = await response.json();
    setSuggestions(data);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter Destination"
        value={query}
        onChange={(e) => fetchPlaces(e.target.value)}
        className="border rounded p-2 w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border mt-1 w-full shadow-lg max-h-48 overflow-auto">
          {suggestions.map((place) => (
            <li
              key={place.place_id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(place.display_name);
                onSelectDestination(place.display_name);
                setSuggestions([]);
              }}
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationAutocomplete;
