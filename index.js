
function onloadPage(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('body_container').style.opacity = '0.5'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('body_container').style.opacity = '1'
}


function darkLight() {
    var body = document.getElementById('body');
    var darkLight = document.getElementById('day-night');
    var nav = document.getElementById('nav_container');
    var day_night = document.getElementById('day-night');

    var nav_a = document.getElementsByClassName('nav_a');
    Array.from(nav_a).forEach(Element =>{
        Element.classList.toggle("nav_a-d");
    })

    var h1 =document.getElementById('h1')
    darkLight.classList.toggle("cal_body-light");
    body.classList.toggle("body-d");
    nav.classList.toggle("nav_container1");
    h1.classList.toggle("h1-d");
    day_night.classList.toggle("fa-sun");
    // console.log(day_night.[0]);

    // alert("pal")


 


}
const x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}