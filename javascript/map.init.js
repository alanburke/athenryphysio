$(document).ready(function () {

var map = L.map('map').setView([53.299436, -8.756855], 14);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);
var marker = L.marker([53.299676124615054, -8.75533914368134]).addTo(map);
marker.bindPopup("<strong>Athenry Physiotheraphy</strong>").openPopup();
});
