'use strict';

const Cards = (station,update) => {
	const row = $('<div class="row">');
	const col = $('<div class="col s12">');
	const detailGrifo = $('<div class="card-panel">');
	const name = $(`<h5>${station.name}</h5>`);
  const address = $(`<p class="grey-text">${station.address}</p>`);
  const district = $(`<p class="grey-text">${station.district}</p>`);
	const iconMap = $('<span class="right"><i class="fa fa-map grey-text" aria-hidden="true"></i></span>');

	detailGrifo.append(iconMap);
	detailGrifo.append(name);
	detailGrifo.append(address);
	detailGrifo.append(district);
	col.append(detailGrifo);
	row.append(col);

	iconMap.on('click',(e) => {
    state.selectedStation = filterByDistrict(state.stations,$(e.currentTarget).html())[0];
    update();
    $('#cardGrifo').empty();
    // ShowMap();
    ShowMap(state.selectedStation[0]);
	});
  return row;
};

const reRender = (station, containerCards) => {
  containerCards.empty();
  station.forEach((e) => {
    containerCards.append(Cards(e, _ =>{reRender(station, containerCards); 
    }));
  });
}