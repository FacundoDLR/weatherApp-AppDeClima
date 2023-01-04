
let weather = {
    apiKey: "323f7ad5e3903c6aa4a1b7aad45b65bf",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const {country, sunrise, sunset} = data.sys;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;

        /* const hourSunrise = new Date(sunrise);
        const hourSunset = new Date(sunset);
        let sriseHour = hourSunrise.getHours() + ":" + hourSunrise.getMinutes();
        let ssetHour = hourSunset.getHours() + ":" + hourSunset.getMinutes(); */
        
        console.log(name, icon,description,temp,humidity,speed)
        document.querySelector("#city").innerText = `${name}, ${country}`;
        document.querySelector("#iconWeather").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#tempNow").innerText = Math.floor(temp) + "°" + " C" ;
        document.querySelector("#tempDescription").innerText = `${description}`;

        /* document.querySelector("#sunriseHour").innerText = `${sriseHour}`;
        document.querySelector("#sunsetHour").innerText = `${ssetHour}`; */

        document.querySelector("#humidity").innerText = `${humidity} %`;
        document.querySelector("#windSpeed").innerText = `${speed} Km/h`;
    }
}