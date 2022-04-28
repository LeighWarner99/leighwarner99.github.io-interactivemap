const apiKey = 'pk.eyJ1IjoibGVpZ2g5OTkiLCJhIjoiY2wxZXdsMG43MDBhajNkcGZ6OTB6YWRjaCJ9.Cw81XzkSnwd05aIR4ek-Rw';
const map = L.map('map').setView([53.343492, -6.303096], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// adding a maker
const marker1 = L.marker([53.359333776842796, -6.264963016509977]).addTo(map);
const marker2 = L.marker([53.32450114993277, -6.354810023075451]).addTo(map);
const marker3 = L.marker([53.33942093025501, -6.249937337866909]).addTo(map);
const marker4 = L.marker([53.34451605008868, -6.269963084431973]).addTo(map);
const marker5 = L.marker([53.343755812869404, -6.2792062389524546]).addTo(map);
const marker6 = L.marker([53.362352350198385, -6.272630023029879]).addTo(map);
const marker7 = L.marker([53.3241238925218, -6.427229629949566]).addTo(map);
const marker8 = L.marker([53.32236470389194, -6.3934648231012305]).addTo(map);
const marker9 = L.marker([53.3512053199182, -6.260269123049618]).addTo(map);
const marker10 = L.marker([53.3515803819934, -6.267611584419626]).addTo(map);
const marker11 = L.marker([53.33396074172391, -6.275555123080883]).addTo(map);
const marker12 = L.marker([53.26384812011494, -6.111010984575096]).addTo(map);
// add popup message
// contains a div with the title in a h3
// video source and style
let batmon = `
<div style="text-align:center">
    <h3>Batmon</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/batmonfinal.mp4" type="video/mp4">
   
</div>
`

// add popup message
let egg = `

<div style="text-align:center">
    <h3>Egg</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/EGGfinal.mp4" type="video/mp4">
   
</div>
`

// add popup message
let merrionegg = `

<div style="text-align:center">
    <h3>Merrion Egg</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/MERRIONEGG.mp4" type="video/mp4">
   
</div>
`

// add popup message
let numbers = `

<div style="text-align:center">
    <h3>Numbers</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/numbersfinal.mp4" type="video/mp4">
   
</div>
`
// add popup message
let seahorse = `

<div style="text-align:center">
    <h3>Seahorse</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/seahorse.mp4" type="video/mp4">
   
</div>
`
// add popup message
let beauty = `

<div style="text-align:center">
    <h3>Beauty</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/BEAUTY.mp4" type="video/mp4">
   
</div>
`
// add popup message
let hello = `

<div style="text-align:center">
    <h3>Hello</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/HEELLOOO.mp4" type="video/mp4">
   
</div>
`
// add popup message
let grafmon = `

<div style="text-align:center">
    <h3>Grafmon</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/grafmonfinal.mp4" type="video/mp4">
   
</div>
`

// add popup message
let swan = `

<div style="text-align:center">
    <h3>Swan</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/swan.mp4" type="video/mp4">
   
</div>
`

// add popup message
let wavywind = `

<div style="text-align:center">
    <h3>Wavywind</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/WAVYWIND 04.mp4" type="video/mp4">
   
</div>
`
// add popup message
let carhand = `

<div style="text-align:center">
    <h3>Carhand</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/carhand.mp4" type="video/mp4">
   
</div>
`

// add popup message
let mushroom = `

<div style="text-align:center">
    <h3>Mushroom</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/mushroomfinal.mp4" type="video/mp4">
   
</div>
`

// Add the pop up to the map
marker1.bindPopup(batmon);
marker2.bindPopup(egg);
marker3.bindPopup(merrionegg);
marker4.bindPopup(numbers);
marker5.bindPopup(seahorse);
marker6.bindPopup(beauty);
marker7.bindPopup(hello);
marker8.bindPopup(grafmon);
marker9.bindPopup(swan);
marker10.bindPopup(wavywind);
marker11.bindPopup(carhand);
marker12.bindPopup(mushroom);