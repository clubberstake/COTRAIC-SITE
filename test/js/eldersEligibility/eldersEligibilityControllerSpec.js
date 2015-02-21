'use strict';

describe('Unit: EldersEligibilityController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EldersEligibilityController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('EldersEligibilityController', {
                $scope: scope
            });
        }));

        it('sets the default title of About Us', function () {
            expect(scope.titletext).toEqual('Elders Eligibility');
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual('The Council of Three Rivers American Indian Center, Inc. was established in 1969 to provide the opportuntity for Native Americans to share their culture and values and to provide education to improve the quality of life and elevate their economic status. The Elders program offered a variety of services and activities to the Native American Elderly, since 1977. The Native American Elders Program can help Elders with their search for justice, inherited rights, scocio-economic status, determining without termination and most important, the right to be different. You may be eligible for a number of services. Anyone age 45 and over is eligible for the Native American Elders program. We can help make these services available by referring you to various programs. The Native American Elders program is always available for information & help, just call 412-782-4457 x202 AN AMERICAN INDIAN (NATIVE AMERICAN) This is a person who: Is of Indian descent and recognized as such in the community in which they live or is enrolled or registered with an Indian Tribe or Reservation if not enrolled / registered. who is 25% or more of Native American descent.');
        });
    });
});