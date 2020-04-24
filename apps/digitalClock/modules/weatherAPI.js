/*jshint esversion: 8 */



const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
 
    requestWeatherData(lat, lon);
    requestLocation(lat, lon);
}


const requestWeatherData = async (lat, lon) => {
  
const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=65c8a48eb73372b183f6f9e65fb0068a`);
const weatherData = await response.json();


const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const uvi = document.querySelector('.uvi');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const weatherDescription = document.querySelector('.weather-description');



const getIcon = weatherData.current.weather[0].icon;
const currentTemp = Math.round(weatherData.current.temp);
const currentHumidity = weatherData.current.humidity;
const currentUvi = weatherData.current.uvi;
const currentSunrise = weatherData.current.sunrise;
const currentSunset = weatherData.current.sunset;
const currentWeatherDescription = weatherData.current.weather[0].description;


weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${getIcon}@2x.png`);

temp.innerText = `${currentTemp} ℉`;
humidity.innerText = `${currentHumidity}%`;
uvi.innerText = currentUvi;
sunrise.innerText = new Date(currentSunrise * 1000).toLocaleTimeString('en-US');
sunset.innerText = new Date(currentSunset * 1000).toLocaleTimeString('en-US');

return currentWeatherDescription === "broken clouds" ? weatherDescription.innerText = "partly cloudy" : weatherDescription.innerText = currentWeatherDescription;


};

const requestLocation = async (lat, lon) => {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    const locationData = await response.json();

    console.log(`${locationData.locality}, ${locationData.principalSubdivision} ${locationData.postcode}`);
   const locationText = document.querySelector('.location-text');
   locationText.innerText = `${locationData.locality}, ${locationData.principalSubdivision} ${locationData.postcode}`;

}

export const options = {
    enableHighAccuracy: true, 
    maximumAge: 30000, 
    timeout: 27000
  };


  export const error = () => {
    status.textContent = 'Unable to retrieve your location';
  }

//  This is where I'll put all the variables
  export const initWeatherData = () => {

  navigator.geolocation.getCurrentPosition(success, error, options);

}