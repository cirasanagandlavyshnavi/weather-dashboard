const apiKey = "a1b9d32faf400a1230ae32320543c2d4";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        
        document.getElementById("city").textContent = "Loading...";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("condition").textContent = data.weather[0].main;

    }

    catch(error) {

        document.getElementById("city").textContent = "City not found";
        document.getElementById("temp").textContent = "--";
        document.getElementById("humidity").textContent = "--";
        document.getElementById("wind").textContent = "--";
        document.getElementById("condition").textContent = "--";

    }

}
cityInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        getWeather();
    }

});