'use strict';

const filterByDistrict = (stations,query) => {
  let grifos = stations.filter((event)=>{
    if(event.district.toLowerCase().indexOf(query.toLowerCase()) !== -1){
      return event;
    }
  });
  return grifos;
}

const ShowMap = (station) => {
	const map = new GMaps ({
		div: '.map',
		lat: -12.043333,
		lng: -77.028333
	})

	GMaps.geolocate ({
		success: function(position){
			map.setCenter(position.coords.latitutde, position.coords.longitude);
			map.setZoom(12);
			map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "position actual",
        click: function(e) {
          alert('stations');
		    }
	    });
    	map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'driving',
    	});
    	map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        title: state.selectedStation.name +"\n"+ state.selectedStation.address,
        click: function(e) {
        		alert('stations');
      	}
			});
		}
	});
};
