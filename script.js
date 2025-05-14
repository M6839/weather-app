
var search_input=document.querySelector("input");
var button_s=document.querySelector("button");
var weatherImg=document.querySelector(".weatherImg");

async function getWeather(city){
    let apiKey= "83c290a3729d72d130224b858ea602f8";
    let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    let data = await response.json();
    if(data.message==="city not found"){
        alert("city not found");
        return;
    }
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    

    if(data.weather[0].main =="Clouds"){
        weatherImg.src="clouds.png";
    }
   else if(data.weather[0].main =="Clear"){
        weatherImg.src="clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherImg.src="rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherImg.src="snow.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherImg.src="drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherImg.src="mist.png";
    }
    
}
button_s.addEventListener("click",()=>{
    if(!search_input.value){
        alert("please enter city name");
        return;
    }
    getWeather(search_input.value);
    search_input.value='';
   
})

    
