var latlong = [55.953251,-3.188267]

function initialize() {
  var mapProperties = {
    center:new google.maps.LatLng(latlong[0],latlong[1]),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
	rotateControl:true
  };
  var map=new google.maps.Map(document.getElementById("bruntonMap"),mapProperties);
}


function countrySearch(){
	var input = document.getElementById("country")
try{
 $.getJSON("https://restcountries.eu/rest/v1/name/" + input.value, function(data){

				document.getElementById("capital").innerHTML = "Capital: " + data[0].capital;
				document.getElementById("population").innerHTML = "Population: " + data[0].population;
				document.getElementById("region").innerHTML = "Region: " + data[0].region;
				document.getElementById("currency").innerHTML = "Currency: " + data[0].currencies;
				
			if(data[0].latlng){
				latlong = data[0].latlng
				initialize()
			};
				
				
 
			}) 
}
catch(err){}
	
	
}


