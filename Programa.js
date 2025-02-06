document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([4.5866703975011385, -74.1222994824374], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var markers = [
        [4.582670078814431, -74.11656748144611, 17.5],
        [4.581142516934847, -74.11549779445733, 17],
        [4.579251965535727, -74.11356325415849, 19],
        [4.58142988030994, -74.1158315974893, 18],
        [4.578987287941083, -74.11518675072301, 19]
    ];

    markers.forEach(function (marker) {
        L.marker([marker[0], marker[1]]).addTo(map);
    });
});