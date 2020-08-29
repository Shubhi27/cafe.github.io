function initMap(){
  var location ={lat: 20.593683, lng:78.962883};
  var map= new google.maps.Map(document.getElementById("map"),{
    zoom:4,
    center:location
  });
  var marker= new google.maps.Marker({
    position:location,
    map: map
  });
}
