$(document).ready(function () {

var map = L.map('map').setView([53.299436, -8.756855], 14);
L.tileLayer('http://{s}.tile.cloudmade.com/49a951fe09cb4104ae574520ac127b6e/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);
var marker = L.marker([53.299436, -8.756855]).addTo(map);
marker.bindPopup("<strong>Athenry Physiotheraphy</strong>").openPopup();
});
