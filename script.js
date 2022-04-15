const url = 'http://api.openweathermap.org/geo/1.0/zip?zip=220108,BY&appid=0a150ef70c52f948a15ad635e3700be9'
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=53.9&lon=27.5667&appid=0a150ef70c52f948a15ad635e3700be9'
const imgDiv = document.querySelector('.imgWather')
const monthDiv = document.querySelector('.month')
const dateDiv = document.querySelector('.date')
const dayDiv = document.querySelector('.day')
const cityDiv = document.querySelector('.location__city')
const zipDiv = document.querySelector('.location__zip')
const tempDiv = document.querySelector('.temp')
const watherFeelsLikeDiv = document.querySelector('.wather__feels-like')
const watherCloudsDiv = document.querySelector('.wather__clouds')
fetch(myUrl)
.then(response => response.json())
.then(json => {
    console.log(json)
    watherCloudsDiv.textContent = json.weather[0].description
    watherFeelsLikeDiv.innerHTML = `Feels like : ${Math.round(json.main.feels_like - 273.15)}` + '&#176;' + ' C'
    const temp = `${Math.round(json.main.temp - 273.15)}`
    tempDiv.innerHTML = temp + '&#176;' + ' C'
    zipDiv.textContent = json.sys.country
    cityDiv.textContent = json.name + ','
    imgDiv.style.background = `url(http://openweathermap.org/img/w/${json.weather[0].icon}.png) no-repeat center center /cover`

})
const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}
let days = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const myData = new Date().getMonth()+1

monthDiv.textContent = months[myData]
dateDiv.textContent = new Date().getDate()
dayDiv.textContent = days[new Date().getDay()]
console.log(months[myData])