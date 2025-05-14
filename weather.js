function getWeather(){
    const apiKey= "83c290a3729d72d130224b858ea602f8";
    const city= document.getElementById('city').value;
    if(!city){
        alert("please enter city name");
        return;
    }
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}";
    fetch(apiUrl).then(response => response.json()).then(data =>{
        displayWeather(data);
    })
    .catch(error =>{
        console.error('er',error);
    })
}