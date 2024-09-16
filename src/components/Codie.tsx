import { useState } from "react";

function Codie() {
  interface City {
    temperature: string;
    humidity: number;
  }

  const citiesMock: { [city: string]: City } = {
    London: {
      temperature: "15C",
      humidity: 150,
    },
    Paris: {
      temperature: "745C",
      humidity: 90,
    },
  };

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string>("");

  const handleSubmit = () => {
    if (query !== "") {
      const filterItem = Object.keys(citiesMock).filter((item) => {
        return item === query;
      });

      setResult(filterItem[0]);
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search city"
          className="border border-gray-500"
        />
        <button onClick={handleSubmit} className=" bg-green px-3 rounded">Search</button>
      </div>

      {/* 11 july 2024 --- codebyte challenge */}
      {/* Don't do {cities?.result?.temperature} because it will give undefined */}
      {/* lessons: how to filter and work with object of objects */}
      
      <div>Temperature: {citiesMock[result]?.temperature}</div>
      <div>Humidity: {citiesMock[result]?.humidity}</div>
    </div>
  );
}

export default Codie;
