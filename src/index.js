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

getCityBtn.addEventListener("click",function(e){
  e.preventDefault();
  getWeatherData();
  
});

async function getWeatherData() {
  let cityName = cityNameInput.value
  cityName !== '' ? cityName : console.log('error')

  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=9e451d75ffc63a816314ca34a0f0ff4e';
  const response = await fetch(url, {mode: 'cors'});
  const cityData = await response.json();
  const city = await cityData;
  console.log(city.name);
  console.log(city.sys.country);

    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(response) {
    //   console.log(response.name);
    //   console.log(response.sys.country);
    //   // const para = document.createElement('p')
    //   // para.innerHTML = response.name + ', ' + response.sys.country;
    //   // p.appendChild(para);
    // })
}