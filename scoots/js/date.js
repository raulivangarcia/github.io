// let modified = new Date(document.lastModified);
// document.getElementById("last-updated").innerHTML = modified;

let modified = document.lastModified;
let today = new Date();

document.getElementById('last-updated').innerText = modified;
document.getElementById('year').textContent = today.getFullYear();