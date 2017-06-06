'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(Header(_ => render(root)));
  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

  $(input).on('keyup',(e) => {
    
  });

});

// const showMap = () => {
//   const row = $('<div class="row">');
//   const containerMap = $('<div class="containerMap"></div>');
//   const name = $('<h4 class="col s9">'+ state.setectedas+'</h4>');
//   const address = $('<p class="col s9">'+ state.selectedStations +'</p>');
//   const district = $('<p class="col s9"><span>Hola</span></p>');
//   const containerInfo = $('<div class="container">');

  // containerInfo.append(name);
  // containerInfo.append(address);
  // containerInfo.append(district);
  // containerMap.append(containerInfo);
  // row.append(containerMap);
// }