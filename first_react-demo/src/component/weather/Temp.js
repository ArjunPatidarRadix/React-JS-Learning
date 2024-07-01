import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("mandsaur");
  const [weatherData, setWeatherData] = useState({});
  const getWeatherInfo = async () => {
    console.log("searchValue :: ", searchValue);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dd8c76fc6e747f53fc0fedea438b67d2`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const weatherInfo = {
        temp,
        weatherMood,
        humidity,
        pressure,
        speed,
        country,
        sunset,
        name,
      };

      setWeatherData(weatherInfo);

      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            id="search"
            className="searchTerm"
            autoFocus
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard weatherData={weatherData} />
    </>
  );
};

export default Temp;
