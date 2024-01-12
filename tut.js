let c = document.querySelector("#celsius input");
let f = document.querySelector("#fahrenheit input");
let k = document.querySelector("#kelvin input");


function roundnumber(num){
    return Math.round(num*100)/100;
}
c.addEventListener("input", () => {
    let a = parseFloat(c.value);
    let b = (a * (9 / 5)) + 32;
    let t = a + 273.15;

    f.value = b;
    k.value = t;
});

f.addEventListener("input", () => {
    let a = parseFloat(f.value);
    let b = (a - 32) * (5 / 9);
    let t = (a - 32) * (5 / 9) + 273.15;

    c.value = b;
    k.value = t;
});

k.addEventListener("input", () => {
    let a = parseFloat(k.value);
    let b = a - 273.15;
    let t = (a - 273.15) * (9 / 5) + 32;

    c.value = b;
    f.value = t;
});

let button = document.querySelector(".button button");

button.addEventListener("click", function () {
    c.value = "";
    f.value = "";
    k.value = "";
})