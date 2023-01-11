function retrieveInfo() {

    var newName = document.getElementById("cityInput");
    var locationName = document.getElementById("locationName");
    locationName.innerHTML = ""+newName.value+"";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=ab5eb8d68c87e60b901dcbdd753d4447')
.then(response => response.json())
.then(data => {
    for (i=0; i<5; i++) {
        document.getElementById("actualDate").innerHTML = Date(data.list[i].dt_txt);
    }
    for (i=0; i<5; i++) {
        document.getElementById("temp" + (i+1)).innerHTML = "Temperature:" + Number(data.list[i].main.temp);
    }
    for (i=0; i<5; i++) {
        document.getElementById("hum" + (i+1)).innerHTML = "Humidity:" + Number(data.list[i].main.humidity);
    }
    for (i=0; i<5; i++) {
        document.getElementById("speed" + (i+1)).innerHTML = "Wind speed:" + Number(data.list[i].wind.speed);
    }
   
    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }


})

.catch(err => alert("Error! Try checking your connection or choose a different location"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Nashville";
    retrieveInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Functions to get the correct integer for the index of the the days, temperatures, humidity, and the wind speeds
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

var t = new Temperature();

function CheckTemp(temp){
        if(temp + t.getTemp() > 6){
            return temp + t.getTemp() - 7;
        }
        else{
            return temp + t.getTemp();
        }
    }   

var h = new Humidity();

function CheckHum(hum){
    if(hum + h.getHum() > 6){
        return hum + h.getHum() - 7;
    }
    else{
        return hum + h.getHum();
    }
}

var w = new Wind();

function CheckSpeed(speed){
    if(speed + w.getSpeed() > 6){
        return speed + w.getSpeed() - 7;
    }
    else{
        return speed + w.getSpeed();
    }
}
