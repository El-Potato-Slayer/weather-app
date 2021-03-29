import getWeather from '../backend/weatherapi';
import removeChildren from './helpers';

let movedFlag = 0;

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * (9 / 5) + 32);
}

function weatherContent(weather) {
  return `
    <p class="capitalize text-5xl mb-4">${weather.weather[0].description}</p>
    <p class="temp text-4xl">${kelvinToFahrenheit(weather.main.temp)} °F / ${kelvinToCelsius(weather.main.temp)} °C</p>
    <p class="min-temp">Min Temperature: ${kelvinToFahrenheit(weather.main.temp_min)} °F / ${kelvinToCelsius(weather.main.temp_min)} °C</p>
    <p class="max-temp">Max Temperature: ${kelvinToFahrenheit(weather.main.temp_max)} °F / ${kelvinToCelsius(weather.main.temp_max)} °C</p>
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
  } else if (weather === 'Rain') {
    container.style.backgroundImage = "url('./images/rain5.jpg')";
  } else if (weather === 'Clouds') {
    container.style.backgroundImage = "url('./images/cloudy2.jpg')";
  } else {
    container.style.backgroundImage = "url('./images/clear.jpg')";
  }
}

export default function displayWeather() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weatherContainer = document.getElementById('weather-info');
    removeChildren(weatherContainer);
    const city = document.getElementById('city').value;

    getWeather(city.replaceAll(' ', '+'))
      .then((weather) => {
        weatherContainer.insertAdjacentHTML('afterbegin', weatherContent(weather));
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