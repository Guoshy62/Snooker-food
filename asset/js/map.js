document.addEventListener("DOMContentLoaded", () => {


const map = L.map('map').setView([50.28089170951495, 2.7919246797282753], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
/*attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/
}).addTo(map);


const marker = L.marker([50.28089170951495, 2.7919246797282753]).addTo(map);
marker.bindPopup('Nous sommes ici !').openPopup();

}); 