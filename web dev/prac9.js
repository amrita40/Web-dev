const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const locationInput = document.getElementById("location");
const getWeatherButton = document.getElementById("getWeather");
const weatherDataDiv = document.getElementById("weather-data");

getWeatherButton.addEventListener("click", function() {
  const location = locationInput.value;
  if (!location) {
    alert("Please enter a location!");
    return;
  }

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Replace OpenWeatherMap with your chosen API provider's URL structure

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      weatherDataDiv.innerHTML = ""; // Clear previous data

      const city = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Build the weather information display
      const weatherContent = `
        <h2>${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Conditions: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;

      weatherDataDiv.innerHTML = weatherContent;
    })
    .catch(error => {
      weatherDataDiv.innerHTML = "Error fetching weather data!";
      console.error(error);
    });
});
