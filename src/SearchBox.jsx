import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState, useEffect } from "react";

export default function SearchBox({ setWeatherInfo }) {
  const [city, setCity] = useState("Delhi");
  const [error, setError] = useState(false);
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  useEffect(() => {
    async function getInitialInfo() {
      let initialInfo = await getWeatherInfo();
      setWeatherInfo(initialInfo);
      setCity("");
    }
    getInitialInfo();
  }, []);

  async function getWeatherInfo() {
    try {
      let res = await fetch(
        `${URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      console.log(jsonRes);
      return {
        name: jsonRes.name,
        temp: jsonRes.main.temp,
        feelsLike: jsonRes.main.feels_like,
        humidity: jsonRes.main.humidity,
        pressure: jsonRes.main.pressure,
        weather: jsonRes.weather[0].description,
        icon: jsonRes.weather[0].icon,
        id: jsonRes.weather[0].id,
      };
    } catch (err) {
      throw err;
    }
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  async function handleForm(event) {
    setError(false);
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo();
      console.log(newInfo);
      setWeatherInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="SearchBox mt-4 mb-8">
      <form action="" onSubmit={handleForm}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ width: "25vw" }}
          className="search"
          onChange={handleInputChange}
          value={city}
        />
        <Button
          type="submit"
          className="searchButton"
          variant="contained"
          size="large"
          style={{ backgroundColor: "rgb(34, 197, 94)" }}
        >
          {<SearchIcon />}Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
