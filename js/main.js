// google map deploy
  // initialize a map
var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('#list-hotels-result aside .hotel-map'), {
    center: { lat: 34.397, lng: 20.644 },
    zoom: 10
  });
}

// slide down nav-bar

$(".show-bars").on("click",
  function () {
    $(".nav-bar").fadeToggle(300);
});



  // 
// filter hotel section tool
