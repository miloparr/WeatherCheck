let unit = 'imperial';
let tempUnit = '°F';
let speedUnit = 'mph';

let weather = {
    apiKey: /*API KEY GOES HERE*/,
    fetchWeather: function (location) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
            + location + '&units=' + unit + '&appid=' + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.temperature').innerText = temp + tempUnit;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.wind-speed').innerText = 'Wind Speed: ' + speed + '' + speedUnit;
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';

        document.querySelector(".weather").classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        weather.search();
    }
});

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});

document.querySelector('.fahr-cels').addEventListener('change', function () {
    if (this.checked) {
        unit = 'metric';
        tempUnit = '°C';
        speedUnit = 'km/h';
        weather.search(name);

    } else {
        tempUnit = '°F';
        speedUnit = 'mph';
        unit = 'imperial';
        weather.search(name);

    }


})

weather.fetchWeather('Anchorage');