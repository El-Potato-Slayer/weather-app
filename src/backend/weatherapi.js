export default async function getWeather(city) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c3727ba2570a1fd7f92097742a63699`);

  if (response.status !== 200) {
    throw new Error('Data cannot be fetched');
  }

  const weather = await response.json();
  return weather;
}
