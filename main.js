
const weather_form = document.getElementById('weather_form')
console.log(weather_form);
let btn = document.getElementById('btn')
weather_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchValue = document.getElementById('search')
    fetch('http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q='+searchValue.value).then((response) => {
       return response.json()
    }).then((data) =>{
        console.log(data);
        let temp = document.getElementById('temp')
        let wind_kph = document.getElementById('wind_kph')
        wind_kph.innerText = data.current.wind_kph
        temp.innerText =  data.current.temp_c
        temp.innerText = data.current.temp_c
        btn.addEventListener('click', (event) => {
            event.preventDefault()
            fetch('http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q='+searchValue.value).then((response) => {
               return response.json()
            }).then((data) =>{
             if(temp.innerText == data.current.temp_c){
            temp.innerText =  data.current.temp_f
           }else if(temp.innerText == data.current.temp_f){
            temp.innerText = data.current.temp_c
           }
        })})})})