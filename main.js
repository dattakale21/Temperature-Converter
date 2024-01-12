let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')   // for button


function roundNumber(number) {                       // function for round off the number
    return Math.round(number * 100) / 100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value)       // prasefloat--> for converting the string into floating point number
    let fTemp = (cTemp * (9 / 5)) + 32               // celcius to fahrenheit conversion forumla
    let kTemp = cTemp + 273.15                       // celcius to kelvin conversion forumla

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)                // fahrenheit to celcius conversion forumla
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15       // fahrenheit to kelvin conversion forumla

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15                        // kelvin to celcius conversion forumla
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32       // kelvin to fahrenheit conversion forumla

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})


btn.addEventListener('click', () => {                 // after clicking action to the button.
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
});

// Code By - Datta Kale