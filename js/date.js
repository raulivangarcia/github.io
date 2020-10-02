const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("last-updated").textContent = new Date().toLocaleDateString('en-US', options);
