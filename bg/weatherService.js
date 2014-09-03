var WeatherService = {
  init: function() {

  },

  findTemperature: function(query_terms, callback) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/find?units=metric&q=" + query_terms;
    $.ajax({ url: apiUrl }).done(function(response) {
      if (response.cod == "200") {
        var item = response.list[0];
        var place = item.name == "" ? item.sys.country: item.name + ", " + item.sys.country;
        callback({temp: item.main.temp, place: place });
      } else {
        callback({error: "Place not found" });
      }
    });
  }
};

(function() { this.init(); }).apply(WeatherService);