import React, { useState } from "react";
import './styles/global.css'
import './styles/app.css'
import {FiSearch} from 'react-icons/fi'
function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [search, setSearch] = useState(false)

  const handleSearch = () => {
    setCity("");
    fetch(
      `
      http://api.weatherapi.com/v1/forecast.json?key=3be0947453ab47a2ad6171517212110&q=${city}&days=7&aqi=no&alerts=no&lang=pt`
    )
      .then((res) => {
        setSearch(true);
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setSearch(false);
        setWeatherForecast(data);
      });
  };

  return (
    <>
      <header>
        <nav className="cabecalho">
          <h2>ZB Weather</h2>
          <div className="pesquisar">
            <input 
              type="text" 
              className="" 
              placeholder="Busque por uma cidade..." 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>
              <FiSearch/>
            </button>
          </div>
        </nav>
      </header>

      <main className="" id="search">
        <div className="">
          <h1>Verique agora a previsão do tempo na sua cidade!</h1>
          {
            search ? (
              <p>Pesquisando...</p>
            ):(<p></p>
            )
            
          }

          {weatherForecast ? (
            <>
              <div className="tudo">
                <div className="temperatura">
                  <div className="clima">
                    <div className="maxmin">
                      <img
                        src={`${weatherForecast.current.condition.icon}`}
                        alt="Weather Icon"
                      />
                      <div className="temp">
                        <p>{weatherForecast.current.temp_c}<sup className="celsius">ºC</sup></p>
                        <div className="minm">
                          <span>Min: {weatherForecast.forecast.forecastday[0].day.mintemp_c}ºC</span>
                          <span> Max: {weatherForecast.forecast.forecastday[0].day.maxtemp_c}ºC</span>
                        </div>
                      </div>
                    </div>

                    <div className="extras">
                      <p>Chuva: {weatherForecast.current.precip_mm} mm</p>
                      <p>Umidade: {weatherForecast.current.humidity} %</p>
                      <p>Vento:{weatherForecast.current.wind_kph} km/h</p>
                    </div>
                  </div>

                  <div className="status">
                    <h2>
                      {weatherForecast.location.name}, {weatherForecast.location.region}
                    </h2>
                    <h3>
                      {weatherForecast.current.condition.text}
                    </h3>
                  </div>
                </div>

                <div className="semana">
                  <div className="hour">
                    <div className="image">
                      <img
                        src={`${weatherForecast.forecast.forecastday[0].hour[0].condition.icon}`}
                        alt="Weather Icon"
                      />
                    </div>
                    <div className="temp">
                      <p>00:00</p>
                      <p>{`${weatherForecast.forecast.forecastday[0].hour[0].temp_c}`}ºC</p>
                    </div>
                  </div>

                  <div className="hour">
                    <div className="image">
                      <img
                        src={`${weatherForecast.forecast.forecastday[0].hour[6].condition.icon}`}
                        alt="Weather Icon"
                      />
                    </div>
                    <div className="temp">
                      <p>06:00</p>
                      <p>{`${weatherForecast.forecast.forecastday[0].hour[6].temp_c}`}ºC</p>
                    </div>
                  </div>
                  <div className="hour">
                    <div className="image">
                      <img
                        src={`${weatherForecast.forecast.forecastday[0].hour[12].condition.icon}`}
                        alt="Weather Icon"
                      />
                    </div>
                    <div className="temp">
                      <p>12:00</p>
                      <p>{`${weatherForecast.forecast.forecastday[0].hour[12].temp_c}`}ºC</p>
                    </div>
                  </div>
                  <div className="hour">
                    <div className="image">
                      <img
                        src={`${weatherForecast.forecast.forecastday[0].hour[18].condition.icon}`}
                        alt="Weather Icon"
                      />
                    </div>
                    <div className="temp">
                      <p>18:00</p>
                      <p>{`${weatherForecast.forecast.forecastday[0].hour[18].temp_c}`}ºC</p>
                    </div>
                  </div>
                  <div className="hour">
                    <div className="image">
                      <img
                        src={`${weatherForecast.forecast.forecastday[0].hour[23].condition.icon}`}
                        alt="Weather Icon"
                      />
                    </div>
                    <div className="temp">
                      <p>23:00</p>
                      <p>{`${weatherForecast.forecast.forecastday[0].hour[23].temp_c}`}ºC</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default App;
