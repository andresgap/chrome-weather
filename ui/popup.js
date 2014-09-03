var Popup = {
  _bg: null,

  init: function() {
    this._bg = chrome.extension.getBackgroundPage();
    $("#result-box").hide();
    $("#search-button").click(function() { Popup.search(); });
  },

  search: function() {
    var value = $("#search-query").val();
    this._bg.WeatherService.findTemperature(value, function(result) {
      if (result.error) {
        $("#result-place").text(result.error);
        $("#result-temp").text(0);
      } else {
        $("#result-place").text(result.place);
        $("#result-temp").text(result.temp);
      }
      $("#result-box").show();
    });
  }
};

$(document).ready(function() { Popup.init(); });
