let map = L.map('main_map').setView([10.9845237, -74.8036684,12.82], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([11.0046365, -74.8276493,13.33]).addTo(map);

//marker.bindPopup("<b>Hello world!</b><br>").openPopup();

// var popup = L.popup()
//     .setLatLng([11.0046365, -74.8276493,13.33])
//     .setContent("I am a standalone popup.")
//     .openOn(map);