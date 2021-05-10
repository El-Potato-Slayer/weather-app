import getWeather from '../backend/weatherapi';
import removeChildren, { switchTemperature } from './helpers';

let movedFlag = 0;

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * (9 / 5) + 32);
}

function weatherContent(weather, tempType) {
  let temp = '';
  let minTemp = '';
  let maxTemp = '';
  if (tempType) {
    temp = `${kelvinToCelsius(weather.main.temp)} °C`;
    minTemp = `${kelvinToCelsius(weather.main.temp_min)} °C`;
    maxTemp = `${kelvinToCelsius(weather.main.temp_max)} °C`;
  } else {
    temp = `${kelvinToFahrenheit(weather.main.temp)} °F`;
    minTemp = `${kelvinToFahrenheit(weather.main.temp_min)} °F`;
    maxTemp = `${kelvinToFahrenheit(weather.main.temp_max)} °F`;
  }
  return `
    <p class="capitalize text-5xl mb-4">${weather.weather[0].description}</p>
    <p class="temp text-4xl">${temp}</p>
    <p class="min-temp">Min Temperature: ${minTemp}</p>
    <p class="max-temp">Max Temperature: ${maxTemp}</p>
    <p>Humidity: ${weather.main.humidity}%</p>
  `;
}

function moveFormRight(form) {
  form.style.transform = 'translate(100%, -50%)';
}

function moveContentRight(content) {
  content.style.left = '10%';
  content.style.opacity = '100';
}

function assignBgImage(weather) {
  const container = document.getElementById('container');
  if (weather === 'Thunderstorm') {
    container.style.backgroundImage = "url('./images/thunderstorm3.jpg')";
  } else if (weather === 'Rain' || weather === 'Drizzle') {
    container.style.backgroundImage = "url('./images/rain5.jpg')";
  } else if (weather === 'Clouds') {
    container.style.backgroundImage = "url('./images/cloudy2.jpg')";
  } else if (weather === 'Snow') {
    container.style.backgroundImage = "url('./images/snow.jpg')";
  } else if (weather === 'Fog') {
    container.style.backgroundImage = "url('./images/fog.jpg')";
  } else {
    container.style.backgroundImage = "url('./images/clear.jpg')";
  }
}

export default function displayWeather() {
  const form = document.querySelector('form');
  switchTemperature();
  form.addEventListener('submit', (e) => {
    const temp = document.querySelector('.switch input').checked;
    e.preventDefault();
    const weatherContainer = document.getElementById('weather-info');
    removeChildren(weatherContainer);
    const city = document.getElementById('city').value;
    getWeather(city.replaceAll(' ', '+'))
      .then((weather) => {
        weatherContainer.insertAdjacentHTML('afterbegin', weatherContent(weather, temp));
        assignBgImage(weather.weather[0].main);
        moveFormRight(form);
        moveContentRight(document.getElementById('weather-info'));
        movedFlag = 1;
      })
      .catch(() => {
        if (movedFlag === 0) {
          document.getElementById('container').insertAdjacentHTML('afterend', '<p class="text-white absolute error text-2xl">Enter correct city</p>');
        } else {
          weatherContainer.insertAdjacentHTML('afterbegin', '<p class="text-2xl">Enter correct city</p>');
        }
      });
    const firstError = document.querySelector('p.error');
    if (firstError) {
      firstError.remove();
    }
  });
}