function initMap() {
  const myLatLng = {lat: 48.860, lng: 2.3386};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 48.860, lng: 2.3386},
  });

  marker.addListener('clic', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function drop() {
  for (var i =0; i < markerArray.length; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 200);
  }
}

marker.setMap(map)




 // <script>
 //      function initMap() {
 //        var paris = {lat: 48.860, lng: 2.3386};
 //        var map = new google.maps.Map(document.getElementById('map'), {
 //          zoom: 12.5,
 //          center: paris
 //        });
 //        var marker = new google.maps.Marker({
 //          position: paris,
 //          map: map
 //        });
 //      }
 //    </script>