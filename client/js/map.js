/* eslint-disable no-unused-vars */
<<<<<<< HEAD
function initMap() {
  const paris = {lat: 48.860, lng: 2.3386};
=======
import { createHeadElement } from '../map.html'
document.getElementById('map').innerHTML = createHeadElement()

const google = 'google'
const initMap = () => {
  const paris = {lat: 48.860, lng: 2.3386}
>>>>>>> 0952d6e6146ca46b78e0da4d88ce8502892a089d
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: paris
  });
  const marker = new google.maps.Marker({
    position: paris,
    map: map
  });
}
<<<<<<< HEAD

// initMap()
=======
initMap()
>>>>>>> 0952d6e6146ca46b78e0da4d88ce8502892a089d
