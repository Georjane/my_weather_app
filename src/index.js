import './style.css';
// import 'bootstrap';
// import Rose from './pic.jpg'
// alert('hello world');

// const body = document.querySelector('body');
// // const element = document.createElement('div');
// const myRose = new Image();
// myRose.src = Rose;

// body.appendChild(myRose);

const getCityBtn = document.querySelector('button#getCityBtn');
const cityNameInput = document.querySelector('input#cityName');
const cityTag = document.querySelector('h1');
const cityTemp = document.querySelector('p#cityTemp');
const date = document.querySelector('p#date');
const tempDescription = document.querySelector('p#tempDescription');
const tempCBtn = document.querySelector('button#tempCBtn');
const tempFBtn = document.querySelector('button#tempFBtn');
const wind = document.querySelector('span#wind');
const visibility = document.querySelector('span#visibility');
const humidity = document.querySelector('span#humidity');



getCityBtn.addEventListener("click",function(e){
  e.preventDefault();
  getWeatherData();  
});

async function getWeatherData() {
  try {
    let cityName = cityNameInput.value
    // cityName !== '' ? cityName : console.log('error')

    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=9e451d75ffc63a816314ca34a0f0ff4e';
    const response = await fetch(url, {mode: 'cors'});
    const cityData = await response.json();
    const city = await cityData;
    cityTag.innerHTML = city.name + ', ' + city.sys.country;
    cityTemp.innerHTML = kelvinToCelsius(city.main.temp);
    date.innerHTML = Date().slice(16, 21) + ', ' + Date().slice(0, 10);
    cityNameInput.value = '';
    wind.innerHTML = 'Wind speed: ' + city.wind.speed + 'm/s'
    visibility.innerHTML = 'Visibility: ' + (city.visibility)/1000 + 'km'
    humidity.innerHTML = 'Humidity: ' + city.main.humidity + '%'

    tempCBtn.addEventListener('click', function(e) {
      e.preventDefault();
      cityTemp.innerHTML = kelvinToCelsius(city.main.temp);
    });
    tempFBtn.addEventListener('click', function(e) {
      e.preventDefault();
      cityTemp.innerHTML = kelvinToFarenheit(city.main.temp);
    })
    
    if (city.main.temp >= 293) {
      tempDescription.innerHTML = 'It\' a Sunny day';
    } else {
      tempDescription.innerHTML = 'It\' a Cold day';
    }
  } catch (error) {
    alert('Invalid City name: City not found!');
    cityNameInput.value = '';
  };
}

function kelvinToCelsius(temp) {
  return (temp - 273.15).toFixed(0) + '°C';
  // °C
}
function kelvinToFarenheit(temp) {
  return ((temp - 273.15) * 9/5 + 32 ).toFixed(0) + '°F';
}
