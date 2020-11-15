import {fetchMorePlaces} from "./fetchMorePlaces.js";
import {checkMode} from "./checkMode.js";


let buttonLoadMore = document.querySelector('#loadMoreConnections');

let appendButtonFetchMore = (mode) => {
    let gametype = checkMode(mode);

    buttonLoadMore.addEventListener('click', function () {
        let allConns = document.querySelectorAll('button.btn_more');
        allConns[allConns.length - 1].getAttribute('data-placestart');
        fetchMorePlaces(allConns[allConns.length - 1].getAttribute('data-placestart'), document.querySelector('p#placeEndInfo').innerHTML, allConns[allConns.length - 1].getAttribute('data-time'), gametype);
    })
}

export {appendButtonFetchMore};