
function submitbutton() {
    const city = document.getElementById('inputbox');
    console.log(city)
    const click = document.getElementById('submitbutton')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=7870c7dfa072ea533547a05753bc9468`)
    .then(res =>res.json())
    .then(data =>{
    console.log(data)
    if(data && data.cod ==200){
      let Name = document.getElementById('cityName');
      let desc = document.getElementById('weatherCondition');
      let temp = document.getElementById('temp');
  
      var cityname = data.name;
      //   var temp = data.main.temp;
      //   var desc = data.weather[0].description;
      console.log(Name)
        Name.innerHTML = "City Name: " + " "+cityname?cityname:"Location Not Found";      
        temp.innerHTML = "Temperture:"+ " "+Math.ceil(data.main.temp /10 )+ "*C";
        desc.innerHTML =  "Weather Report:"+" "+data.weather[0].description;
    }else{
      alert("Location Not Found")
      

    }
    })
}