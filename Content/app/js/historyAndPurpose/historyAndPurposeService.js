app.factory('HistoryAndPurposeService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('Content/app/js/historyAndPurpose/historyAndPurpose.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);
