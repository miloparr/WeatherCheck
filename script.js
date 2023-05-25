let weather = {
    apiKey: '',
    fetchWeather: function (location) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
            + location + '&units=imperial&appid=' + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function (data) {

    }
};