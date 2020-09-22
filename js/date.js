const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', time: 'numeric'};
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', options);
