let weatherObj
const api_url = 'http://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&APPID=c38d46369aafd7a9d0b1df3b1c16c77c';

const api = {
    city: 'Manila',
    key: 'c38d46369aafd7a9d0b1df3b1c16c77c',
    url: function() {
        return ('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + "&units=metric&APPID=" + this.key);
      }
}

async function getWeatherData(city) {
    api.city = city;
    const response = await fetch(api.url(), {mode: 'cors'});
    const weatherData = await response.json();
    weatherObj = weatherData;
    console.log(weatherObj);
}

getWeatherData('Marawi');

const button = document.getElementById('button');
const div = document.getElementById('div');

button.addEventListener('click',() => {
    div.innerHTML = weatherObj.coord.lat;
})
/*
fetch(api_url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      weatherObj = response;
      console.log(response);
      console.log(weatherObj.coord.lat);
      document.getElementById('div').innerHTML = weatherObj.coord.lat
    });
*/
/*
{
    "coord": {
        "lon": 120.9822,
        "lat": 14.6042
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 306,
        "feels_like": 313,
        "temp_min": 305.4,
        "temp_max": 306,
        "pressure": 1004,
        "humidity": 63
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.45,
        "deg": 45,
        "gust": 0.89
    },
    "rain": {
        "1h": 3.65
    },
    "clouds": {
        "all": 93
    },
    "dt": 1655795390,
    "sys": {
        "type": 2,
        "id": 2008256,
        "country": "PH",
        "sunrise": 1655760481,
        "sunset": 1655807246
    },
    "timezone": 28800,
    "id": 1701668,
    "name": "Manila",
    "cod": 200
}
*/