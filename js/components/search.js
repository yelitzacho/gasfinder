'use strict';

const Search = (update) => {
	const section = $('<section></section>');
	const container = $('<div class="container-header">');
	const nav = $('<nav></nav>');
	const navWrapper = $('<div class="nav-wrapper">');
	const form = $('<form></form>');
	const inputField = $('<div class="input-field">');
	const input = $('<input id="search" type="search" placeholder="Ingresa tu distrito a buscar" required>');
	const label = $('<label class="label-icon" for="search"></label>');
	const iconLabel = $('<i class="material-icons">search</i>');
	const close = $('<i class="material-icons">close</i>');
	const containerCards = $('<div id="cardGrifo"></div>');
	const map = $('<div class="map"></div>');

	label.append(iconLabel);
	inputField.append(input,label,close);
	form.append(inputField);
	navWrapper.append(form);
	nav.append(navWrapper);
	container.append(nav);
	section.append(container,containerCards,map);

	input.on('keyup',(e)=>{
    map.empty();
    if (input.val()) {
      const arrayGrifos = filterByDistrict(state.stations, input.val());
      reRender(arrayGrifos, containerCards);
   	}
	});
	return section;
}