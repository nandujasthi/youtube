import React, { useState } from "react";

const SelectCountry = () => {
  const data = [
    {
      country: "USA",
      population: 331002651,
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      country: "India",
      population: 1380004385,
      cities: ["Delhi", "Mumbai", "Bangalore"],
    },
    {
      country: "China",
      population: 1444216107,
      cities: ["Beijing", "Shanghai", "Guangzhou"],
    },
    // Add more countries with their respective populations and cities
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div>
      <select
        className="border rounded-md border-gray-400 p-2"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {data.map((d) => (
          <option key={d.country} value={d.country}>
            {d.country}
          </option>
        ))}
      </select>

      {/* City Dropdown */}

      {selectedCountry && (
        <select className="border rounded-md border-gray-400 p-2">
          {data
            .find((d) => d.country === selectedCountry)
            ?.cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
      )}

      {selectedCountry &&
        data
          .filter((d) => d.country === selectedCountry)
          .map((p) => <span>{p.population}</span>)}
    </div>
  );
};

export default SelectCountry;
