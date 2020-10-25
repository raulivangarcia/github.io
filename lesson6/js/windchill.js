window.onload = function windchill() {
    let t = parseFloat(document.querySelector("#currenttemp").textContent);
    let s = parseFloat(document.querySelector("#windspeed").textContent);
    let output = "N/A";
    if (t <= 50 && s >= 3) {
        let f = 35.74 + .6215 * t - (35.75 * s ^ .16 + (.4275 * (s ^ .16)));
        output = Math.round(f);
    }
        document.getElementById("output").innerHTML

}