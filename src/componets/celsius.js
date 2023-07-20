import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Celsius() {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [error, setError] = useState(null);
    const [iconUrl, setIconUrl]=useState(null);

    const apiKey = 'f0017941ecbaa103e461acb8fdca5c43';

    const handleInput = (event) => {
        setCity(event.target.value)

    }

    const getWeather = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const kelvin = response.data.main.temp;
            const  celsius = (kelvin -273.15).toFixed(0);
            response.data.main.temp = celsius
            setWeatherInfo(response.data);
            setError(null);


        } catch (error) {
            setError('The city searched is not found or an error occured');
            setWeatherInfo(null);

        }


    }

    
    return (
        <div className='container'>
            <div className='heading'>
                <div className='world-icon'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 47.5 47.5"
                        id="globe">
                        <defs>
                        <clipPath id="a">
                        <path d="M0 38h38V0H0v38Z"></path>
                        </clipPath>
                        <clipPath id="b">
                        <path d="M1 19C1 9.059 9.059 1 19 1s18 8.059 18 18-8.059 18-18 18S1 28.941 1 19"></path>
                        </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                        <path fill="#88c9f9" d="M37 19c0-9.941-8.059-18-18-18S1 9.059 1 19s8.059 18 18 18 18-8.059 18-18"></path>
                        </g>
                        <g fill="#5c913b" 
                        clipPath="url(#b)" 
                        transform="matrix(1.25 0 0 -1.25 0 47.5)"
                        >
                        <path d="M8.688 35.125c2.325-.436 3.438 0 4.312-.312.875-.313.063-.75.688-1.125s.812-.313 1.312-.125c.5.187.875.889 1.25.625.375-.265 1.688-.029 2.001-.5.312-.472.75-.842 1.437-.5.688.341 3.313.661 4 .236.688-.424 2.437-.5 3.125-.612.687-.111 2.437-.17 2.187-.46-.25-.29.688-.102.188-.79-.5-.687-2.438-2.124-2.625-1.937-.188.188-.375 1.063-1 1-.625-.062-1.5.125-1.562-.625-.063-.75-1-1.687-.313-1.687.688 0 1.375.687 1.562 0 .188-.688.063-1.063-.125-1.438-.187-.375.25-.375-.749-.625-1-.25-.563.562-1-.25-.438-.813-1.438-1.063-1.188-1.75.25-.688.438-1.063.5-1.625.063-.563-.625-1.25-1-1.75s-.812-1-1.375-1.125c-.562-.125-1-.25-1.312-1.062-.313-.813.341-2-.58-1.875-.92.125-1.42.687-1.483 1.125-.062.437-1 1.312-1.063 1.562-.062.25-1.25 1.125-1.25 1.125s-.75-.75-.75-1.625.25-1.937.25-1.937-.312-.438-.937.062-1.312.625-1.625 1.313c-.312.687-.687 1.874-.687 2.312 0 .437-.751 1.375-1.063 1.375-.313 0-1.875-.188-2-.438s-.5-.687-.812-1c-.313-.312-1.188-1.437-1.501-1.25-.312.188-1.562.875-1.562 1.5s-.875.25-.937 1.25c-.063 1-.5 1.875-.625.938-.125-.938-.063-1.25.312-2.375s.625-1.5 1.188-1.75c.562-.25.25-.687 1.187-.562s1.5.437 1.562.062c.063-.375.563-1.08-.375-1.696-.937-.616-.812-.679-1.375-1.241C4.313 15 3.751 15.188 3.751 14c0-1.187 0-1.375.062-2.375.063-1 .188-1.937-.687-2.437-.875-.5-3.751 3-4.001 5-.25 2-1.312 8.687-.937 10.249.375 1.563 2.375 6.376 3.188 7.313.812.937 5.312 3.75 7.312 3.375M16.938 15.688c0-.687-.5-1.437 0-2.125s.937-.688 1.375-.75c.437-.063 1.688 0 .688.812-1.001.813-1.563.188-1.438 1.126.125.937-.625.937-.625.937"></path><path d="M23.938 25.688c0-.687-.5-1.437 0-2.125s-1-1.25-.562-1.313c.437-.062 2.312.188 1.312 1-1 .813-.25.563-.125 1.501.125.937-.625.937-.625.937M19.378 14.75c.437.826.934.812 1.434.437.5-.375 2-1.062 1.188-1.374-.813-.313-.573-1-1.193-.313-.62.688-1.926.313-1.429 1.25M23.313 14.241c.339-.175.875-.741 1.625-.679.75.063.688-.785 1.438-.767.75.017 1.437-.17 1.749-.545.313-.375 1.684-.938.905-1-.78-.063-1.092.5-1.904.75-.813.25-.875-.438-1.75.062-.876.5-1.813-.222-2.063.733-.25.955-.737 1.826 0 1.446M16.715 9.5c.574.558.972.937 1.847 1.375.875.437 2.375 1.063 2.75 1.125.375.063.813.235 1.063-.26s.562-.678 1.062-.495c.5.184 1.087.076 1.462-.24.375-.317 1.288-.88 1.601-1.505.312-.625.937-.5.75-1.25-.188-.75.062-1.938-.625-2.563-.688-.624-1.125-1.374-1.875-1.749s-2.73.562-2.73 1.125c0 .562-.72 1.025-1.268 1.525-.549.5-.874.412-1.374.037-.5-.375-.316-.75-.941-.875s-2.289-1.437-2.226-.437c.062.999.907 2.75.504 3.312-.403.563-.898.001 0 .875"></path>
                        </g>
                        </svg>

                </div>
                <div className='heading-name'>
                    <h3>Weather Status</h3>
                </div>
            </div>
            <div className='card'>
                <div className='search'>
                    <input type='text' value={city} onChange={handleInput} placeholder='search for area ' />
                    <button className='btn-search' onClick={getWeather}>Search</button>

                </div>
                <div className='pages'>
                    <button className='far'> Fahrenheit</button>
                    <button className='cels'><Link to='/celsius' style={{color:"purple" , textDecoration:"none"}}>Celsius</Link></button>
                </div>
            </div>

            <div className='weather-content'>
            {iconUrl && <img className='weather-cond' src={iconUrl} alt='condition- icon'/>}

                <h3 className='rain'>Rain</h3>
                <svg
                 xmlns="http://www.w3.org/2000/svg" 
                 width="655.359" 
                 height="655.359" 
                 fillRule="evenodd" 
                 clipRule="evenodd" 
                 imageRendering="optimizeQuality" 
                 shapeRendering="geometricPrecision" 
                 textRendering="geometricPrecision" 
                 viewBox="0 0 6.827 6.827" 
                 id="humidity"><path fill="#1e88e5" d="M3.442.885c.247.268.483.547.703.837.184.245.358.498.513.762.234.4.437.844.53 1.3.035.178.055.359.05.54a1.82 1.82 0 0 1-.07.464c-.078.27-.223.508-.43.7-.354.33-.846.485-1.325.485-.478 0-.97-.156-1.325-.485a1.527 1.527 0 0 1-.43-.7 1.82 1.82 0 0 1-.07-.464c-.004-.181.015-.362.051-.54.093-.456.296-.9.53-1.3.155-.264.329-.517.513-.762.22-.29.456-.569.703-.837l.029-.032.028.032z"></path><path fill="#fff" d="M3.138 3.557a.252.252 0 0 0-.196-.083c-.08 0-.145.025-.192.091a.4.4 0 0 0-.07.239c0 .09.014.197.076.267a.24.24 0 0 0 .188.084c.078 0 .14-.029.192-.086a.372.372 0 0 0 .08-.254c0-.09-.016-.19-.079-.258zM3.734 3.434 2.947 4.95h.148l.784-1.516zM3.873 4.229c-.08 0-.146.025-.194.09a.4.4 0 0 0-.07.24c0 .09.015.197.077.267a.24.24 0 0 0 .188.084.249.249 0 0 0 .193-.085.372.372 0 0 0 .08-.255c0-.09-.016-.19-.078-.257a.252.252 0 0 0-.196-.084z"></path><path fill="#1e88e5" d="M3.03 3.703a.11.11 0 0 0-.084-.037c-.035 0-.064.012-.084.04a.174.174 0 0 0-.03.104c0 .039.006.085.033.116a.104.104 0 0 0 .081.036c.034 0 .061-.012.084-.037a.161.161 0 0 0 .034-.11c0-.04-.006-.083-.034-.112zm.93.755a.11.11 0 0 0-.084-.036c-.035 0-.063.01-.084.04a.174.174 0 0 0-.03.103c0 .04.006.086.033.116a.104.104 0 0 0 .082.037c.033 0 .06-.013.083-.038a.161.161 0 0 0 .035-.11c0-.039-.007-.082-.035-.112z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
                 
                {weatherInfo && (
                    <div>
                        <div className='display-weather'>
                            <div className='sun-rain-icon'>

                            </div>
                            <h1>{weatherInfo.name}</h1>
                            <div className='degrees'>
                                <h1 >{weatherInfo.main.temp}°C</h1>

                            </div>
                            <div className='main'>
                                <h1>{weatherInfo.weather[0].main}</h1>

                            </div>
                            <div className='humidity'>
                                <h1>{weatherInfo.main.humidity}%</h1>
                            </div>
                            <div className='wind-speed'>
                                <h2 className='label'>Wind Speed</h2>
                                <h1>{weatherInfo.wind.speed}m/sec</h1>
                            </div>



                        </div>

                    </div>

                )}

            </div>
            <div className='weather-box-container'>
              <div className='weather-box'>
                <div className='wind-icon'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="110"
                        height="110"
                        viewBox="0 0 22 18"
                        id="wind"
                    >
                        <path 
                        fill="none" 
                        fillRule="evenodd" 
                        stroke="#000" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M7.59.59A2 2 0 1 1 9 4H0m10.59 11.41A2 2 0 1 0 12 12H0m15.73-8.27A2.5 2.5 0 1 1 17.5 8H0" 
                        transform="translate(1 1)"
                        >
                            </path>
                            </svg>
                </div>
                <h3 className='wind-heading'> Wind Speed</h3>
                <h3 className='details'>{weatherInfo?.wind.speed}</h3>

            </div>
            <div className='weather-box1'>
                <div className='wind-icon1'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="110"
                        height="110"
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        imageRendering="optimizeQuality" 
                        shapeRendering="geometricPrecision" 
                        textRendering="geometricPrecision" 
                        viewBox="0 0 6.827 6.827" 
                        id="humidity">
                            <path fill="#1e88e5" d="M3.442.885c.247.268.483.547.703.837.184.245.358.498.513.762.234.4.437.844.53 1.3.035.178.055.359.05.54a1.82 1.82 0 0 1-.07.464c-.078.27-.223.508-.43.7-.354.33-.846.485-1.325.485-.478 0-.97-.156-1.325-.485a1.527 1.527 0 0 1-.43-.7 1.82 1.82 0 0 1-.07-.464c-.004-.181.015-.362.051-.54.093-.456.296-.9.53-1.3.155-.264.329-.517.513-.762.22-.29.456-.569.703-.837l.029-.032.028.032z"></path><path fill="#fff" d="M3.138 3.557a.252.252 0 0 0-.196-.083c-.08 0-.145.025-.192.091a.4.4 0 0 0-.07.239c0 .09.014.197.076.267a.24.24 0 0 0 .188.084c.078 0 .14-.029.192-.086a.372.372 0 0 0 .08-.254c0-.09-.016-.19-.079-.258zM3.734 3.434 2.947 4.95h.148l.784-1.516zM3.873 4.229c-.08 0-.146.025-.194.09a.4.4 0 0 0-.07.24c0 .09.015.197.077.267a.24.24 0 0 0 .188.084.249.249 0 0 0 .193-.085.372.372 0 0 0 .08-.255c0-.09-.016-.19-.078-.257a.252.252 0 0 0-.196-.084z"></path><path fill="#1e88e5" d="M3.03 3.703a.11.11 0 0 0-.084-.037c-.035 0-.064.012-.084.04a.174.174 0 0 0-.03.104c0 .039.006.085.033.116a.104.104 0 0 0 .081.036c.034 0 .061-.012.084-.037a.161.161 0 0 0 .034-.11c0-.04-.006-.083-.034-.112zm.93.755a.11.11 0 0 0-.084-.036c-.035 0-.063.01-.084.04a.174.174 0 0 0-.03.103c0 .04.006.086.033.116a.104.104 0 0 0 .082.037c.033 0 .06-.013.083-.038a.161.161 0 0 0 .035-.11c0-.039-.007-.082-.035-.112z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
                </div>
                <h3 className='wind-heading'> Humidity</h3>
                <h3 className='details'>{weatherInfo?.main.humidity}%</h3>

            </div>
            <div className='weather-box2'>
                <div className='wind-icon2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 64 64"
                        viewBox="0 0 64 64"
                        id="cloudy-weather"
                        height="110"
                        width="110"
                        >
                            <path fill="#2b91cc" d="M38.01,27.36c0.05-0.44,0.13-0.86,0.13-1.31c0-5.94-4.82-10.76-10.76-10.76c-3.37,0-6.34,1.58-8.31,4
		c-1.29-1.22-3.03-1.99-4.95-1.99c-3.98,0-7.2,3.23-7.2,7.2c0,0.88,0.18,1.72,0.47,2.5H6.58C2.95,27,0,29.95,0,33.58
		c0,3.63,2.95,6.58,6.58,6.58h29.4c3.63,0,6.58-2.95,6.58-6.58C42.56,30.66,40.64,28.21,38.01,27.36z"></path>
        <path fill="#53b4ed" d="M58.64,33.63c0.06-0.51,0.16-1.02,0.16-1.55c0-7-5.67-12.67-12.67-12.67c-3.97,0-7.47,1.86-9.79,4.72
		c-1.52-1.44-3.56-2.34-5.83-2.34c-4.69,0-8.49,3.8-8.49,8.49c0,1.04,0.21,2.02,0.55,2.94h-0.95c-4.28,0-7.75,3.47-7.75,7.75
		c0,4.28,3.47,7.75,7.75,7.75h34.63c4.28,0,7.75-3.47,7.75-7.75C64,37.52,61.74,34.64,58.64,33.63z"></path>
        </svg>
                </div>
                <h3 className='wind-heading'> Cloudiness</h3>
                <h3 className='details'>{weatherInfo?.weather[0].main} %</h3>

            </div>
            </div>

            





        </div>
    )
}
export default Celsius;