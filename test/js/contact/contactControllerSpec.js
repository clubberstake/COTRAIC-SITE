'use strict';

describe('Unit: ContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('ContactController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, ContactService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend
            response = {
                "title": "This is the title",
                "knoxville": "This is the name of HeadStart Location",
                "knoxvilleCenter": "This is the name of the center",
                "knoxvilleAddress": "This is the address",
                "knoxvilleZip": "This is the zip code",
                "knoxvillePhone": "This is the contact information",
                "knoxvilleFax": "This is the contact information",
                "overbrook": "This is the name of HeadStart Location",
                "overbrookCenter": "This is the name of the center",
                "overbrookAddress": "This is the address",
                "overbrookZip": "This is the zip code",
                "overbrookPhone": "This is the contact information",
                "hazelwood": "This is the name of HeadStart Location",
                "hazelwoodCenter": "This is the name of the center",
                "hazelwoodAddress": "This is the address",
                "hazelwoodZip": "This is the zip code",
                "hazelwoodPhone": "This is the contact information",
                "dorseyville": "This is the name of HeadStart Location",
                "dorseyvilleCenter": "This is the name of the center",
                "dorseyvilleAddress": "This is the address",
                "dorseyvilleZip": "This is the zip code",
                "dorseyvillePhone": "This is the contact information",
                "copyrighttext" : "2014 COTRAIC, Inc.",
                "headStartEmail" : "This is the email address for t his page",
                "earlyName" : 'This is the name',
                "earlyAddressLine" : 'this is the address',
                "earlyCityLine" : 'this is the city',
                "earlyPhone" : 'This is the phone number',
                "earlyFax" : 'This is the fax number',
                "earlyEmail" : 'This is the email for early head start',
                "preKName" : 'This is the name',
                "preKAddressLine" : 'this is the address',
                "preKCityLine" : 'this is the city',
                "preKPhone" : 'This is the phone number',
                "preKFax" : 'This is the fax number',
                "preKEmail" : 'This is the email for early head start',
                "displayPopup" : false
                
            }
                httpBackend.expectGET('Content/app/js/contact/contact.json').respond(200, response);
                controller = $controller('ContactController', {
                $scope: scope,
                ContactService: ContactService
            });

            httpBackend.flush();

                
        }));

        it('sets the default title of Contact HeadStart', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the name of the area', function () {
            expect(scope.knoxville).toEqual(response.knoxville);
        });
        it('sets the name of the center', function () {
            expect(scope.knoxvilleCenter).toEqual(response.knoxvilleCenter);
        });
        it('sets the address of the Knoxville area', function () {
            expect(scope.knoxvilleAddress).toEqual(response.knoxvilleAddress);
        });
        it('sets the zip code of the Knoxville area', function () {
            expect(scope.knoxvilleZip).toEqual(response.knoxvilleZip);
        });
        it('sets the Phone number for the Knoxville area', function () {
            expect(scope.knoxvillePhone).toEqual(response.knoxvillePhone);
        });
         it('sets the fax number for the Knoxville area', function () {
            expect(scope.knoxvilleFax).toEqual(response.knoxvilleFax);
        });
        it('sets the name of the area', function () {
            expect(scope.overbrook).toEqual(response.overbrook);
        });
        it('sets the name of the center', function () {
            expect(scope.overbrookCenter).toEqual(response.overbrookCenter);
        });
        it('sets the address of the Overbrook area', function () {
            expect(scope.overbrookAddress).toEqual(response.overbrookAddress);
        });
        it('sets the zip code of the Overbrook area', function () {
            expect(scope.overbrookZip).toEqual(response.overbrookZip);
        });
        it('sets the Phone number for the Overbrook area', function () {
            expect(scope.overbrookPhone).toEqual(response.overbrookPhone);
        });
        it('sets the name of the area', function () {
            expect(scope.hazelwood).toEqual(response.hazelwood);
        });
        it('sets the name of the center', function () {
            expect(scope.hazelwoodCenter).toEqual(response.hazelwoodCenter);
        });
        it('sets the address of the Hazelwood area', function () {
            expect(scope.hazelwoodAddress).toEqual(response.hazelwoodAddress);
        });
        it('sets the zip code of the Hazelwood area', function () {
            expect(scope.hazelwoodZip).toEqual(response.hazelwoodZip);
        });
        it('sets the Phone number for the Hazelwood area', function () {
            expect(scope.hazelwoodPhone).toEqual(response.hazelwoodPhone);
        });
        it('sets the name of the area', function () {
            expect(scope.dorseyville).toEqual(response.dorseyville);
        });
        it('sets the name of the center', function () {
            expect(scope.dorseyvilleCenter).toEqual(response.dorseyvilleCenter);
        });
        it('sets the address of the Dorseyville area', function () {
            expect(scope.dorseyvilleAddress).toEqual(response.dorseyvilleAddress);
        });
        it('sets the zip code of the Dorseyville area', function () {
            expect(scope.dorseyvilleZip).toEqual(response.dorseyvilleZip);
        });
        it('sets the Phone number for the Dorseyville area', function () {
            expect(scope.dorseyvillePhone).toEqual(response.dorseyvillePhone);
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });
        it('sets the email address', function () {
            expect(scope.headStartEmail).toEqual(response.headStartEmail);
        });
        it('sets name on address for preKLocations', function () {
            expect(scope.preKName).toEqual(response.preKName);
        });
                                                         
        it('sets address for preKLocations', function () {
            expect(scope.preKAddressLine).toEqual(response.preKAddressLine);
        });
                                                                  
        it('sets city on address for preKLocations', function () {
            expect(scope.preKCityLine).toEqual(response.preKCityLine);
        });
         it('sets phone number for preKLocations', function () {
            expect(scope.preKPhone).toEqual(response.preKPhone);
        });
         it('sets fax number for preKLocations', function () {
            expect(scope.preKFax).toEqual(response.preKFax);
        });
         it('sets the email address preKLocations', function () {
            expect(scope.preKEmail).toEqual(response.preKEmail);
        });
        it('sets name on address for earlyHeadStartLocations', function () {
            expect(scope.earlyName).toEqual(response.earlyName);
        });

        it('sets address for earlyHeadStartLocations', function () {
            expect(scope.earlyAddressLine).toEqual(response.earlyAddressLine);
        });

        it('sets city on address for earlyHeadStartLocations', function () {
            expect(scope.earlyCityLine).toEqual(response.earlyCityLine);
        });
         it('sets phone number for earlyHeadStartLocations', function () {
            expect(scope.earlyPhone).toEqual(response.earlyPhone);
        });
        it('sets fax number for earlyHeadStartLocations', function () {
            expect(scope.earlyFax).toEqual(response.earlyFax);
        });
        it('sets the email address', function () {
            expect(scope.earlyHeadStartEmail).toEqual(response.earlyHeadStartEmail);
        });

        it('sets whether the email popup displays', function () {
            expect(scope.displayPopup).toEqual(response.displayPopup);
        });

    });
});
