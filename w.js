function get() {
	const api = "RQKHD3RU2LFBV3GTMX8BD7ZXT";
try{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi/next7days?unitGroup=metric&include=days&key=RQKHD3RU2LFBV3GTMX8BD7ZXT&contentType=json",
	{
		method:"GET",

	}
	
	).then((response)=>response.json()).then((response)=>{
		console.log(response);

	})
}
catch(error){
	console.error(error);
}

}




