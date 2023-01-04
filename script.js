
let weather = {
    apiKey: "Your api key goes here",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey+"&lang=es")
        .then((response) => {
            if(!response.ok) {
                alert("Ciudad no encotrada");
                throw new Error("Clima NO encontrado");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    // Obtencion y renderizado de la data
    displayWeather: function (data) {
        const {name} = data;
        const {country, sunrise, sunset} = data.sys;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;


        const date = new Date();
        const str = date.toLocaleString("es", {
        //   hour12: true,
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit"
        });
        /* const hourSunrise = new Date(sunrise);
        const hourSunset = new Date(sunset);
        let sriseHour = hourSunrise.getHours() + ":" + hourSunrise.getMinutes();
        let ssetHour = hourSunset.getHours() + ":" + hourSunset.getMinutes();
        console.log(hourSunrise) */
        
        // console.log(name, country, icon,description,temp,humidity,speed, hourSunrise, sriseHour, hourSunset, ssetHour)
        document.querySelector("#city").innerText = `${name}, ${country}`;
        document.querySelector("#iconWeather").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#tempNow").innerText = Math.floor(temp) + "°" + " C" ;
        document.querySelector("#timeDHour").innerHTML = str + "hs";
        document.querySelector("#tempDescription").innerText = `${description}`;

        // document.querySelector("#sunriseHour").innerText = `${sriseHour}`;
        // document.querySelector("#sunsetHour").innerText = `${ssetHour}`;

        document.querySelector("#humidity").innerHTML = `${humidity} %`;
        document.querySelector("#windSpeed").innerHTML = Math.floor(speed) + " Km/h";
        document.querySelector(".containerWeather").classList.toggle("loading");
    },
    // Obtencion del valor introducido en el campo del input
    search: function () {
        this.fetchWeather(document.querySelector("#search-bar").value)
    }
};

document.querySelector("#search-button").addEventListener("click", function(){
    weather.search();
});

document.querySelector("#search-bar").addEventListener("keyup", function (event){
    if(event.key == "Enter") {
        weather.search();
    }
})

