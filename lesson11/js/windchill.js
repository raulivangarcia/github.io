window.onload = function windchill() {
    let t = parseFloat(document.querySelector("#currenttemp").textContent);
    let s = parseFloat(document.querySelector("#windspeed").textContent);

    if (t <= 50 && s >= 3) {
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * (t *(Math.pow(s, .16))));
        output = Math.round(f);
    }
    else {
        output = "N/A"
    }
    document.getElementById("windchill").innerHTML = output

}