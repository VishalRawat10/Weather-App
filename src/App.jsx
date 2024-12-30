import "./App.css";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    name: "",
    temp: "",
    pressure: "",
    feelsLike: "",
    humidity: "",
    weather: "",
    main: "",
    icon: "",
    id: "",
  });

  return (
    <>
      <h1 className="text-4xl mt-8 font-bold mb-4">Weather App</h1>
      <SearchBox setWeatherInfo={setWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}

export default App;
