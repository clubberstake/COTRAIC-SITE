app.factory('AnnualReportService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('Content/app/js/annualReport/annualReport.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);