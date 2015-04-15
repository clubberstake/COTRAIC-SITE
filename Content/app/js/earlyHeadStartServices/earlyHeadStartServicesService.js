app.factory('EarlyHeadStartServicesService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/earlyHeadStartServices/earlyHeadStartServices.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);