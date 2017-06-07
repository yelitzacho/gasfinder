'use strict';

const Map = (station) => {
	const map = new GMaps ({
		div: '.map',
		lat: -12.043333,
		lng: -77.028333
	});

	GMaps.geolocate({
	  success: function(position) {
	    map.setCenter(position.coords.latitude, position.coords.longitude);

	  	map.addMarker({
			  lat: position.coords.latitude,
			  lng: position.coords.longitude,
			  title: 'Usted está aquí',
			});

			map.drawRoute({
			  origin: [position.coords.latitude, position.coords.longitude],
			  destination: [state.stations.lat[0],state.stations.long[0]],
			  travelMode: 'driving',
			  strokeColor: '#f7d917',
			  strokeOpacity: 0.8,
			  strokeWeight: 6
			});

			map.addMarker({
			  lat: state.stations.lat[0],
			  lng: state.stations.long[0],
			  title: 'Usted está buscando este grifo',
			});
	  },
	  error: function(error) {
	    alert('Tu geolocalización falló: '+ error.message);
	  },
	  not_supported: function() {
	    alert("Su navegador no soporta geolocalización");
	  },
	  always: function() {
	    alert("Irás a tu ubicación");
	  }
	});
};
