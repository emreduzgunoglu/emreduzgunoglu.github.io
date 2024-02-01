let allServersBtn = document.getElementById("allServers")
allServersBtn.addEventListener("click", createMarker);

const map = tt.map({
    key: "cLv4AxstWGQiQgUGCXGAwspU8DyBT0MC",
    container: "map",
    center: [32.78, 39.92],
    /* maxBounds: [[-0.01717, 51.47245], [0.01283, 51.48245]], */
    zoom: 10.2
})

map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());

map.on('load', () => {

    /* let div = document.createElement('div')
    div.innerHTML = '<p> Hello There! </p>'

    let popup = new tt.Popup({
        closeButton: false,
        offset: 35,
        anchor: 'bottom'
    }).setDOMContent(div) */
})

let allMarkers = [];
function createMarker(marker) {
    let div = document.createElement('div')
    div.style.fontSize = "16px";
    let status = marker.status ? "Online" : "Offline";

    div.innerHTML = "<h2> " + marker.name + "</h2>" + "<p> Status: " + status +
        " <br> Occupancy Rate: %" + marker.ratio + " <br> Location:  " + marker.location + "</p>"

    let popup = new tt.Popup({
        closeButton: false,
        offset: 35,
        anchor: 'bottom'
    }).setDOMContent(div)

    let newMarker = new tt.Marker().setLngLat(marker.location).setPopup(popup).addTo(map);
    return newMarker;
}

let markers = [
    { name: "Makine-1", location: [32.8, 40], status: true, ratio: '100' },
    { name: "Makine-2", location: [32.7, 39.9], status: true, ratio: '60' },
    { name: "Makine-3", location: [32.8, 39.9], status: true, ratio: '20' },
    { name: "Makine-4", location: [32.82, 39.83], status: true, ratio: '10' },
    { name: "Makine-5", location: [32.67, 39.85], status: true, ratio: '70' },
    { name: "Makine-6", location: [32.68, 39.95], status: true, ratio: '0' },
    { name: "Makine-7", location: [32.92, 39.94], status: true, ratio: '10' },
    { name: "Makine-8", location: [32.87, 39.97], status: false, ratio: '50' },
    { name: "Makine-9", location: [32.83, 39.93], status: true, ratio: '60' },
    { name: "Makine-10", location: [32.79, 39.94], status: true, ratio: '80' }
];

function createMarkersAndTable() {
    markers.forEach(markerInfo => {
        let newMarker = createMarker(markerInfo);
        allMarkers.push(newMarker);
        addToTable(markerInfo);
    });
}

createMarkersAndTable();

function addToTable(marker) {
    var table = document.getElementById("info-table");

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    let status = marker.status ? "Online" : "Offline";
    let statusColor = marker.status ? "#629f00" : "red";

    cell1.innerHTML = "<span class='server-name'> " + marker.name + "</span>";
    cell2.innerHTML = status;
    cell2.style.color = statusColor;
    cell3.innerHTML = marker.location;
    cell4.innerHTML = "%" + marker.ratio;
}

function addClickEventToServerName() {
    var serverNames = document.getElementsByClassName("server-name");

    for (var i = 0; i < serverNames.length; i++) {
        serverNames[i].addEventListener("click", function () {
            var serverName = this.innerText;
            var serverCount = serverName.substring(7);
            allMarkers[serverCount-1].togglePopup();
        });
    }
}

addClickEventToServerName();