var app = angular.module('ForecastApp', []);

angular.module('ForecastApp')

.filter('timestampToDate', function () {
   return function (timestamp) {
       var date = new Date(timestamp * 1000);
       var dateObject = date.getFullYear() +'/'+ ('0' + (date.getMonth() + 1)).slice(-2) +'/'+ ('0' + date.getDate()).slice(-2);
       return dateObject;
   };
})

  .filter('formatTemperature', formatTemperatureFilter);
    var degreesSymbol = '\u00B0';

    function convertKelvinToFahrenheit(value) {
        return Math.round(value * 9.0 / 5.0 - 459.67);
    }

    // not needed currently
    // function convertCelsiusToFahrenheit(value) {
    //     return Math.round(value * 9.0 / 5.0 + 32);
    // }

    // function convertFahrenheitToCelsius(value) {
    //     return Math.round((value - 32) * 5.0 / 9.0);
    // }

    function addDegreesSymbol(value) {
        return value += degreesSymbol;
    }

    function formatTemperatureFilter() {
     return function (value, scale, label) {
         var value = parseInt(value, 10),
             convertedValue;

        //  if (isNaN(value)) throw new Error('Input is not a number');

         if (scale === 'F') {
             convertedValue = convertKelvinToFahrenheit(value);
         } else if (scale === 'C') {
             convertedValue = convertKelvinToCelsius(value);
         } else {
             throw new Error('Not a valid scale');
         }

         return label ? addDegreesSymbol(convertedValue) : convertedValue;
     };
   }
