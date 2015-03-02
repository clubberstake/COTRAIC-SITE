app.factory('EarlyHeadstartContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('earlyHeadstartContact/earlyHeadstartContact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);