var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0.070959, lng: 23.923482}, //0.070959, 23.923482
    zoom: 3,
    streetViewControl: false,
  });
}