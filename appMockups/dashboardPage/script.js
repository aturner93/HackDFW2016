
$(document).ready(function($) {
  
  $.ajax({
    url:"http://ipinfo.io",
    dataType:'jsonp',
    success: function(ipInfo){
      
      $.ajax({
        url : "http://api.wunderground.com/api/4fc8e7e8108a036d/conditions/q/" + ipInfo.loc + ".json",
        dataType : "jsonp",
        success : function(response) {
          var conditions = response.current_observation;
          var tempF = conditions.temp_f;
          var tempC = conditions.temp_c;
          var weatherIcon = conditions.icon_url;
          var weatherAlt = conditions.icon;
          var wuLogo = conditions.image.url;
          var city = conditions.observation_location.city.split(', ')[1];
          var state = conditions.observation_location.state;
          var weather = conditions.weather;
          var wind = conditions.wind_mph + 'mph, ' + conditions.wind_dir;
          var forecastUrl = conditions.forecast_url;
          
          console.log(conditions);
          $('#weather-icon').attr({
            src: weatherIcon, 
            alt: weatherAlt
          });
          $('#weather-underground').attr({
            src: wuLogo, 
            alt: 'weatherunderground'
          });
          $('#wu-link').attr('href', forecastUrl);

          $('#temp').append(tempF + '° F');
          $('#city').append(city + ', ' + state);
          $('#weather').append(weather);
          $('#wind').append(wind);
          
          if (tempF < 40) {
            $('#app').addClass('cold');
          } else if (90 <= tempF) {
            $('#app').addClass('hot');
          } else {
            $('#app').addClass('mild');
          }

          $('#temp-btn').click(function() {

            if ($('#temp').hasClass('cel')) {
              $('#temp').removeClass('cel');
              $('#temp').addClass('far');
              $('#temp').empty().append(tempF + '° F');
            } else if ($('#temp').hasClass('far')) {
              $('#temp').removeClass('far');
              $('#temp').addClass('cel');
              $('#temp').empty().append(tempC + '° C');
            }

          });
          
          
        }
      });
      
    }
  }); 
});

window.setInterval(function() {

        var deviceID = "38001d000a47343432313031";
        var accessToken = "e54ec36b6b139319129d8cd075cb88f095a9dce7";
        var tempVarName = "temperature";
        var humVarName = "humidity";

        tempURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + tempVarName + "/?access_token=" + accessToken;
        $.getJSON(tempURL, function(json) { 
                 document.getElementById("tem").innerHTML = ": &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + (parseInt(json.result)*1.8+32) + "&deg;F";
                
                 });
  
        humURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + humVarName + "/?access_token=" + accessToken;
        $.getJSON(humURL, function(json) { 
                 document.getElementById("hum").innerHTML = ": " + json.result + "%";
                
                 document.getElementById("tstamp").innerHTML = json.coreInfo.last_heard;
                 });
  
        
  
    }, 1500);