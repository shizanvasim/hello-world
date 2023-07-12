var map;
function init() {
    map = WE.map('map', {
        center: [36.057944835, -112.18688965],
        zoom: 3.1,
        dragging: true,
        scrollWheelZoom: true
    });

    var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 16,
        attribution: 'WebGLEarth example',
        tms: true
    }).addTo(map);

    //Add TileJSON layer
    var json = { "profile": "mercator", "name": "Grand Canyon USGS", "format": "png", "bounds": [-112.26379395, 35.98245136, -112.10998535, 36.13343831], "minzoom": 10, "version": "1.0.0", "maxzoom": 16, "center": [-112.18688965, 36.057944835, 13], "type": "overlay", "description": "", "basename": "grandcanyon", "tilejson": "2.0.0", "sheme": "xyz", "tiles": [""] };
    var grandcanyon = WE.tileLayerJSON(json);
    grandcanyon.addTo(map);

    grandcanyon.setOpacity(0.7);
    document.getElementById('opacity2').addEventListener('change', function (e) {
        grandcanyon.setOpacity(e.target.value);
    });
    // WE.marker([json.center[1], json.center[0]]).addTo(map);

}


// Pan To Important Function
function panTo(coords) {
    map.panTo(coords);
}



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(10, 150);


// Set Location To Egypt
function addSomeMarkers(lat, lon, locationName, tagline) {
    map.fitBounds([[randomNumber, 100], [randomNumber, 154]]);
    map.panInsideBounds([[0, 200], [0, 200]],
        { heading: 90, tilt: 25, duration: 1 });

    setTimeout(() => {
        // document.getElementById('addmarkers').disabled = true;
        var marker = WE.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<h2>${locationName}</h2><br/><span>${tagline}</span>`, { maxWidth: 150, closeButton: true }).openPopup();
        map.panTo([lat, lon]);

        // let points = [
        //     [31, 25],
        //     [21, 25],
        //     [22, 37],
        //     [31, 34],
        //     [31, 25],
        // ]

        // var anotherPolygon = function (e) {
        //     WE.polygon(points, {
        //         color: '#000',
        //         opacity: 1,
        //         fillColor: '#fff',
        //         fillOpacity: 0.7,
        //         weight: 2
        //     }).addTo(map);
        //     marker.off('click', anotherPolygon);
        // };
        // marker.on('click', anotherPolygon);
    }, 1000)
}



setInterval(() => {
    console.clear();
}, 2500)