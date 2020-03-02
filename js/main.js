// google map deploy
// initialize a map
var map;

function initMap() {
  map = new google.maps.Map(document.querySelector('#list-hotels-result aside .hotel-map'), {
    center: {
      lat: 34.397,
      lng: 20.644
    },
    zoom: 10
  });
}
// slide down nav-bar

$("#header .show-bars").on("click",
  function () {
    $(".nav-bar").fadeToggle(400);
  });

// slider image
// function changeStart() {
//   setInterval(function () {
//     var rand1 = Math.round(Math.random() * 8) + 1;
//     var rand2 = Math.round(Math.random() * 8) + 1;
//     var rand3 = Math.round(Math.random() * 8) + 1;
//     var imgs = document.querySelectorAll('#hot-hotel .hotel-image .image-items img');
//     imgs[0].src = './img/bed' + rand1 + '.jpg';
//     imgs[1].src = './img/bed' + rand2 + '.jpg';
//     imgs[2].src = './img/bed' + rand3 + '.jpg';
//   }, 2000);
// }
// changeStart();
$('#hot-hotel .hotel-image .next-hotel').on('click', () => {
  changeIndexImg();
})