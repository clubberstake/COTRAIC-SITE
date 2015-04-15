app.factory('WIALocationsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/wiaLocations/wiaLocations.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);