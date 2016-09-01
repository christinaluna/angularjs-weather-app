app.factory('forecast', ['$http', '$window',
function($http, $window) {
  var apiKey = $window.localStorage.getItem('weatherApiKey');
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?id=5308655&&APPID='+apiKey)
  .success(function(data) {
    console.log(data);
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);
