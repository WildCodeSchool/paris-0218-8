/* eslint-disable no-unused-vars */
function initMap () {
  const google = window.google
  const paris = {lat: 48.860, lng: 2.3386}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: paris
  })
  const marker = new google.maps.Marker({
    position: paris,
    map: map
  })
}
