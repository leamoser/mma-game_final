//Map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpY2VtbWFyaWUiLCJhIjoiY2tlc2gxZHgwM2JubzJ5bnB5dHYzeGR1diJ9.1wrlj5nw4_9Kt9TaqH91QA';
let bounds = [
  [5.5, 45.5 ], // Southwest coordinates
  [11, 48] // Northeast coordinates
];

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alicemmarie/ckfsnp39s45ig1arhz638s8fq/draft', // stylesheet location
    center: [8.22, 46.8], // starting position [lng, lat]
    zoom: 5.9, // starting zoom
    minZoom: 5.9,
    maxZoom: 13,
    maxBounds: bounds
});

export { map };
