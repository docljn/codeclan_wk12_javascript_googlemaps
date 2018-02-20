const initialize = function(){
  const mapDiv = document.getElementById("main-map");

  const center = { lat: -29.780875, lng: 31.02881100000002 };
  const hell = { lat: 55.7342651, lng: 12.5419321 };

  const mainMap = new MapWrapper(mapDiv, center, 16);
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  const bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  const hellButton = document.querySelector("#button-goto-hell");
  hellButton.addEventListener("click", );
};

window.addEventListener("load", initialize);
