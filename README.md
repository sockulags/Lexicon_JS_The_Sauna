# The Sauna
This task involves an American entering a temperature for a sauna heater until they input a temperature considered suitable. To check this, we need a temperature indicating the minimum acceptable temperature and another indicating the maximum acceptable temperature.

```js
let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
```

Unfortunately, our dear sauna visitor only understands Fahrenheit, while the sauna heater only understands Celsius. Therefore, you have been asked to write a program that converts the input from Fahrenheit to Celsius.

```js
function convertFahrenheitToCelsius(temp) {
    return parseInt(((temp-32) * (5/9)).toFixed(0));
}
```
> *`.toFixed(0)` returns a string and needs to be converted back to a number. The `0` means 0 decimals.*

The optimal temperature for the sauna is 75 degrees celsius, but the acceptable temperature range is from 73 to 77 degrees. This should be controlled entirely in a conditional statement within a loop.

```js
function acceptableTempSauna(temp) {
    return temp >= minAcceptableTemp && temp <= maxAcceptableTemp;
}
```

If the temperature is below the minimum acceptable temperature, the program should indicate that it is too cold, and the visitor should turn up the heat a bit.

```js
if(guessedTemp < minAcceptableTemp){
   console.log("It's too cold");
   lowLimit = convertCelsisToFahrenheit(guessedTemp);   
}
```
> `lowLimit` sets the lowest temperature the american is allowed to guess next, which is the same as this guess. Hopefully he guesses higher.

 After that, the sauna visitor can set a new value on the sauna heater, and the loop repeats until the temperature is within the acceptable range, and a final message to the American should be logged.

 <font size=3>**Example output:**</font>
```
Setting the temp to 408 degress fahrenheit...
It's too hot.
Setting the temp to 70 degress fahrenheit...
It's too cold
Setting the temp to 351 degress fahrenheit...
It's too hot.
Setting the temp to 220 degress fahrenheit...
It's too hot.
Setting the temp to 108 degress fahrenheit...
It's too cold
Setting the temp to 117 degress fahrenheit...
It's too cold
Setting the temp to 144 degress fahrenheit...
It's too cold
Setting the temp to 211 degress fahrenheit...
It's too hot.
Setting the temp to 175 degress fahrenheit...
It's too hot.
Setting the temp to 156 degress fahrenheit...
It's too cold
Setting the temp to 165 degress fahrenheit...
The temperatue is set to 74 degrees celsius and is within acceptable range.
```
<font size=3>[**Full code here**](https://github.com/sockulags/Lexicon_JS_The_Sauna/blob/main/the_sauna.js) </font>

 
 