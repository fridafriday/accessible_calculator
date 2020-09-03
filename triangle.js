'use strict';

if (typeof window !== 'undefined') { var global= global || window; }


global.triangle= function(a, b, c, alpha, beta, gamma) {
    return 'not implemted';
};

global.pythagoras = function(a, b, c) {
	if(!a){
	return 'a='+Math.sqrt(c*c-b*b);
	}
}
