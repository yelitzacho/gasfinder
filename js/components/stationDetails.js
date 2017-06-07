'use strict';

const Cards = (station,update) => {
	const row = $('<div class="row">');
	const containerNormal = $('<div class="container">');
	const col = $('<div class="col s12">');
	const detailGrifo = $('<div class="card-panel">');
	const name = $(`<h5>${station.name}</h5>`);
	const address = $(`<p class="grey-text">${station.address}</p>`);
	const district = $(`<p class="grey-text">${station.district}</p>`);
	const iconMap = $('<span class="right"><i class="fa fa-map grey-text" aria-hidden="true"></i></span>');

	detailGrifo.append(iconMap,name,address,district);
	col.append(detailGrifo);
	containerNormal.append(col);
	row.append(containerNormal);

	iconMap.on('click',(e) => {
		state.selectedStation = filterByDistrict(state.stations,$(e.target).html())[0];
		$('#cardGrifo').empty();
		Map(state.selectedStation);
		// ShowProducts();
	});

	return row;
};

// const ShowProducts = (station, update) => {
// 	const containerNormal = $('<div class="container">');
// 	const row = $('<div class="row">');
// 	const col = $('<div class="col s12">');
// 	const col3 = $('<div class="col s3"></div>');
// 	const colProducts = $(`<div class="col s2 products">aDASD</div>`);
// 	const containerProducts = $('<div class="col s12 center"></div>');
	
// 	containerProducts.append(colProducts,colProducts,colProducts,colProducts);
// 	col.append(containerProducts);
// 	containerNormal.append(col);
// 	row.append(containerNormal);
// };

const reRender = (station, containerCards) => {
	containerCards.empty();
	station.forEach((e) => {
		containerCards.append(Cards(e, _ =>{reRender(station, containerCards); 
		}));
	});
}