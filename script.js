var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input', function() {
    let c = this.value;
    let f = (c * 9) / 5 + 32;
    let k = parseFloat(c) + 273.15; // convert c to float and add 273.15
    kel.value = k.toFixed(3);
    fah.value = f.toFixed(3);
});

fah.addEventListener('input', function() {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    let k = (parseFloat(f) + 459.67) * 5 / 9;
    cel.value = c.toFixed(3);
    kel.value = k.toFixed(3);
});

kel.addEventListener('input', function() {
    let k = this.value;
    let c = k - 273.15;
    let f = c * 9 / 5 + 32;
    fah.value = f.toFixed(3);
    cel.value = c.toFixed(3);
});
