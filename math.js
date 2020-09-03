'use strict';

if (typeof window !== 'undefined') { var global= global || window; }

global.E= Math.E;
global.LN10= Math.LN10;
global.LN2= Math.LN2;
global.LOG10E= Math.LOG10E;
global.LOG2E= Math.LOG2E;
global.PI= Math.PI;
global.pi= Math.PI;
global.SQRT1_2= Math.SQRT1_2;
global.SQRT2= Math.SQRT2;

global.abs= Math.abs;

global.acos= function(sincos) {
    return global._deg ? Math.acos(sincos) * 180 * Math.PI : Math.acos(sincos);
};
global.acosh= Math.acosh;

global.asin= function(sincos) {
    return global._deg ? Math.asin(sincos) * 180 * Math.PI : Math.asin(sincos);
};
global.asinh= Math.asinh;

global.atan= function(tan) {
    return global._deg ? Math.atan(tan) * 180 * Math.PI : Math.atan(tan);
};
global.atan2= function(tan) {
    return global._deg ? Math.atan2(tan) * 180 * Math.PI : Math.atan2(tan);
};
global.atanh= Math.atanh;

global.cbrt= Math.cbrt;
global.ceil= Math.ceil;
global.clz32= Math.clz32;
global.exp= Math.exp;
global.expm1= Math.expm1;
global.floor= Math.floor;
global.fround= Math.fround;
global.hypot= Math.hypot;
global.imul= Math.imul;

global.log= Math.log;
global.log10= Math.log10;
global.log1p= Math.log1p;
global.log2= Math.log2;

global.sin= function(degrad) {
    var result= global._deg ? Math.sin(Math.PI * degrad / 180) : Math.sin(degrad);
    return result < 1e-14 ? 0 : result;
};
global.sinh= Math.sinh;

global.cos= function(degrad) {
    var result = global._deg ? Math.cos(Math.PI * degrad / 180) : Math.cos(degrad);
    return result < 1e-14 ? 0 : result;
};
global.cosh= Math.cosh;

global.tan= function(degrad) {
    return global._deg ? Math.tan(Math.PI * degrad / 180) : Math.tan(degrad);
};
global.tanh= Math.tanh;

global.max= Math.max;
global.min= Math.min;
global.pow= Math.pow;
global.sqrt= Math.sqrt;
global.trunc= Math.trunc;
global.random= Math.random;
global.round= Math.round;
global.sign= Math.sign;
