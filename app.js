
const zabrzeCords = [50.31207380460134, 18.777646035084416]



const map = L.map("map").setView(zabrzeCords,13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



const bartoszGeoLoc = [50.285100148250955, 18.788326163035148];
const michalDomiGeoLoc = [50.3416083977385, 18.77335091837882];
const blazejGeoLoc = [50.280351623971306, 18.812031767035577];
const jasiuGeoLoc = [50.280274215982075, 18.810959854777423];
const bizonGeoLoc = [50.29295491255189, 18.784140779246588];
const lukaszGeoLoc = [50.29937035161084, 18.84008917532767];
const tomaszGeoLoc = [50.29956678006471, 18.83809869105105];
const pawelGeoLoc = [50.330952497465326, 18.784776763501085];
const kolusiaGeoLoc = [50.33736801443497, 18.769394356725957]

const locations = [bartoszGeoLoc,michalDomiGeoLoc,blazejGeoLoc,jasiuGeoLoc,bizonGeoLoc,lukaszGeoLoc,tomaszGeoLoc,pawelGeoLoc,kolusiaGeoLoc]

locations.forEach((location)=>{
    
    let animatedIcon = L.icon({
      iconUrl: './giphy.gif',
      iconSize: [32, 32], // Rozmiar ikony
      iconAnchor: [16, 16], // Punkt zakotwiczenia ikony
      popupAnchor: [0, -16] // Punkt, w którym pojawi się popup
  });

  const marker = L.marker(location,{icon:animatedIcon}).addTo(map)
})



 let polygon = L.polygon([michalDomiGeoLoc,pawelGeoLoc,tomaszGeoLoc,lukaszGeoLoc,blazejGeoLoc,jasiuGeoLoc,bartoszGeoLoc,bizonGeoLoc,kolusiaGeoLoc]).addTo(map)

/*
let bartoszMarker = L.marker(bartoszGeoLoc).addTo(map);
let michalDomiMarker = L.marker(michalDomiGeoLoc).addTo(map);
let blazejMarker = L.marker(blazejGeoLoc).addTo(map);
let jasiuMarker = L.marker(jasiuGeoLoc).addTo(map);
*/