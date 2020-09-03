'use strict';

if (typeof window !== 'undefined') { var global= global || window; }

global.volume= {
    toString: function() {
        return "calculate volume of solids, usage:\nvolume.cylinder(radius, height)\nvolume.sphere(radius)\n"
    },
};

volume.cylinder= function(radius, height) {
    if (arguments.length < 2) {
		return 'usage: volume.cylinder(radius, height)';
	}
	return Math.PI * radius * radius * height;
};


volume.sphere= function(radius) {
    if (arguments.length < 1) {
        return 'usage: volume.sphere(radius)';
    }
    return Math.PI * Math.pow(radius, 3);
};
