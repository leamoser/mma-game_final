//Funktion
let fetchJson = (path) => {
    fetch(path)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch(function (error) {
            console.log('Error: ' + error.message);
        });
}

export { fetchJson };