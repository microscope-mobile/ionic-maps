'use strict';

var _$ionicLoading;

// Maps controller class
function MapsCtrl($ionicLoading) {
	this.map = null;
	_$ionicLoading = $ionicLoading;
}

/**
 * map created event
 */
MapsCtrl.prototype.mapCreated = function (map) {
	this.map = map;
};

/**
 * Centering command
 */
MapsCtrl.prototype.centerOnMe = function () {
	var self = this;

	console.log("Centering");
    if (!this.map) {
		return;
    }

    this.loading = _$ionicLoading.show({
		content: 'Getting current location...',
		showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
		console.log('Got pos', pos);
		self.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		self.loading.hide();
    }, function (error) {
			alert('Unable to get location: ' + error.message);
	});
};

module.exports = MapsCtrl;