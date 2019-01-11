$(document).ready(function(){
	var url = "https://api.openweathermap.org/data/2.5/weather?";
	var locationUrl = "http://ip-api.com/json";
	var apiKey = "57b04c7c9c6eb13cb85f4247dfb35fdd";
	var userEnery;
	var units ='imperial';
	
    $('#f, #c').click(function () {
   		 if (this.id == 'c') {
       		units = 'metric';
   		} else if (this.id  == 'f') {
      		units = 'imperial';
   		}
   		
	});

		$("#search_btn").click(function(event){
			
			event.preventDefault();
			userEntry = $("#search_input").val();
			
			$.getJSON( url +"q=" + userEntry + "&units=" + units + "&APPID="+ apiKey, function(data){
				if(units == "imperial"){
					$("#temperature").html(data.main.temp + " <sup>o</sup> F" );
				}else{
					$("#temperature").html(data.main.temp + " <sup>o</sup> C" );
				};
				var weatherDiscription = data.weather[0].main;
				var weatherPic = ["animated/day.svg", "animated/cloudy.svg", "animated/rainy-6.svg", "animated/snowy-6.svg", "night.svg", "animated/thunder.svg"];
				    switch (weatherDiscription) {
				    	case 'Clear':
				    		$("#animation").attr("src", "");
				    		break
				    	case 'Thunderstorm':
				    		$("#animation").attr("src", weatherPic[5]);
				    		break
					    case 'Rain':
					      $("#animation").attr("src", weatherPic[2]);
					      break
					    case 'Clouds':
					      $("#animation").attr("src", weatherPic[1]);
					    break
					    case 'Snow':
					      $("#animation").attr("src", weatherPic[3]);
					    break
					}
			$("#summary").html(data.weather[0].main);
			$("#city_name").html(data.name + ", " + data.sys.country);
			$("#wind").html(data.wind.speed);
			$("#humidity").html(data.main.humidity);
			$("#temp_max").html(data.main.temp_max);
			$("#temp_min").html(data.main.temp_min);
			$("#time").html(time);

		})

			
	})


})//End of ready function

