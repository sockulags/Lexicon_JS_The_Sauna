let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
let lowLimit = 0;
let highLimit = 1000;
let correctTemp = false;


do  {
    
let americanTemp = lowLimit + Math.ceil(Math.random()*(highLimit-lowLimit))
let guessedTemp = convertFahrenheitToCelsius(americanTemp);
console.log(`Setting the temp to ${americanTemp} degress fahrenheit...`)

correctTemp = acceptableTempSauna(guessedTemp);
if(correctTemp){
    console.log(`The temperatue is set to ${guessedTemp} degrees celsius and is within acceptable range.`)
}
else if(guessedTemp < minAcceptableTemp){
   console.log("It's too cold");
   lowLimit = convertCelsisToFahrenheit(guessedTemp);   
}
else if(guessedTemp > maxAcceptableTemp){
    console.log("It's too hot.")
    highLimit = convertCelsisToFahrenheit(guessedTemp);
}

}while (!correctTemp)



function acceptableTempSauna(temp) {
    return temp >= minAcceptableTemp && temp <= maxAcceptableTemp;
}

function convertCelsisToFahrenheit(temp) {
    return parseInt((temp * (9/5) + 32).toFixed(0));
}

function convertFahrenheitToCelsius(temp) {
    return parseInt(((temp-32) * (5/9)).toFixed(0));
}
