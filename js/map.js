function initMap(){

  var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(42.0643914,-87.9624143);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

  var myMap = new google.maps.Map(el, mapOptions);
  
  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "green",
    fillOpacity: 0.9,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };
  
  // Constructing the building coordinates
  const triangleCoords = [
    { lat: 42.06440887422306,lng: -87.96358700552588},
    { lat: 42.06534111960168, lng: -87.9620205955145},
    { lat: 42.063732192119346, lng: -87.96179528996493},
  ];

  const apartment = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  // Setting in the map

  apartment.setMap(myMap);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
    animation: google.maps.Animation.BOUNCE,
    // icon: './images/map/icon.png',
    icon: svgMarker
  });
  
	var contentString = '<h3>Arlington Heights</h3><p>Arlington Heights is a municipality in Cook and Lake Counties in the U.S. state of Illinois. A suburb of Chicago, it lies about 25 miles northwest of the city\'s downtown. Per the 2020 Census, the population was 77,676.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', initMap);