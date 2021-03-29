import getWeather from '../backend/weatherapi'

export default function displayWeather() {
  const city = document.getElementById('city').value
  const submit = document.getElementById('submit')
  submit.onclick = () => {
    getWeather(city)
    .then(weather => {
      const html = `
      <p>Weather: ${weather.weather[0].description}</p>
      <p>Temperature: ${weather.main.temp} °F</p>
      <p>Min Temperature: ${weather.main.temp_min} °F</p>
      <p>Max Temperature: ${weather.main.temp_max} °F</p>
      <p>Humidity: ${weather.main.humidity}%</p>
      `
      document.getElementById('container').insertAdjacentHTML('beforeend', html)

    })
    .catch(error => {
      console.error(error.message)
      const html = `
        <p>City does not exist</p>
      `
      document.getElementById('container').insertAdjacentHTML('beforeend', html)
    });
  }
}