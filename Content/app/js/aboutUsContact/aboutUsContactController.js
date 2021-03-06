app.controller('AboutUsContactController', ['$scope', 'AboutUsContactService',

    function ($scope, AboutUsContactService) {
        AboutUsContactService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.oname = data.data.oname;
	    $scope.onameshort = data.data.onameshort;
            $scope.addressLine = data.data.addressLine;
            $scope.cityLine = data.data.cityLine;
            $scope.phoneLine = data.data.phoneLine;
            $scope.faxLine = data.data.faxLine;
            $scope.contactName = data.data.contactName;
            $scope.contactEmail = data.data.contactEmail;

	    $scope.displayPopup = data.data.displayPopup;
	    
        })


        $scope.openEmail = function () {
            $scope.showEmailDialog = !$scope.showEmailDialog;
	    $scope.aboutUsContactInfo = { cname: $scope.contactName, email: $scope.contactEmail};
        };
    }
]);



