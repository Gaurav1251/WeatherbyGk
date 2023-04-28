
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'b4f55637demsh6ff3d1a4cb4531cp163a7ejsne79135f2e2dc',
		'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
	}
};

// //function to get current weather 
// const getweather = (city) => {
// 	try {

		
// 		fetch('https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=' + city, options).then(response => response.json()).then((response) => {

// 			// getweather1(response[0].Latitude,response[0].Longitude);
// 			getweather1(response[0].latitude,response[0].longitude)
			

			


// 		})


// 	} catch (error) {
// 		console.error(error);
// 	}
// }



/// wether by coords


// const options2 = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': 'b4f55637demsh6ff3d1a4cb4531cp163a7ejsne79135f2e2dc',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
// 	}
// };

// const getweather1 = (lat, log) => {
// 	try {


// 		fetch('https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=' + lat + '&lon=' + log + '&timezone=auto&language=en&units=auto', options2).then(response => response.json()).then((response) => {

// 			console.log(response);
// 			wc.innerHTML = response.current.summary;
// 			temp.innerHTML = (response.current.temperature);
// 			humi.innerHTML = response.current.humidity;
// 			speed.innerHTML = response.current.wind.speed;
// 			draw(response.current.temperature,response.current.humidity,response.current.wind.speed);


// 		})
		
// 		getlocfromcord(lat, log);

// 	} catch (error) {
// 		console.error(error);
// 	}
// }


// getweather("delhi");
btn.addEventListener("click", (e) => {
	e.preventDefault();

	get(city.value);

})
//chcart


function draw(temp, Humidity, Wind_Speed) {

	var xValues = ["Temperature °C", "Humidity %", "Wind_Speed Km/hr"];
	var yValues = [temp, Humidity, Wind_Speed];
	var barColors = ["red", "green", "blue"];

	new Chart("myCanvas", {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]

		},
		options: {

			legend: { display: false },
			title: {
				display: true,
				text: "Today"
			}
		}
	});
}






// function to get divice location
function getloc() {
	fetch("https://geolocation-db.com/json/", {
		method: "GET",

	}).then((response) => response.json())
		.then((data) => {
			console.log(data);


			getweather(data.city);
		})
}


//funtion to get date and time
function getdt() {
	let now = new Date(),
		hour = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		date = now.getDate(),
		month = now.getMonth();


	let days = [


		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec"
	]
	
	month = months[month - 1];
	if(hour>12){
		hour=hour-12;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if(sec<10){
		sec="0"+sec;
	}
	let day = days[now.getDay()];
	return day + ' ' + date + 'th ' + month + ' ,' + hour + ':' + min + ':' + sec;



}


dt.innerText = getdt();
setInterval(() => {
	
	dt.innerText = getdt()
}, 1000);

////







function getlocation() {
	
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}
	else {
		alert("Sorry! your browser is not supporting");
	}
}

function showPosition(position) {
	let x = position;
	// getweather(x);
	console.log(x);
	getlocfromcord(x.coords.latitude,x.coords.longitude);
	
}


function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			alert("Location Set as Delhi");
			get("Delhi");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("USer location information is unavailable.");
			break;
		case error.TIMEOUT:
			alert("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred.");
			break;
		default:
			
	}
}
getlocation();





//reverse geoloaction

const options1 = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'b4f55637demsh6ff3d1a4cb4531cp163a7ejsne79135f2e2dc',
		'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
	}
};

const getlocfromcord = (lat, log) => {


	try {

		// cityname.innerHTML = city;
		fetch('https://geocoding-by-api-ninjas.p.rapidapi.com/v1/reversegeocoding?lat=' + lat + '&lon=' + log, options1).then(response => response.json()).then((response) => {
		console.log(response);	

		var name = response[0].name;
			console.log(name);
			get(name);








		})


	} catch (error) {
		console.error(error);
	}
}



//

function get(city) {
	const api = "RQKHD3RU2LFBV3GTMX8BD7ZXT";
try{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"/next7days?unitGroup=metric&include=days&key=RQKHD3RU2LFBV3GTMX8BD7ZXT&contentType=json",
	{
		method:"GET",

	}
	
	).then((response)=>response.json()).then((response)=>{
		cityname.innerHTML=city;
		console.log(response);
		wc.innerHTML=response.days[0].conditions;
		temp.innerHTML=response.days[0].temp;
		speed.innerHTML=response.days[0].windspeed;
		humi.innerHTML=response.days[0].humidity;
		//
		d1.innerHTML=response.days[1].datetime;
		day1.innerHTML=response.days[1].conditions;
		temp1.innerHTML=response.days[1].temp;
		speed1.innerHTML=response.days[1].windspeed;
		humi1.innerHTML=response.days[1].humidity;
		//
		d2.innerHTML=response.days[2].datetime;
		day2.innerHTML=response.days[2].conditions;
		temp2.innerHTML=response.days[2].temp;
		speed2.innerHTML=response.days[2].windspeed;
		humi2.innerHTML=response.days[2].humidity;

		//
		d3.innerHTML=response.days[3].datetime;
		day3.innerHTML=response.days[3].conditions;
		temp3.innerHTML=response.days[3].temp;
		speed3.innerHTML=response.days[3].windspeed;
		humi3.innerHTML=response.days[3].humidity;
		//
		d4.innerHTML=response.days[4].datetime;
		day4.innerHTML=response.days[4].conditions;
		temp4.innerHTML=response.days[4].temp;
		speed4.innerHTML=response.days[4].windspeed;
		humi4.innerHTML=response.days[4].humidity;
		//
		d5.innerHTML=response.days[5].datetime;
		day5.innerHTML=response.days[5].conditions;
		temp5.innerHTML=response.days[5].temp;
		speed5.innerHTML=response.days[5].windspeed;
		humi5.innerHTML=response.days[5].humidity;
		//
		d6.innerHTML=response.days[6].datetime;
		day6.innerHTML=response.days[6].conditions;
		temp6.innerHTML=response.days[6].temp;
		speed6.innerHTML=response.days[6].windspeed;
		humi6.innerHTML=response.days[6].humidity;
		//
		d7.innerHTML=response.days[7].datetime;
		day7.innerHTML=response.days[7].conditions;
		temp7.innerHTML=response.days[7].temp;
		speed7.innerHTML=response.days[7].windspeed;
		humi7.innerHTML=response.days[7].humidity;



		draw(response.days[0].temp,response.days[0].humidity,response.days[0].windspeed);
	})
	
}
catch(error){
	console.log(error);
}

}



