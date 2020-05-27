'use strict';

global.volume= {};

volume.cylinder= function(radius, height) {
    if (arguments.length < 2) {
		return 'usage: volume.cylinder(radius, height)';
	}
	return Math.PI * radius * radius * height;
};


volume.sphere= function(radius) {
    return Math.PI * Math.pow(radius, 3);
};
