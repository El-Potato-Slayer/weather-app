import getWeather from '../backend/weatherapi'
import removeChildren from './helpers'

function weatherContent(weather) {
  return `
    <p>Weather: ${weather.weather[0].description}</p>
    <p>Temperature: ${weather.main.temp} °F</p>
    <p>Min Temperature: ${weather.main.temp_min} °F</p>
    <p>Max Temperature: ${weather.main.temp_max} °F</p>
    <p>Humidity: ${weather.main.humidity}%</p>
  `
}

export default function displayWeather() {
  const submit = document.getElementById('submit')
  submit.onclick = () => {
    const weatherContainer = document.getElementById('weather-info') 
    removeChildren(weatherContainer)
    const city = document.getElementById('city').value
    getWeather(city.replaceAll(' ', '+'))
      .then(weather => {
        weatherContainer.insertAdjacentHTML('afterbegin', weatherContent(weather))
      })
      .catch(error => {
        console.error(error.message)
        weatherContainer.insertAdjacentHTML('afterbegin', `<p>City does not exist</p>`)
      });
  }
}