const api='f46448491b834d6a63a0c43bf2b269a0';
let search=document.querySelector('#search_icon') 

async function getResponse(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
    if(response.status==404){
        error_display();
        return;
    }else{
        let error=document.querySelector('#error');
        error.style.display='none';
        const data = await response.json();
        updateUI(data);
    }
   
}
function error_display(){
    let error=document.querySelector('#error');
    error.style.display='block';
    return;
}


search.addEventListener('click',()=>{
    let city=document.querySelector('.search_box input').value;
    getResponse(city);

})

function updateUI(data){
    let temp = document.getElementById('data');
      temp.innerText=`${Math.round(data.main.temp-273)}°C`;
        let city=document.getElementById('city');
        city.innerText=data.name;
        let humidity=document.getElementById('humidity');
        humidity.innerText=`Humidity: ${data.main.humidity}%`;
        let wind=document.getElementById('wind');
        wind.innerText=`Wind: ${data.wind.speed} km/h`;

        let weatherIcon = document.getElementById('weather_icon');
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";}
            else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";}
            else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            }


            let input=document.querySelector('.search_box input');
            input.value='';
        let detail=document.querySelector('.details');
        detail.style.display='block';
}
