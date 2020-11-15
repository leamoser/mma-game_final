//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
let map;
const btnLayerHills = document.querySelector('#mapButtonMountain');
const btnLayerWater = document.querySelector('#mapButtonWater');
const btnLayerCity = document.querySelector('#mapButtonCity');
let buttonsMap = [btnLayerHills, btnLayerWater, btnLayerCity];


//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let initMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpY2VtbWFyaWUiLCJhIjoiY2tlc2gxZHgwM2JubzJ5bnB5dHYzeGR1diJ9.1wrlj5nw4_9Kt9TaqH91QA';
  let bounds = [
    [5.5, 45.5], // Southwest coordinates
    [11, 48] // Northeast coordinates
  ];
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alicemmarie/ckfsnp39s45ig1arhz638s8fq/draft', // stylesheet location
    center: [8.22, 46.8], // starting position [lng, lat]
    zoom: 5.9, // starting zoom
    minZoom: 5.9,
    maxZoom: 13,
    maxBounds: bounds
  });
  map.dragRotate.disable();
  map.scrollZoom.enable();
  map.on('load', function () {
    map.setLayoutProperty('hillshade', 'visibility', 'none');
    map.setLayoutProperty('wasser', 'visibility', 'none');
    map.setLayoutProperty('bigplaces', 'visibility', 'none');
    map.setLayoutProperty('schweiz_overlay_dark', 'visibility', 'none');
    map.setLayoutProperty('schweiz_fill dark', 'visibility', 'none');
  })
  buttonsMap.forEach(btn => {
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (btn.id === 'mapButtonMountain') {
        toggleLayer('hillshade');
      } else if (btn.id === 'mapButtonWater') {
        toggleLayer('wasser');
      } else if (btn.id === 'mapButtonCity') {
        toggleLayer('bigplaces');
      }
    }
  })
  function toggleLayer(layer) {
    let visibility = map.getLayoutProperty(layer, 'visibility');
    if (visibility === 'none') {
      map.setLayoutProperty(layer, 'visibility', 'visible');
    } else {
      map.setLayoutProperty(layer, 'visibility', 'none');
    }
  }
}
function switchDarkMode(mode) {
  if (mode === 'dark') {
    map.setLayoutProperty('schweiz_overlay_dark', 'visibility', 'visible');
    map.setLayoutProperty('schweiz_fill dark', 'visibility', 'visible');
  } else if (mode === 'light') {
    map.setLayoutProperty('schweiz_overlay_dark', 'visibility', 'none');
    map.setLayoutProperty('schweiz_fill dark', 'visibility', 'none');
  }

}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { initMap, map, switchDarkMode, buttonsMap };