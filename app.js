#!/usr/bin/env node

'use strict';
const util= require('util');
const fs= require('fs');
const repl = require('repl');


//log console output to file
const consoleLogFile= 'consolelog.log';
const consoleLog= fs.createWriteStream(consoleLogFile, { 'flags': 'a' });
consoleLog.write('\n// ************* starting at: ' + new Date().toISOString() + '\n');

const stderrWriteSave= process.stderr.write;
process.stderr.write= function(data) {
    consoleLog.write(data.replace(/\033\[[0-9;].m?/g, '').replace('\r', '\n'));
    stderrWriteSave.apply(this, arguments);
};

const stdoutWriteSave= process.stdout.write;
process.stdout.write= function(data) {
    consoleLog.write(data.replace(/\033\[[0-9;].m?/g, '').replace('\r', '\n'));
    stdoutWriteSave.apply(this, arguments);
};


var r;
var deg= true;

global.deg= function() {
    deg= true;
    r.setPrompt('deg>');
};
global.rad= function() {
    deg= false;
    r.setPrompt('rad>');
};

const getVarName= obj => Object.keys(obj)[0];

global.save= function(variable, filename) {
    if (filename) {
        if (!filename.endsWith('.json')) {
            filename += '.json';
        }
    }
    else {
        filename= getVarName(variable) + '.json';
    }
    fs.writeFileSync(filename, JSON.stringify(variable, null, 2));
};

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
    return deg ? Math.acos(sincos) * 180 * Math.PI : Math.acos(sincos);
};
global.acosh= Math.acosh;

global.asin= function(sincos) {
    return deg ? Math.asin(sincos) * 180 * Math.PI : Math.asin(sincos);
};
global.asinh= Math.asinh;

global.atan= function(tan) {
    return deg ? Math.atan(tan) * 180 * Math.PI : Math.atan(tan);
};
global.atan2= function(tan) {
    return deg ? Math.atan2(tan) * 180 * Math.PI : Math.atan2(tan);
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
    var result= deg ? Math.sin(Math.PI * degrad / 180) : Math.sin(degrad);
    return result < 1e-14 ? 0 : result;
};
global.sinh= Math.sinh;

global.cos= function(degrad) {
    var result = deg ? Math.cos(Math.PI * degrad / 180) : Math.cos(degrad);
    return result < 1e-14 ? 0 : result;
};
global.cosh= Math.cosh;

global.tan= function(degrad) {
    return deg ? Math.tan(Math.PI * degrad / 180) : Math.tan(degrad);
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


r= repl.start({prompt: 'deg>' })
