//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { map } from "../modules/map.js";


//-----------------------------------------------------------------
//FUNTKIONEN-------------------------------------------------------
let drawConnection = (oldLon, oldLat, newLon, newLat, round) => {
    let layerId = 'route' + round;
    if (map) {
        map.addSource(layerId, {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [oldLon, oldLat],
                        [newLon, newLat]
                    ]
                }
            }
        });
        map.addLayer({
            'id': layerId,
            'type': 'line',
            'source': layerId,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#E84646',
                'line-width': 1
            }
        });
    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { drawConnection }