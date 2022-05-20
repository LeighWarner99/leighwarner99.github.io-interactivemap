

const apiKey = 'pk.eyJ1IjoibGVpZ2g5OTkiLCJhIjoiY2wxZXdsMG43MDBhajNkcGZ6OTB6YWRjaCJ9.Cw81XzkSnwd05aIR4ek-Rw';
const map = L.map('map').setView([53.345483419622454, -6.267340771468092], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/leigh999/cl34j5tc6001o14s9v4wpbzvn/wmts?access_token=pk.eyJ1IjoibGVpZ2g5OTkiLCJhIjoiY2wxZXdsMG43MDBhajNkcGZ6OTB6YWRjaCJ9.Cw81XzkSnwd05aIR4ek-Rw', {
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
const marker13 = L.marker([53.33878384902731, -6.271452137410713]).addTo(map);
const marker14 = L.marker([53.34030990396765, -6.273423592384708]).addTo(map);
const marker15 = L.marker([53.337128078113416, -6.271431084445537]).addTo(map);
const marker16 = L.marker([53.3376246673788, -6.272701776499977]).addTo(map);
const marker17 = L.marker([53.31985750741642, -6.412877676530894]).addTo(map);
const marker18 = L.marker([53.344589662430984, -6.278246461693057]).addTo(map);
const marker19 = L.marker([53.34426563134462, -6.28057596169225]).addTo(map);
const marker20 = L.marker([53.35905445365077, -6.26432629235125]).addTo(map);
const marker21 = L.marker([53.3224501641176, -6.2658211003611815]).addTo(map);
const marker22 = L.marker([53.34150514631019, -6.352849915122556]).addTo(map);
const marker23 = L.marker([53.34780775678031, -6.270845377574889]).addTo(map);
const marker24 = L.marker([53.35322158965548, -6.267334685828126]).addTo(map);
const marker25 = L.marker([53.33339602575879, -6.274850755178759]).addTo(map);

// add popup message
// contains a div with the title in a h3
// video source and style
let batmon = `
<div style="text-align:center">
    <h3>Batmon</h3>
    <video autoplay loop>
    <source src="videos/batmonfinal.mp4" type="video/mp4">
   
</div>
`

// add popup message
let egg = `

<div style="text-align:center">
    <h3>Egg</h3>
    <video width="1080" height="1920" autoplay loop>
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
    <source src="videos/carhandfinal.mp4" type="video/mp4">
   
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
// add popup message
let propellor = `
<div style="text-align:center">
    <h3>Propellor</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/PROPELLOR.mp4" type="video/mp4">
   
</div>
`
// add popup message
let construction = `
<div style="text-align:center">
    <h3>Construction</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/CONSTRUCTION_FINAL.mp4" type="video/mp4">
   
</div>
`

// add popup message
let frogs = `
<div style="text-align:center">
    <h3>Frogs</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/FROGS.mp4" type="video/mp4">
   
</div>
`
// add popup message
let tilewall = `
<div style="text-align:center">
    <h3>Tile Wall</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/TILEWALL.mp4" type="video/mp4">
   
</div>
`
// add popup message
let electrip = `
<div style="text-align:center">
    <h3>ElecTrip</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/ELECTRIP.mp4" type="video/mp4">
   
</div>
`
// add popup message
let eraser = `
<div style="text-align:center">
    <h3>Eraser</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/ERASER.mp4" type="video/mp4">
   
</div>
`
// add popup message
let suitcase = `
<div style="text-align:center">
    <h3>Suitcase</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/SUITCASE_final.mp4" type="video/mp4">
   
</div>
`
// add popup message
let wallsmoke = `
<div style="text-align:center">
    <h3>Wallsmoke</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/WALLSMOKE.mp4" type="video/mp4">
   
</div>
`
// add popup message
let fruity = `
<div style="text-align:center">
    <h3>Fruity</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/FRUITY_final.mp4" type="video/mp4">
   
</div>
`
// add popup message
let ballyerblinds = `
<div style="text-align:center">
    <h3>Ballyer Blinds</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/BALLYERBLINDS.mp4" type="video/mp4">
   
</div>
`
// add popup message
let huestreet = `
<div style="text-align:center">
    <h3>Huestreet</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/huestreetfinal.mp4" type="video/mp4">
   
</div>
`

// add popup message
let bear = `
<div style="text-align:center">
    <h3>Bear</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/BEARfinal.mp4" type="video/mp4">
   
</div>
`
// add popup message
let bubble = `
<div style="text-align:center">
    <h3>Bubble Wrap</h3>
    <video width="200" height="240" autoplay loop>
    <source src="videos/bubblewrapfinal.mp4" type="video/mp4">
   
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
marker13.bindPopup(propellor);
marker14.bindPopup(construction);
marker15.bindPopup(frogs);
marker16.bindPopup(tilewall);
marker17.bindPopup(electrip);
marker18.bindPopup(eraser);
marker19.bindPopup(suitcase);
marker20.bindPopup(wallsmoke);
marker21.bindPopup(fruity);
marker22.bindPopup(ballyerblinds);
marker23.bindPopup(huestreet);
marker24.bindPopup(bear);
marker25.bindPopup(bubble);



